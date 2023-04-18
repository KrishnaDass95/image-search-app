import { useState } from "react";
import SearchBar from "./Components/SearchBar";


const App = () => {

  let [image, setImage] = useState([]);
  return (
    <SearchBar addImages={setImage}/>
  )
}

export default App;