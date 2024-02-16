import React from "react";
import "./SearchResultslist.css";
import {SearchResults} from"../SearchResults/SearchResults"
export const SearchResultslist = ({ results }) => {
  return (
    <div className="search-results-list">
      {
      results.map((result, id) => {
        return <SearchResults result={result} key={id}/>
      })}
    </div>
  );
};
