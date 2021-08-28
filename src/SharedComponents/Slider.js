import React from "react";
import classes from "./silder.module.css";
import { formatNumber } from "./utils";

function Slider(props) {
  const updateRange = (e) => {
    props.updateRange(e.target.value);
  };

  return (
    <div className={classes.sliderContainer}>
      <div className="d-flex justify-content-around">
        <div>
          <strong>{props.label}</strong>
        </div>
        <div>
          <strong className="d-flex">
            <h4>
              {formatNumber(props.range)}
              {props.text}
            </h4>
          </strong>
        </div>
      </div>
      <input
        className={classes.range}
        type="range"
        value={props.range}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={updateRange}
      />
      <div style={{ color: "gray" }} className="d-flex justify-content-around">
        <div>
          {props.min} {props.text}
        </div>
        <div>
          {formatNumber(props.max)}
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default Slider;
