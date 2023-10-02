  import React, { useState,useEffect } from "react";
  import "./form.css";
  import Card1 from './Card1'
  import Card2 from "./Card2";
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

    const [data,setData]=useState({name:'Bharath sai',number:'00000000000000000',month:'00',year:'0000',cvv:'000'});
    const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission


    function isAlphabetic(str) {
      const regex = /^[a-zA-Z]+$/;
      return regex.test(str);
    }
    function isThreeDigitNumber(str) {
      const regex = /^\d{3}$/; 
      
      return regex.test(str);
    }
    function is16DigitString(str) {
      const regex = /^\d{16}$/;
      return regex.test(str);
    }
    const handleSubmit=(e) => {
      setData()
      let isDataValid=true;
      e.preventDefault();
      // validation
      setNameValid(false)
      setNumberValid(false)
      setmonthAndYearValid(false)
      setcvvValid(false)
      if(isAlphabetic(name)===false){
        setNameValid(true)
        isDataValid=false
      }
      if(is16DigitString(cardNumber)==false){
        setNumberValid(true)
        isDataValid=false
      }
      if(parseInt(month)>12||parseInt(month)<1||month.length===0){
        setmonthAndYearValid(true)
        isDataValid=false
      }
      if(year.length!=4){
        setmonthAndYearValid(true)
        isDataValid=false
      }
      if(isThreeDigitNumber(cvv)===false){
        setcvvValid(true)
        isDataValid=false
      }
      if(isDataValid){
        const dataGoesToCard={
          name:name,
          number:cardNumber,
          month:month,
          year:year,
          cvv:cvv
        }
        setData(dataGoesToCard)
        setFormSubmitted(true); // Set form submission flag to true
        
      }
      if(isDataValid===false){
        const dataGoesToCard={
          name:'Bharath sai',
          number:'00000000000000000',
          month:'00',
          year:'0000',
          cvv:'000'
        }
        setData(dataGoesToCard)

      }
    }
    useEffect(() => {
      // Check if the form has been submitted and data is valid
      if (formSubmitted && Object.values(data).every(value => value !== '')) {
        setTimeout(() => {
          alert('Successfully Updated'); // Show success alert after a delay
        }, 0);      }
    }, [formSubmitted,data]);
    return (
      <>
        <form
          onSubmit={handleSubmit}
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
                {nameValid?<p className="error">* Name required and should contain alphabets</p>:''}
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
                {numberValid?<p className="error">* card number should contain 16 digits</p>:''}
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
                  {monthAndYearValid?<p className="error"> *fill,month(1-12),year any</p>:''}
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
                  {cvvValid?<p className="error"> * cvv should be 3 digits</p>:''}
                </div>
              </div>
              <div className="submit">
                <button type="submit">Confirm</button>
              </div>
            </div>
          </div>
        </form>
        <div className="card"><Card1 data={data}/></div>
        <div className="card2"><Card2 data={data}/></div>
      </>
    );
  }

  export default Form;
