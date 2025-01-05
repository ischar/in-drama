import cafe from "../assets/icon/cafe.png";
import cvs from "../assets/icon/convenienceStore.png";
import playground from "../assets/icon/playground.png";
import restaurant from "../assets/icon/restaurant.png";
import station from "../assets/icon/station.png";
import shop from "../assets/icon/shop.png";
import stay from "../assets/icon/stay.png";
import store from "../assets/icon/store.png";

const className = "h-4 w-4";

export const LOCATION_TYPE = {
  cafe: {
    type: "까페",
    icon: <img src={cafe} className={className} alt="cafe" />,
  },
  cvs: {
    type: "편의점",
    icon: <img src={cvs} className={className} alt="cvs" />,
  },
  playground: {
    type: "공원",
    icon: <img src={playground} className={className} alt="playground" />,
  },
  restaurant: {
    type: "레스토랑",
    icon: <img src={restaurant} className={className} alt="restaurant" />,
  },
  station: {
    type: "역",
    icon: <img src={station} className={className} alt="station" />,
  },
  shop: {
    type: "가게",
    icon: <img src={shop} className={className} alt="shop" />,
  },
  stay: {
    type: "숙박시설",
    icon: <img src={stay} className={className} alt="stay" />,
  },
  store: {
    type: "대형마트",
    icon: <img src={store} className={className} alt="store" />,
  },
};
