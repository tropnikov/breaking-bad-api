import spinner from "../../imgs/spinner.gif";
import "./Spinner.scss";

const Spinner = () => {
  return <img src={spinner} alt='Loading...' className='spinner' />;
};

export default Spinner;
