import React from 'react';

function SearchBar() {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for Star Wars characters, planets, and more..."
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
