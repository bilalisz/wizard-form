import React, { useState } from "react";
import style from "../assests/css/form.module.css";
import { Button, Card, Form } from "react-bootstrap";
import WizardForm1 from "./common/WizardForm1";
import WizardForm2 from "./common/WizardForm2";
import WizardForm3 from "./common/WizardForm3";
import WizardForm4 from "./common/WizardForm4";
import { MdSend } from "react-icons/md";
import axios from "axios";
import Loader from "./common/control/Loader";
import { toast } from "react-toastify";
import { handleError } from "../uyilities/utility";

const CustomForm = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [customerData, setCustomerData] = useState({
    Id: "",
    ItemNo: "",
    Title: "",
    Code: "",
    Name: "",
    ItemDetail: "",
    RegisterationNo: "",
    SubTypeId: "",
    TypeId: "",
    DivisionId: "",
    GroupDivisionId: "",
    active: "",
    UnitID: "",
    PackSize: "",
    Image: "",
    Size: "",
    CompanySiteID: "",
    CompanyID: "",
    CreatedOn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((oldState) => ({ ...oldState, [name]: value }));
    setBtnDisable(false);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    setBtnDisable(false);
    e.preventDefault();
    console.log(customerData);
    axios({
      url: " http://jugadapi.zederp.net/api/Item",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: customerData,
    })
      .then((res) => {
        console.log(res);
        toast.success("data is save");
        setLoading(false);
        setBtnDisable(true);
      })
      .catch((err) => {
        if (err.message) {
          toast.error(err.message);
          setLoading(false);
          setBtnDisable(true);
        } else {
          handleError(err);
          setLoading(false);
          setBtnDisable(true);
        }
      });
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <Card className="bg-light text-info m-3 " style={{ width: "100%" }}>
          <Card.Header>Wizard Form</Card.Header>
          <Loader isLoad={loading} />
          <Card.Body className="bg-light">
            <Form onSubmit={handleSubmit}>
              {count === 1 && (
                <WizardForm1
                  onChange={handleChange}
                  customerData={customerData}
                />
              )}
              {count === 2 && (
                <WizardForm2
                  onChange={handleChange}
                  customerData={customerData}
                />
              )}
              {count === 3 && <WizardForm3 onChange={handleChange} />}
              {count === 4 && (
                <div>
                  <WizardForm4 onChange={handleChange} />
                  <Button
                    disabled={btnDisable}
                    variant="outline-success"
                    type="Submit"
                  >
                    Submit <MdSend />
                  </Button>
                </div>
              )}

              <div className={`${style.navigationBtnWrapper}`}>
                <Button
                  disabled={count < 2}
                  onClick={() => setCount(count - 1)}
                >
                  Previous{" "}
                </Button>
                <Button
                  disabled={count > 3}
                  onClick={() => setCount(count + 1)}
                >
                  Next
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CustomForm;
