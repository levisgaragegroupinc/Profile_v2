import React from "react";

function Card(props) {
  let id = props.data.id;
  let image = props.data.project_image;
  let title = props.data.project_title;
  let description = props.data.description;
  let repoUrl = props.data.repo_url;
  let appUrl = props.data.app_url;
  let stack = props.data.code_stack;
  let imagePath = require(`../../assets/${image}`);

  return (
    <div key={id}>
      <div id="techblog">
        <div className="uk-card uk-card-default">
          <div
            className="uk-card-media-top uk-cover-container"
            uk-lightbox="true"
          >
            <a href={imagePath}>
              <img src={imagePath} alt="blog website application."></img>
            </a>
          </div>
          <div className="uk-card-body uk-padding-small">
            <h3 className="uk-card-title">{title}</h3>
            <p>{description}</p>
          </div>
          <div className="flex-items">
            <div className="uk-width-auto uk-padding-small uk-padding-remove-top">
              <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
                <li key={id + 10} className="uk-parent">
                  <a href="#" className="restyle-links">
                    Links
                  </a>
                  <ul className="uk-nav-sub">
                    <li key={id + 20}>
                      <a href={repoUrl} target="_blank">
                        Repo
                      </a>
                    </li>
                    <li key={id + 30}>
                      <a href={appUrl} target="_blank">
                        App
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className="uk-visible-toggle uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
              tabIndex="-1"
            >
              <p className="restyle-links-01">
                Stack<span uk-icon="code"></span>
              </p>
              <div uk-grid="true">
                <div className="uk-width-auto">
                  <ul className="uk-hidden-hover uk-iconnav uk-padding-small uk-padding-remove-top uk-padding-remove-left uk-padding-remove-right">
                    {stack.map((code, index) => {
                      return <li key={index}>{code}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
