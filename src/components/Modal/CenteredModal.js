import { useState } from "react";
import Slider from "../../SharedComponents/Slider";
import { closeSvg } from "../../SharedComponents/Svgs";
import Footer from "../Footer/Footer";
import classes from "./centered-modal.module.css";
import { formatNumber, finalPrice } from "../../SharedComponents/utils";

const CenteredModal = (props) => {
  const [rangeVal, setRangeVal] = useState(0);
  const [rangeValMonths, setRangeValMonths] = useState(3);

  const updateRange = (val) => {
    setRangeVal(val);
  };

  const updateRangeMonths = (val) => {
    setRangeValMonths(val);
  };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.closeSvg}>
        <div className={classes.svg} onClick={props.onHide}>
          {closeSvg(30, 30)}
        </div>
      </div>
      <h2>Υπολογισμός δόσης</h2>
      <h6 className="mb-5">
        Επίλεξε την προκαταβολη και την διάρκεια που σε συμφέρει
      </h6>
      <div className="mb-5">
        <Slider
          label="Προκαταβολή"
          range={rangeVal}
          updateRange={updateRange}
          min={0}
          max={20000}
          step={100}
          text="€"
        />
      </div>
      <div className="mb-5">
        <Slider
          label="Διάρκεια"
          range={rangeValMonths}
          updateRange={updateRangeMonths}
          min={3}
          max={72}
          step={1}
          text="μήνες"
        />
      </div>
      <div className="mb-3 font-weight-bold d-flex justify-content-center align-items-center">
        <h6 className="p-3">Μηνιαία Δοση: </h6>
        <h3>
          {formatNumber(finalPrice(rangeVal, rangeValMonths).toFixed(0))}€
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default CenteredModal;
