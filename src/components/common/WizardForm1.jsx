import React from "react";
import { Form } from "react-bootstrap";

const WizardForm = (props) => {
  const { onChange, customerData } = props;
  // console.log(customerData);
  // const { ItemNo, Title, Code, Name, ItemDetail } = customerData;
  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter Id"
          name="Id"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="float-left">Item No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Item number #"
          name="ItemNo"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="Title"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Code"
          name="Code"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="Name"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="float-left">Item Detail</Form.Label>
        <Form.Control
          type="text"
          placeholder="Item Detail"
          name="ItemDetail"
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
};

export default WizardForm;
