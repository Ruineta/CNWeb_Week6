import React from "react";

export default function SearchForm ({onChangeValue}){
    return(
        <div className = "search-box">
            <input
                type = "text"
                placeholder = "Search by name, username"
                onChange = {(e) => onChangeValue(e.target.value)}
            />
        </div>
    );
}