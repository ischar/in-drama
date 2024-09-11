package ischar.indrama.domain.drama.service;

import ischar.indrama.domain.drama.dto.DramaThumbnailListDto;
import ischar.indrama.domain.drama.entity.DramaResponse;
import ischar.indrama.domain.drama.entity.DramaThumbnail;
import ischar.indrama.domain.search.exception.DramaNotFoundException;
import ischar.indrama.domain.search.repository.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class DramaService {

    private final SearchRepository searchRepostiory;

    @Value("${tmdb.url}")
    private String apiUrl;

    @Value("${tmdb.default.genre}")
    private String defaultGenre;

    @Value("${tmdb.default.language}")
    private String defaultLanguage;

    @Value("${tmdb.token}")
    private String tmdbToken;

    private final RestTemplate restTemplate;

    @Transactional(readOnly = true)
    public DramaThumbnailListDto getDramaThumbnailList(String genre) {
        String targetUrl = apiUrl;

        if (genre.equals("recent") || genre == null || genre.equals("")) targetUrl = String.format("%s%s%s%s", apiUrl, targetUrl, defaultGenre, defaultLanguage);
        else targetUrl = String.format("%s%s%s%s", apiUrl, targetUrl, genre, defaultLanguage);
        System.out.println(targetUrl);
        String token = "Bearer " + tmdbToken;
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<>(headers);

        headers.set("Content-Type", "application/json");
        headers.set("Authorization", token);

        // 드라마 이름
        List<String> dramaNames = searchRepostiory.findAllTitles().orElseThrow(() -> new DramaNotFoundException("드라마가 존재하지 않습니다."));
        // 드라마 썸네일
        ResponseEntity<DramaResponse> responseData = restTemplate.exchange(
                targetUrl,
                HttpMethod.GET,
                entity,
                DramaResponse.class
        );

        List<DramaThumbnail> dramaThumbnails = responseData.getBody().getResults().stream()
                .map(result -> new DramaThumbnail(result.getName(), result.getPosterPath()))
                .toList();
        return new DramaThumbnailListDto(filterTumbnailsByNames(dramaNames, dramaThumbnails));
    }

    public List<DramaThumbnail> filterTumbnailsByNames(List<String> dramaNames, List<DramaThumbnail> thumbnails) {
        Set<String> nameSet = new HashSet<>(dramaNames);
        List<DramaThumbnail> result = new ArrayList<>();
        for (DramaThumbnail thumbnail : thumbnails) {
            if (nameSet.contains(thumbnail.getName())) {
                result.add(thumbnail);
            }
        }
        return result;
    }
}
