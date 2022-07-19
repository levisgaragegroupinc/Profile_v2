import React from "react";

function Form() {
  return (
    <>
      <form className="uk-form-stacked">
        <div className="uk-margin">
          <label class="uk-form-label" for="firstname">
            First Name
          </label>
          <div class="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="firstname"
              type="text"
              placeholder="Thor"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label class="uk-form-label" for="lastname">
            Last Name
          </label>
          <div class="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="lastname"
              type="text"
              placeholder="Odinson"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label class="uk-form-label" for="company">
            Company
          </label>
          <div class="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="company"
              type="text"
              placeholder="Asgard"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label class="uk-form-label" for="email">
            Email
          </label>
          <div class="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="email"
              type="text"
              placeholder="Thor@yahoo.com"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label class="uk-form-label" for="phone">
            Phone
          </label>
          <div class="uk-form-contrls">
            <input
              className="uk-input uk-form-small uk-form-width-medium"
              id="phone"
              type="text"
              placeholder="(000) 000-0000"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" for="textarea">
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
    </>
  );
}

export default Form;
