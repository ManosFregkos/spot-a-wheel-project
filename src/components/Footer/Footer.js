import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./footer.module.css";

function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onlyNumbers = /^[0-9]*$/;

  const checkPhoneNumber = () => {
    setError(!onlyNumbers.test(phoneNumber) || phoneNumber.length !== 10);
    setIsSubmitted(true);
  };

  const handleOnChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
    e.target.value !== 10 && setIsSubmitted(false);
  };

  return (
    <div className={classes.footerContainer}>
      <Row className="align-items-center">
        <Col className="text-align-left" xl={6} lg={6} md={6} sm={6}>
          Συμπλήρωσε εδω το τηλέφωνο σου. <br /> Θα σε καλέσουμε άμεσα.
        </Col>

        <Col className={classes.customCol} xl={6} lg={6} md={6} sm={6}>
          <div className="d-flex">
            <input
              className={classes.phoneSvg}
              type="tel"
              placeholder="Αριθμος τηλεφωνου"
              value={phoneNumber}
              onChange={handleOnChangeNumber}
              maxLength={10}
            />
            <button className={classes.submitButton} onClick={checkPhoneNumber}>
              Καλέστε
            </button>
          </div>
          <div className={classes.message} style={{ position: "absolute" }}>
            {isSubmitted && (
              <div>
                {error ? (
                  <div className={classes.error}>Validation phone error</div>
                ) : (
                  <div className={classes.success}>
                    Successfully phone submitted
                  </div>
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
