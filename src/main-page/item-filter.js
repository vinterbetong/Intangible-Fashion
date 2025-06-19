import { useNavigate } from 'react-router-dom';

const Itemfilter = ({allItems}) => {
    const navigate = useNavigate();
    const colors = allItems
    ? Array.from(new Set(allItems.map((h => h.color))))
    : [];
    colors.unshift(null);
    const onSearchChange = (e) => {
        const color = e.target.value;
        navigate(`/searchresults/${color}`);
    }

    return (
        <div>
            <div className="inline">
            <p>Color:</p>
        </div>
        <div className="inline">
            <select className="form-select" onChange={onSearchChange}>
                {colors.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
        </div>
    );
}
export default Itemfilter;