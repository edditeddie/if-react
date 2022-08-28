function ImageHotel (props) {
    return (
        <img className="image"
             src = {props.imageUrl}
             alt = {props.name} />
    )
}

export default ImageHotel;
