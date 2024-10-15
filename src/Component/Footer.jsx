import React from "react";
const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright © {year}</p>
      {/* Copy the copyright symb0l from internet and paste it here. */}
    </footer>
  );
}
export default Footer;
