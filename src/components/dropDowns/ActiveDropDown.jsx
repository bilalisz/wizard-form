import React from "react";
import { Form } from "react-bootstrap";

const ActiveDropDown = (props) => {
  const { onChange } = props;
  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">Active</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="active"
          placeholder="atctive status"
          onChange={onChange}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default ActiveDropDown;
