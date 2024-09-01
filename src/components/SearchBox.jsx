import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helper";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search })); //spliting the categosearch coz to inputting category into the new search
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
