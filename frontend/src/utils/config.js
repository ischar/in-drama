const BASE_URL = process.env.REACT_APP_SERVER_URL;
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
const DEFAULT_IMAGE_URL = process.env.REACT_APP_DEFAULT_IMAGE_URL;
const DEFAULT_LATITUDE = process.env.REACT_APP_DEFAULT_LATITUDE;
const DEFAULT_LONGITUDE = process.env.REACT_APP_DEFAULT_LONGITUDE;
const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
const KAKAO_URL = process.env.REACT_APP_KAKAO_URL;

export const API = {
  AUTH: `${BASE_URL}/api/v1/oauth2/authorization/google`,
  USER: `${BASE_URL}/api/v1/auth`,
  SEARCH: `${BASE_URL}/api/v1/search`,
  DRAMA: `${BASE_URL}/api/v1/drama`,
  THUMBNAIL: IMAGE_URL,
  POST: `${BASE_URL}/api/v1/post`,
  TRAVEL: `${BASE_URL}/api/v1/travel`,
};

export const KEY = {
  GOOGLE: GOOGLE_KEY,
  KAKAO: KAKAO_KEY,
};

export const URL = {
  DEFAULT_IMAGE: DEFAULT_IMAGE_URL,
  KAKAO_MAP: KAKAO_URL,
};

export const VALUE = {
  DEFAULT_LATITUDE: DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE: DEFAULT_LONGITUDE,
};

export const GENRE_MAP = new Map([
  ["드라마", 18],
  ["코미디", 35],
  ["SF & 판타지", 10765],
  ["로맨스", 10749],
]);
