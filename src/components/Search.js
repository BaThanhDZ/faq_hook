import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");


  function handleSearch() {
    props.onclickSearch(searchValue)
  }
  function handleChange(event) {
    setSearchValue(event.target.value); 
  }
  function handleClear(){
    props.onclickSearch("");
    setSearchValue("")
  }
  
  return (
    <div className="card-header">
      <div className="w-100 justify-content-between d-flex flex-wrap align-items-center gap-1">
        <div className="d-flex align-items-center gap-1">
          <button type="button" className="btn btn-danger">
            Bulk Delete
          </button>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-1">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search ..."
              id="input-search"
              onChange={handleChange}
              value={searchValue}
            />
            <button
              className="btn btn-flex btn-info"
              type="button"
              id="search"
              onClick={handleSearch}
            >
              Go!
            </button>
            <button
              className="btn btn-flex btn-danger"
              type="button"
              id="unsearch"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
