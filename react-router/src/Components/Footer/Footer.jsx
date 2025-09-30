import React from "react";

const Footer = () => {
  return (
    <div>
      <p>
        <small>Thank you for visiting our website</small>
      </p>
      <div style={{ display: "flex", gap: "4px" }}>
        <a href="/">Terms</a>
        <a href="/">Privacy</a>
        <a href="/">Facebook</a>
      </div>
    </div>
  );
};

export default Footer;
