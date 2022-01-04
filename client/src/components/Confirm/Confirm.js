import { React, useState } from "react";
import { Button, Alert } from "react-bootstrap";
const Confirm = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="light" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Please title your search</Alert.Heading>

        <input />

        <Button>Save</Button>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Save</Button>;
};
export default Confirm;
