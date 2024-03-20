import { DropdownIndicatorProps, components } from "react-select";
import { CharacterOptionType } from "../types";
import { TiArrowSortedDown } from "react-icons/ti";

// Customizes the dropdown indicator component of the select component
const DropdownIndicator = (props: DropdownIndicatorProps<CharacterOptionType>) => {
  return (
    <components.DropdownIndicator {...props}>
      <TiArrowSortedDown fontSize={25} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
