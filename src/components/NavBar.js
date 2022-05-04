import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksToDisplay = links.map(link => {
    return <a href= {`#${link}`}>{link}</a>
  })

  return <nav>{linksToDisplay}</nav>;
}

export default NavBar;
