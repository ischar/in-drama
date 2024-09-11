import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeModal } from "../../store/actions/locationActions";
import { LOCATION_TYPE } from "../../utils/locationType";
import close from "../../assets/close.png";
import RoadView from "../map/RoadView";
import locationImage from "../../assets/icon/location.png";

export default function Modal({ isOpen }) {
  const { location } = useSelector((state) => state.location);
  const modalDispatch = useDispatch();
  if (!isOpen) return null;
  const locationType = LOCATION_TYPE[location.locationInfo.placeType];
  const locationInfo = location.locationInfo;
  const coord = {lat: locationInfo.latitude, lng: locationInfo.longitude};
  function handleCloseClick() {
    modalDispatch(closeModal());
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-[540px] h-[460px]">
        <div className="relative z-50">
          <img
            src={close}
            onClick={handleCloseClick}
            className="absolute mt-4 mr-4 w-4 h-4 right-0"
            alt="close"
          />
        </div>
        <div className="flex flex-col">
          {coord && <RoadView coord={coord} />}
          <div className="flex flex-col my-4 items-start justify-center mx-4">
            <>
              <h2 className="text-2xl font-semibold">
                {locationInfo.placeName}
              </h2>
            </>
            <div className="flex flex-row items-center justify-center text-sm text-center  text-gray-500">
              {locationType.icon && locationType.icon}
              <p className="ml-2">{locationType.type}</p>
              <img
                src={locationImage}
                className="h-4 w-4 ml-4"
                alt="locationLogo"
              />
              <p className="ml-1">{locationInfo.location}</p>
            </div>
          </div>
          <div className="flex justify-end mt-4 mr-4">
            <button className="w-32 h-8 rounded-lg bg-dark-element-yellow">
              여행 코스 짜기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
