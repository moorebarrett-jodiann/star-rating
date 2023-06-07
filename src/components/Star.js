import { FaStar } from 'react-icons/fa';

function Star(props) {
  return (
    <FaStar 
        onClick={props.onClick}
        class={(props.selected) ? "fill-star" : ""}
    />
  )
}

export default Star