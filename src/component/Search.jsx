import React, { useMemo, useState, useEffect } from 'react';
import { debounce } from "lodash";


const items = ["Apple", "Banana", "Cherry", "Date", "Grape", "Mango", "Orange"];

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    const filteredItems =  useMemo(()=>{
        const itemsList =  items.filter(item =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
          );
          console.log(itemsList);
          return itemsList
    }, [searchQuery]);

    useEffect(() => {
        const debouncedSearch = debounce((query) => {
          console.log("Searching for:", query); // Log when function runs
        }, 300);
    
        debouncedSearch(searchQuery);
    
        return () => debouncedSearch.cancel();
      }, [searchQuery]);

    return (
        <div>
            <h1>Search Items</h1>
            <input 
                type='text'
                placeholder='search...'
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <ul>
                {filteredItems.length === 0 && <li>No Items found</li>}
                {filteredItems.length > 0 && filteredItems.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Search