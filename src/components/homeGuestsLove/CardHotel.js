import ImageHotel from "./ImageHotel";
import LinkHotel from "./LinkHotel";
import data from "./dataHotel";

function CardHotel() {
  return (
    data.map((data) =>
        <div className="container" key={data.id}>
            <div className="rectangle" >
                <ImageHotel imageUrl={data.imageUrl}/>
                <LinkHotel name={data.name}/>
                <div className="subtitle-caption">
                    {data.city}, {data.country}
                </div>
            </div>
        </div>
    )
  );
}

export default CardHotel;
