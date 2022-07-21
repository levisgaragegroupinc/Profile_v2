import React from "react";
import LinkBtn from "./Buttons/LinkBtn";
import Divider from "./Dividers/Divider";

const footerLinks = [
  {
    name: "509-610-9096",
    href: "tel:+15096109096",
  },
  {
    name: "tbateswsu@gmail.com",
    href: "mailto:tbateswsu@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/travis-bates-a27bb494/",
  },
  {
    name: "Github",
    href: "https://github.com/levisgaragegroupinc",
  },
];

function Footer() {
  return (
    <footer>
      <Divider />
      <ul className="uk-flex uk-flex-left uk-flex-wrap">
        <LinkBtn links={footerLinks} />
      </ul>
    </footer>
  );
}

export default Footer;
