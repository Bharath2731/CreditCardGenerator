import React, { useState } from "react";
import "./frontCard.css";
function Card1(props) {
  let dataname=props.data.name;
  let span1=props.data.number.substring(0,4)
  let span2=props.data.number.substring(4,8)
  let span3=props.data.number.substring(8,12)
  let span4=props.data.number.substring(12)
  let month=props.data.month
  let year=props.data.year.substring(2)
  return (
    <div>
      <div className="cardOuter">
        <div className="cardInner">
          <div className="cardTop">
            <div className="circle1"></div>
            <div className="circle2"></div>
          </div>
          <div className="cardBottom">
            <div className="fourSpans">
              <span className="span1">{span1}</span>
              <span className="span2">{span2}</span>
              <span className="span3">{span3}</span>
              <span className="span4">{span4}</span>
            </div>
            <div className="nameAndExp">
              <span className="Name">{dataname}</span>
              <span className="Exp">{month}/{year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
