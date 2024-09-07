import LocationCard from "./LocationCard";

export default function Infowindow({ locationInfos = "",  onLocationClick }) {
  return (
    <div className="absolute z-50 overflow-y-auto overflow-x-hidden left-0 bg-white w-96 h-calc-100-minus-20">
      <div className="mt-4 mx-4">
        {locationInfos ? (
          <>
            <p className="text-center font-semibold">
              총 {locationInfos.locationInfos.length}개의 목록
            </p>
            {locationInfos.locationInfos.map((locationInfo, index) => (
              <LocationCard locationInfo={locationInfo} />
            ))}
          </>
        ) : (
          <p>촬영지가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
