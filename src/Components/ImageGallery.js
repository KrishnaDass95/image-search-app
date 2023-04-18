import React from "react";
import ImageView from "./ImageView";

let c = 0; // to uniquely identify the images
const ImageGallery = ({ images }) => {
    return(
        <div className="image-gallery">
            {
                images.map((photo) => {
                    return (
                        <ImageView photo={photo}></ImageView>
                    )
                })
            }

        </div>
    )
}

export default ImageGallery;

//<img key={c++} src={photo.urls.small}></img>
