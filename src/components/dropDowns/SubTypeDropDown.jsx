import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const SubTypeDropDown = (props) => {
  const { onChange, SubTypeId } = props;
  const [subTypeId, setSubTypeId] = useState([1, 2, 3, 4]);

  useEffect(() => {
    fetch(
      "http://jugadapi.zederp.net/api/productsubtype/",
      { headers: { "Content-type": "application/json" } },
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => {
        if (res) {
          console.log(res);
          setSubTypeId(res.Id);
        }
      })
      .catch((err) => console.log(err.message));
  });

  console.log(subTypeId);

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left">Sub Type Id </Form.Label>
        <Form.Control
          as="select"
          name="SubTypeId"
          onSelect={onChange}
          // value={SubTypeId}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SubTypeDropDown;
