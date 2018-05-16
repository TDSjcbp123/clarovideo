import React from 'react'

const SearchBar = ({onChange, onKeyUp, value}) => (
  <input
    onChange={onChange}
    onKeyUp={onKeyUp}
    value={value}
    placeholder="Busqueda por titulo.."
  />
)

export default SearchBar;