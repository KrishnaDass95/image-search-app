import axios from "axios";
import { useState } from "react";

const SearchBar = ({addImages}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = async (e) => {
        console.log('search hit');
        e.preventDefault();
        const response = await axios.get("https://api.unsplash.com/search/photos",
            {
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_SECRET_KEY}`
                },
                params: {
                    query: searchTerm
                }
            });
            console.log('api response',response.data.results);

            addImages(response.data.results);

    }

    return (
        <div>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }
                }
                value={searchTerm}
            />
            <button type="button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;