export default function LocationCard({ locationInfo }) {

  
  return (
    <div className="my-8 w-11/12 h-12 border-gray-500 border-b-0.5 hover:bg-dark-element-yellow">
      <p className="font-medium ">{locationInfo.placeName}</p>
      <p className="font-normal text-gray-300">{locationInfo.location}</p>
    </div>
  );
}
