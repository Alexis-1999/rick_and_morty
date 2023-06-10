import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";


export default function Nav({ onSearch }) {
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <div>
        <button>
          <Link to='/home'>Home</Link>
        </button>
        <button>
          <Link to='/about'>About</Link>
        </button>
        <button>
          <Link to='/favorites'>Favorites</Link>
        </button>
      </div>
    </>
  );
}
