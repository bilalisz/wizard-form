import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const TypeIdDropDwon = (props) => {
  const { onChange, TypeId } = props;
  const [typeId, setTypeId] = useState([1, 2, 3, 4]);
  useEffect(() => {
    fetch(
      "http://jugadapi.zederp.net/api/producttype/",
      { headers: { "Content-type": "application/json" } },
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => {
        if (res) {
          console.log(res);
          setTypeId(res.Id);
        }
      })
      .catch((err) => console.log(err.message));
  });

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left"> Type Id </Form.Label>
        <Form.Control
          as="select"
          placeholder="type Id"
          name="TypeId"
          // value={TypeId}
          onSelect={onChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default TypeIdDropDwon;
