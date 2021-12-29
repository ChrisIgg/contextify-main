import { React, useState } from "react";
import { useQuery } from "@apollo/client";

import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

import { QUERY_PROFILES } from "../utils/queries";

const Time = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const [time, setTime] = useState("minutes");

  function hours() {
    setTime("hours");
  }
  function minutes() {
    setTime("minutes");
  }
  function seconds() {
    setTime("seconds");
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
            title={time}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={hours}>hours</Dropdown.Item>
            <Dropdown.Item onClick={minutes}>minutes</Dropdown.Item>
            <Dropdown.Item onClick={seconds}>seconds</Dropdown.Item>
          </SplitButton>
          <Button variant="outline-info">Search</Button>{" "}
        </InputGroup>
      </>
    </main>
  );
};

export default Time;
