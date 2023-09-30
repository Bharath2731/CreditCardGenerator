import React, { useState } from "react";
import "./form.css";
function Form() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [nameValid, setNameValid]=useState(false);
  const [numberValid, setNumberValid]=useState(false);
  const [monthAndYearValid, setmonthAndYearValid]=useState(false);
  const [cvvValid, setcvvValid]=useState(false);
  function isThreeDigitNumber(str) {
    const regex = /^\d{3}$/; 
    
    return regex.test(str);
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // validation
          if(name.length===0){
            setNameValid(true)
          }
          if(cardNumber.length!=12){
            setNumberValid(true)
          }
          if(parseInt(month)>12||parseInt(month)<1||month.length===0){
            setmonthAndYearValid(true)
          }
          if(year.length!=4){
            setmonthAndYearValid(true)
          }
          if(isThreeDigitNumber(cvv)===false){
            setcvvValid(true)
          }
        }}
      >
        <div className="outer">
          <div className="inner">
            <div className="name">
              <p>CARDHOLDER NAME</p>
              <input
                type="text"
                placeholder=" e.g. Bharath Sai"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {nameValid?<p className="error">* Name required</p>:''}
            </div>
            <div className="number">
              <p>CARD NUMBER</p>
              <input
                type="text"
                placeholder="e.g. 1234 5678 8765 4321"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value);
                }}
              />
              {numberValid?<p className="error">* card number required</p>:''}
            </div>
            <div className="expcvv">
              <div className="exp">
                <p>EXP.DATE(MM/YY)</p>
                <input
                  type="text"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="YY"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
                {monthAndYearValid?<p className="error"> * both required</p>:''}
              </div>
              <div className="cvv">
                <p>CVV</p>
                <input
                  type="text"
                  placeholder="e.g 123"
                  value={cvv}
                  onChange={(e) => {
                    setCvv(e.target.value);
                  }}
                />
                {cvvValid?<p className="error"> * cvv required</p>:''}
              </div>
            </div>
            <div className="submit">
              <button type="submit">Confirm</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
