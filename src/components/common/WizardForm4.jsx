import React from "react";
import { Form } from "react-bootstrap";

const WizardForm4 = (props) => {
  const { onChange } = props;

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">Company Site ID</Form.Label>
        <Form.Control
          type="text"
          name="CompanySiteID"
          placeholder="Company Site ID"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">CompanyID</Form.Label>
        <Form.Control
          type="text"
          name="CompanyID"
          placeholder="CompanyID"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">CreatedOn</Form.Label>
        <Form.Control
          type="text"
          name="CreatedOn"
          placeholder="CreatedOn"
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
};

export default WizardForm4;
