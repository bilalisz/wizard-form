import React from "react";
import { Form } from "react-bootstrap";
import SubTypeDropDown from "../dropDowns/SubTypeDropDown";
import TypeIdDropDwon from "../dropDowns/TypeIdDropDwon";

const WizardForm2 = (props) => {
  const { onChange, customerData } = props;
  const { SubTypeId, TypeId } = customerData;
  console.log(SubTypeId, TypeId);

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">Registeration No</Form.Label>
        <Form.Control
          type="text"
          placeholder="RegisterationNo number #"
          name="RegisterationNo"
          onChange={onChange}
        />
      </Form.Group>

      <SubTypeDropDown onChange={onchange} SubTypeId={SubTypeId} />
      <TypeIdDropDwon onChange={onchange} TypeId={TypeId} />
    </div>
  );
};

export default WizardForm2;
