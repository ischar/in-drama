import groovy.json.JsonOutput
import groovy.json.JsonSlurper

pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                echo 'Checkout frontend'
                sh '''
					          rm -r frontend
				        '''
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/frontend']],
                    userRemoteConfigs: [[url: 'https://github.com/ischar/in-drama.git']]
                ])
            }
            post {
                success {
                    echo 'Checkout stage succeeded!'
                }
                failure {
                    echo 'Checkout stage failed!'
                }
            }
        }

        stage("Add Env") {
            steps {
                dir('fe-deploy/frontend') {
                    withCredentials([file(credentialsId: 'ENV', variable: 'ENV')]) {
                        sh 'sudo cp ${ENV} .env'
                    }
                }
            }
            post {
                success {
                    echo 'Add Env stage succeeded!'
                }
                failure {
                    echo 'Add Env stage failed!'
                }
            }
        }
        stage("Build") {
            steps {
                echo 'Build frontend'
                sh '''
                    cd frontend
                    npm install
                    npm run build
                '''
            }
            post {
                success {
                    echo 'Build stage succeeded!'
                }
                failure {
                    echo 'Build stage failed!'
                }
            }
        }

        stage("Send Build") {
            steps {
			          sshPublisher(publishers: [sshPublisherDesc(configName: 'ubuntu', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''
                sudo rm -rf /var/www/html/build
                sudo cp -r build /var/www/html''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/', remoteDirectorySDF: false, removePrefix: 'frontend', sourceFiles: 'frontend/build/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
            post {
                success {
                    echo 'Send build stage succeeded!'
                }
                failure {
                    echo 'Send build stage failed!'
                }
            }  
        }
    }

    post {
        success {
            script {
                notifyDiscord(true)
            }
        }
        failure {
            script {
                notifyDiscord(false)
            }
        }
    }
}

def notifyDiscord(boolean isSuccess) {
    def author = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
    def commitMessage = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()
    def buildTime = sh(script: "date -u --iso-8601=seconds", returnStdout: true).trim()

    withCredentials([string(credentialsId: 'FE_DISCORD_WEBHOOK_URL', variable: 'DISCORD_WEBHOOK_URL'),
                     string(credentialsId: 'DISCORD_USER_MAP', variable: 'DISCORD_USER_MAP'),
                     string(credentialsId: 'DISCORD_THUMBNAIL_URL', variable: 'DISCORD_THUMBNAIL_URL')]) {
        def discordWebhookUrl = DISCORD_WEBHOOK_URL
        def discordUserMapJson = DISCORD_USER_MAP
        def discordThumbnailUrl = DISCORD_THUMBNAIL_URL
        def discordUserMap = readJSON text: discordUserMapJson

        def authorDiscordId = discordUserMap.get(author, "defaultDiscordUserID")
        def status = isSuccess ? "✅ **Build Succeeded**" : "❌ **Build Failed**"
        def color = isSuccess ? 3066993 : 15158332

        def payload = JsonOutput.toJson([
            username: "Jenkins",
            content: "${status} <@${authorDiscordId}>",
            embeds: [[
                title: "Build #${env.BUILD_NUMBER} ${isSuccess ? 'succeeded' : 'failed'}",
                description: "Project: **${env.JOB_NAME}**",
                fields: [
                    [name: "Author", value: "<@${authorDiscordId}>", inline: true],
                    [name: "Build Number", value: "${env.BUILD_NUMBER}", inline: true],
                    [name: "Build URL", value: "${env.BUILD_URL}"],
                    [name: "Commit Message", value: "${commitMessage}"],
                    [name: "Build Time", value: "${buildTime}", inline: true],
                    [name: "Result", value: "${isSuccess ? 'Success' : 'Failed'}", inline: true]
                ],
                color: color,
                timestamp: buildTime,
                thumbnail: [url: discordThumbnailUrl] 
            ]]
        ])

        httpRequest(
            url: discordWebhookUrl,
            httpMode: 'POST',
            contentType: 'APPLICATION_JSON',
            requestBody: payload
        )
    }
}