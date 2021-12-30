// import fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
// import Weight from '../../pages/Weight';

const ImageDisplay = ({ weight }) => {
  // const newWeight = props.weight;
  console.log(weight, "image display");

  return (
    <div>
      {[...Array(Math.round(weight))].map(() => (
        <FontAwesomeIcon icon={faAppleAlt} />
      ))}
      {/* {weight} */}
    </div>
  );
};

// const createBanana =

export default ImageDisplay;
// \<FontAwesomeIcon icon="fa-duotone fa-banana" />
