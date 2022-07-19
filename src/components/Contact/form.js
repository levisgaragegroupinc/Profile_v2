import React from "react";

function Form() {
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
              type="text"
              placeholder="Thor"
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
              type="text"
              placeholder="Odinson"
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
              type="text"
              placeholder="Thor@yahoo.com"
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
              type="text"
              placeholder="(000) 000-0000"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="textarea">
            Message
          </label>
          <div className="uk-form-controls">
            <textarea
              className="uk-textarea uk-form-small uk-form-width-large"
              rows="5"
              id="textarea"
              type="text"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
        <button className="uk-button uk-button-default">Submit</button>
      </form>
    </div>
  );
}

export default Form;
