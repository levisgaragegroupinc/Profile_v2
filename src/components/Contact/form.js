import React, { useState } from "react";
import { emailValidation, phoneValidation } from "../../utils/helpers";

function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputEvent = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;
    const inputId = target.id;

    if (inputType === "firstname") {
      setFirstname(inputValue);
    } else if (inputType === "lastname") {
      setLastname(inputValue);
    } else if (inputType === "company") {
      setCompany(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "phone") {
      setphone(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const submitEvent = (event) => {
    event.preventDefault();
    if (!emailValidation(email)) {
      setErrorMessage("Email is invalid!");
      return;
    }
    if (!phoneValidation(phone)) {
      setErrorMessage("Phone is invalid");
      return;
    }
    if (!firstname || !lastname) {
      setErrorMessage("Enter both a first and last name!");
      return;
    }
    setFirstname("");
    setLastname("");
    setCompany("");
    setEmail("");
    setphone("");
    setMessage("");
  };

  return (
    <div className="uk-margin-auto">
      <form className="uk-form-stacked">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="firstname">
            First Name
          </label>
          <div className="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="firstname"
              value={firstname}
              name="firstname"
              onChange={inputEvent}
              type="text"
              placeholder="Thor"
              required={true}
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="lastname">
            Last Name
          </label>
          <div className="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="lastname"
              value={lastname}
              name="lastname"
              onChange={inputEvent}
              type="text"
              placeholder="Odinson"
              required={true}
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="company">
            Company
          </label>
          <div className="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="company"
              value={company}
              name="company"
              onChange={inputEvent}
              type="text"
              placeholder="Asgard"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="email">
            Email
          </label>
          <div className="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="email"
              value={email}
              name="email"
              onChange={inputEvent}
              type="text"
              placeholder="Thor@yahoo.com"
              required={true}
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="phone">
            Phone
          </label>
          <div className="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="phone"
              value={phone}
              name="phone"
              onChange={inputEvent}
              type="text"
              placeholder="(000) 000-0000"
              required={true}
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="message">
            Message
          </label>
          <div className="uk-form-controls">
            <textarea
              className="uk-textarea uk-form-small uk-form-width-large"
              rows="5"
              id="message"
              value={message}
              name="message"
              onChange={inputEvent}
              type="text"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
        <div className="uk-flex">
          <button className="uk-button uk-button-default" onClick={submitEvent}>
            Submit
          </button>
          {errorMessage && (
            <div>
              <p className="uk-margin-left uk-text-default uk-text-bold uk-text-danger">
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
