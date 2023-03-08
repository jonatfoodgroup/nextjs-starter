import React from "react";

const Typeahead = ({query, setQuery, suggestions}) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search for a user"
        />
    </div>
  );
}

export default Typeahead;