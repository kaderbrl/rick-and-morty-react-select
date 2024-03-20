import { components, OptionProps } from "react-select";
import { CharacterOptionType } from "../types";

// Makes input value bold in the character name
const makeBoldInputMatch = (item: string | undefined, keyword: string) => {
  if (!item || !keyword) return item;
  const lowerCasedInputValue = keyword.toLowerCase();
  const hitIndex = item.toLocaleLowerCase().indexOf(lowerCasedInputValue);
  if (hitIndex === -1) return item;
  const before = item.slice(0, hitIndex);
  const match = item.slice(hitIndex, hitIndex + keyword.length);
  const after = item.slice(hitIndex + keyword.length);

  return (
    <>
      {before}
      <strong>{match}</strong>
      {after}
    </>
  );
};

// Customizes the option component of the react-select component
const Option = (props: OptionProps<CharacterOptionType>) => {
  const inputValue = props.selectProps.inputValue;

  return (
    <components.Option {...props}>
      <div className='character-option'>
        <input id={props.label} type='checkbox' defaultChecked={props.isSelected} />
        <label htmlFor={props.label}>
          <img
            src={props.data.image}
            alt={props.label}
            width={50}
            height={50}
            loading='lazy'
          />
          <div>
            <p>{makeBoldInputMatch(props.label, inputValue)}</p>
            <span>{props.data.episode} Episodes</span>
          </div>
        </label>
      </div>
    </components.Option>
  );
};

export default Option;