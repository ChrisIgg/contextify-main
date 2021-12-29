import { React, useState } from "react";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";
function Distance() {
  const [distance, setDistance] = useState("ft");
  function feet() {
    setDistance("ft");
  }
  function inches() {
    setDistance("in");
  }
  function centimeters() {
    setDistance("cm");
  }
  return (
    <main>
      <>
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            aria-label="Text input with dropdown button"
          />
          <SplitButton
            variant="outline-secondary"
            title={distance}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={feet}>ft</Dropdown.Item>
            <Dropdown.Item onClick={inches}>in</Dropdown.Item>
            <Dropdown.Item onClick={centimeters}>cm</Dropdown.Item>
          </SplitButton>
          <Button variant="outline-info">Search</Button>{" "}
        </InputGroup>
      </>
    </main>
  );
}

export default Distance;
