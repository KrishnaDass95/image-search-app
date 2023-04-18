import React from "react";

let c = 0; // to uniquely identify the images
const ImageGallery = ({ images }) => {
    return(
        <div className="image-gallery">
            {
                images.map((photo) => {
                    return (
                        <img key={c++} src={photo.urls.small}></img>
                    )
                })
            }

        </div>
    )
}

export default ImageGallery;

