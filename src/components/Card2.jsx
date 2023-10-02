import React from 'react'
import "./backCard.css"
function Card2(props) {
  return (
    <div>
      <div className="outerCard2">
        <div className="blackStrip"></div>
        <div className="cvvBox">
            <span className="cvvText">{props.data.cvv}</span>
        </div>
        <div className="lines">
            <div className="line1">
                <div className="line11"></div>
                <div className="line12"></div>
                <div className="line13"></div>
                <div className="line14"></div>
            </div>
            <div className="line2">
                <div className="line21"></div>
                <div className="line22"></div>
                <div className="line23"></div>
                <div className="line24"></div>
            </div>
            <div className="line3">
                <div className="line31"></div>
                <div className="line32"></div>
                <div className="line33"></div>
                <div className="line34"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card2
