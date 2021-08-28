import { useState } from "react";
import { Button } from "react-bootstrap";
import CenteredModal from "./components/Modal/CenteredModal";
import "./App.css";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      {modalShow ? (
        <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        <Button
          className="btn"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Click to Calculate your Loan
        </Button>
      )}
    </div>
  );
}

export default App;
