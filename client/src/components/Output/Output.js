import { React } from "react";
import { Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import Confirm from "../Confirm/Confirm";
const Output = ({ answer, output }) => {
  // const [show, setShow] = useState(true);
  if (answer) {
    return (
      <div>
        <h1>
          {Math.round(answer)} {output}
        </h1>
        <Confirm />
      </div>
    );
  }
  return <div></div>;
};

export default Output;
