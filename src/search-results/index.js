import SearchResultsRow from "./search-results-row";
import {useParams} from "react-router-dom";

const SearchResults = ({ allItems}) => {
    const {color} = useParams();
    const filteredItems = allItems.filter((i) => i.color === color)

    return (
        <div>
            <h4>Showing results for {color}:</h4>
            <div className="products">
                    {filteredItems.map((i) => (
                        <SearchResultsRow key={i.id} item={i} />
                    ))}
                    </div>
        </div>
    );
};
export default SearchResults