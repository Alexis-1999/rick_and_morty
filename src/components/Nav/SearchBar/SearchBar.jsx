import React from "react";
import style from "./Search.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('')
  const handleChange = (event)=>{
    setId(event.target.value)
  }



  return (
    <div>
      <div className={style.container}>
        <input
          className={`${style.input}`}
          type="search"
          placeholder="Ingrese nombre"
          onChange={handleChange}
          value={id}
        />
        <button className={`${style.button}`} onClick={()=>onSearch(id)}>
          Agregar
        </button>
      </div>
    </div>
  );
}
