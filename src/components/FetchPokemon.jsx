import React, { useState } from "react";
import DisplayPokemon from "./DisplayPokemon";
import axios from "axios";

const FetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState();

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setPokemonList(jsonResponse.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchWithAxios = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        console.log(response.data.results);
        setPokemonList(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Fetch Pokemon List</h1>
      <button onClick={fetchPokemon}> Fetch pokemon list with .then</button>
      <button onClick={fetchWithAxios}> Fetch pokemon with Axios</button>
      <div>
        {pokemonList ? (
          <DisplayPokemon pokemonList={pokemonList} />
        ) : (
          <h3> Fetch Pokemon List!</h3>
        )}
      </div>
    </div>
  );
};

export default FetchPokemon;
