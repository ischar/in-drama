import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { loginSuccess } from "../../store/actions/authActions"; // actions 파일에서 로그인 액션 가져오기
import axios from "axios";

export default function Login() {
  const [accessToken, setAccessToken] = useState(null);
  const loginDispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const token = tokenResponse.access_token;
      setAccessToken(token);
    },
  });

  useEffect(() => {
    if (accessToken) {
      // Google 사용자 정보 API 호출
      axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          loginDispatch(loginSuccess(accessToken, response.data));
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, [accessToken, loginDispatch]);

  return (
    <button
      onClick={() => login()}
      className="w-[72px] h-8 mr-[44px] justify-center rounded-md bg-light-element-gray1 dark:bg-dark-element-gray1"
    >
      로그인
    </button>
  );
}
