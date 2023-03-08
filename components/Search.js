import React, {useEffect, useState} from "react";
import styles from "@/styles/Search.module.css";

const Search = ({query}) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch from local Nextjs API 
    async function fetchData() {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setSearchResults(data);
    }

    fetchData();
  }, [query]);

  return (
    <div className={styles.search}>
      <label className={styles.label} htmlFor="search">Search</label>
      <input 
        className={styles.input}
        type="text" 
        value={query} 
        onChange={e => query(e.target.value)} 
        placeholder="Search for a user"
        />
    </div>
  );
}

export default Search;