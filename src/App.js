import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";


const App = () => {

  let [image, setImage] = useState([]);
  return (
    <>
    <SearchBar addImages={setImage}/>
    <ImageGallery images={image}></ImageGallery>
    </>
  )
}

export default App;