import React from "react";
import { Form } from "react-bootstrap";
import ActiveDropDown from "../dropDowns/ActiveDropDown";

const WizardForm3 = (props) => {
  const { onChange } = props;

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">Active</Form.Label>
        <Form.Control
          type="text"
          name="active"
          placeholder="active (true / false)"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Unit Id</Form.Label>
        <Form.Control
          type="text"
          name="UnitID"
          placeholder="Unit Id #"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Pack Size</Form.Label>
        <Form.Control
          type="text"
          name="PackSize"
          placeholder="packSize"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Image</Form.Label>
        <Form.Control
          type="text"
          name="Image"
          placeholder="Image"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Size</Form.Label>
        <Form.Control
          type="text"
          name="Size"
          placeholder="Size"
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
};

export default WizardForm3;
