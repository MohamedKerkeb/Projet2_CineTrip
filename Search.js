import React, { Component } from 'react';
import './Search.css';

const Search = () => (
	<form>
		<label htmlFor="searchInput">Recherche par nom de film</label>
		<div className="inputs">
			<input type="text" placeholder="Rechercher..."/>
			<input type="submit" value="Rechercher"/>
		</div>
	</form>
);

export default Search;