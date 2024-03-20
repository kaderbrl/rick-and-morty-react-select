import { useState } from "react";
import AsyncSelect from "react-select/async";
import { MultiValue, SingleValue } from "react-select";
import axios from "axios";

import { CharacterOptionType, CharactersType } from "./types";
import { Option, DropdownIndicator } from "./components";
import selectStyles from "./selectStyles";

const App = () => {
  // State to store the selected characters
  const [characters, setCharacters] = useState<MultiValue<CharacterOptionType>>([]);

  // Filters the characters based on the input value
  const filterCharacters = (
    inputValue: string,
    characters: CharacterOptionType[]
  ) => {
    return characters.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // Fetches the characters from the API and filters them based on the input value
  const promiseOptions = (inputValue: string) =>
    new Promise<CharacterOptionType[]>((resolve, reject) => {
      axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then((response) => {
          const data = response.data.results.map(
            (character: CharactersType) => ({
              value: character.id,
              label: character.name,
              image: character.image,
              episode: character.episode.length.toString(),
            })
          );

          const filteredData = filterCharacters(inputValue, data);
          resolve(filteredData);
        })
        .catch((error) => {
          reject(error);
        });
    });

  // Handles the change event of the react-select component
  const handleChange = (
    selected: MultiValue<CharacterOptionType> | SingleValue<CharacterOptionType>
  ) => {
    setCharacters(selected as MultiValue<CharacterOptionType>);
  };

  return (
    <div className='container'>
      <header>
        <img src='logo.png' alt='Rick and Morty' width={80} height={80} />
        <h1>Rick and Morty</h1>
      </header>

      {/* react-select component */}
      <div className='select-container'>
        <AsyncSelect
          isMulti
          loadOptions={promiseOptions}
          defaultOptions
          value={characters}
          onChange={handleChange}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
            DropdownIndicator,
            IndicatorSeparator: () => null,
            ClearIndicator: () => null,
          }}
          styles={selectStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            colors: {
              ...theme.colors,
              primary25: "#e2e8f0",
              primary: "#ffffff",
            },
          })}
        />
      </div>

      {/* Display the selected characters */}
      {characters.length > 0 ? (
        <div className='card-container'>
          {characters?.map((item) => (
            <div className='card' key={item.value}>
              <img
                src={item.image}
                alt={item.label}
                width={100}
                height='auto'
                loading='lazy'
              />
              <div>
                <h3>{item.label}</h3>
                <p>Episode: {item.episode}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='warning'>No character selected.</p>
      )}
    </div>
  );
};

export default App;
