import React from "react";
import Header from "./Header/Header";
import GetStarted from "./GetStarted/GetStarted";
import Newsletter from "./Newsletter/Newsletter";
import Classes from "./Classes/Classes";
import "./Body.css";
import Feature from "./Features/Feature";

export default function Body() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Feature />
      <Classes />
      <Newsletter />
      <GetStarted />
    </div>
  );
}
