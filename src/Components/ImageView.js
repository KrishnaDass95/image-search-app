
import React, { useState } from "react";


const ImageView = ({ photo }) => {
    
    let [isClicked, setIsClicked] = useState(false);
    
    return (
        <div onClick={() => 
            setIsClicked(!isClicked)
        }> 
            <img src={photo.urls.thumb} alt={photo.alt_description}></img>
            {
                isClicked && 
                <div className="image-details">
                    <h3>{photo.alt_description || "Untitled"}</h3>
                    <p>{photo.user.name || "Anonymous"}</p>

                </div>
            }
        </div>
    )
}

export default ImageView;