import ImageHotel from "./ImageHotel";
import InfoHotel from "./InfoHotel";
import LinkHotel from "./LinkHotel";
import data from "./dataHotel";


function CardHotel() {
  return (
    data.map((data) =>
        <div className="container" key={data.id}>
            <div className="rectangle" >
                <ImageHotel imageUrl={data.imageUrl}/>
                <LinkHotel name={data.name}/>
                <InfoHotel city={data.city} country={data.country}/>
            </div>
        </div>
    )
  );
}

export default CardHotel;
