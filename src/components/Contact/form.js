import React, { useState } from "react";
import { emailValidation, phoneValidation } from "../../utils/helpers";

function Form() {
  // set state and state update functions for handleInputEvent
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Set state and update state functions for lost focus handleOnBlur
  const [firstNameEmpty, setFirstNameEmpty] = useState(false);
  const [lastNameEmpty, setLastNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);

  // Handle change event
  const handleInputEvent = (event) => {
    event.preventDefault();
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

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

  // Handle on lost focus
  const handleOnBlur = (event) => {
    const { target } = event;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "firstname") {
      let formState = inputValue.length ? "" : "First Name is required";
      setErrorMessage(formState);
      let inputString = inputValue.length ? false : true;
      setFirstNameEmpty(inputString);
    } else if (inputType === "lastname") {
      let formState = inputValue.length ? "" : "Last Name is required";
      setErrorMessage(formState);
      let inputString = inputValue.length ? false : true;
      setLastNameEmpty(inputString);
    } else if (inputType === "email") {
      let formState = emailValidation(inputValue)
        ? ""
        : "Email is invalid/Required";
      setErrorMessage(formState);
      let inputString = inputValue.length ? false : true;
      setEmailEmpty(inputString);
    } else if (inputType === "phone") {
      let formState = phoneValidation(inputValue)
        ? ""
        : "Phone is invalid/Required";
      setErrorMessage(formState);
      let inputString = inputValue.length ? false : true;
      setPhoneEmpty(inputString);
    }
  };

  // Handle submit event
  const handleSubmitEvent = (event) => {
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
    // Clear fields after submit
    setFirstname("");
    setLastname("");
    setCompany("");
    setEmail("");
    setphone("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="uk-margin-auto">
      <p className="uk-text-default uk-text-bold uk-text-danger">
        {errorMessage}
      </p>
      <form className="uk-form-stacked">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="firstname">
            First Name
          </label>
          <div className="uk-form-contrls">
            <input
              className={
                firstNameEmpty
                  ? "uk-form-danger uk-input uk-form-small uk-form-width-medium"
                  : "uk-input uk-form-small uk-form-width-medium"
              }
              id="firstname"
              value={firstname}
              name="firstname"
              onChange={handleInputEvent}
              onBlur={handleOnBlur}
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
              className={
                lastNameEmpty
                  ? "uk-form-danger uk-input uk-form-small uk-form-width-medium"
                  : "uk-input uk-form-small uk-form-width-medium"
              }
              id="lastname"
              value={lastname}
              name="lastname"
              onChange={handleInputEvent}
              onBlur={handleOnBlur}
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
              onChange={handleInputEvent}
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
              className={
                emailEmpty
                  ? "uk-form-danger uk-input uk-form-small uk-form-width-medium"
                  : "uk-input uk-form-small uk-form-width-medium"
              }
              id="email"
              value={email}
              name="email"
              onChange={handleInputEvent}
              onBlur={handleOnBlur}
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
              className={
                phoneEmpty
                  ? "uk-form-danger uk-input uk-form-small uk-form-width-medium"
                  : "uk-input uk-form-small uk-form-width-medium"
              }
              id="phone"
              value={phone}
              name="phone"
              onChange={handleInputEvent}
              onBlur={handleOnBlur}
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
              onChange={handleInputEvent}
              type="text"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
        <div className="uk-flex">
          <button
            className="uk-button uk-button-default restyle-background-01 restyle-nav-links"
            onClick={handleSubmitEvent}
          >
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
