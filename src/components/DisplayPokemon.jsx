import React from "react";

const FormDisplay = (props) => {
  const { pokemonList } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ol style={{ width: "100px" }}>
        {pokemonList.map((eachPokeman, idx) => {
          return <li key={idx}>{eachPokeman.name}</li>;
        })}
        ;
      </ol>
    </div>
  );
};

export default FormDisplay;
