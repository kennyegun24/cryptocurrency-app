import { useLocation } from "react-router-dom";
const Details = () => {

  const location = useLocation();
  const { state } = location;

  return (
    <div>
    <h2>{state.id.name}</h2>
    <h2>zxjhxzjh</h2>
    </div>
  )
};

export default Details;
