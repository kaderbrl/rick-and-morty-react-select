import { StylesConfig } from "react-select";
import { CharacterOptionType } from "./types";

// Color Palette
const colors = {
  border: "#97a5ba",
  multiBackground: "#e2e8f0",
  removeBackground: "#94a3b8",
  removeIndicator: "#ffffff",
  optionText: "#475569",
};

// Customizes the styles of the select component
const selectStyles: StylesConfig<CharacterOptionType, false> = {
  control: (provided) => ({
    ...provided,
    border: `1px solid ${colors.border}`,
    "&:hover": {
      border: `1px solid ${colors.border}`,
    },
    minHeight: 50,
  }),
  menu: (provided) => ({
    ...provided,
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: colors.multiBackground,
    padding: "5px 8px",
    borderRadius: 10,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: colors.removeBackground,
    color: colors.removeIndicator,
    marginLeft: 4,
    padding: "0 6px",
  }),
  option: (provided) => ({
    ...provided,
    borderBottom: `1px solid ${colors.border}`,
    color: colors.optionText,
  }),
};

export default selectStyles;
