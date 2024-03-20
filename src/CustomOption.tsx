import { components } from "react-select";

interface Character {
  id: string;
  name: string;
  image: string;
  episode: string;
}

const CustomOption = (props:Character) => (
  <components.Option {... props}>
    <div>
      <img src={props.image} />
      <span>{props.name}</span>
      <span>{props.episode}</span>
    </div>
  </components.Option>
);

export default CustomOption;

// import { components } from "react-select";

// interface Character {
//   id: number;
//   name: string;
//   image: string;
//   episode: string;
//   isSelected?: boolean;
// }


// const CustomOption = (props: Character) => {
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type='checkbox'
//           checked={props.isSelected}
//           onChange={() => null}
//         />
//         <img src={props.image} alt={props.name} width={50} height={50} />
//         <span>{props.name}</span>
//         <span>{props.episode}</span>
//       </components.Option>
//     </div>
//   );
// };

// export default CustomOption;
