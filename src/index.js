import React from "react";
import ReactDOM from "react-dom";
import HtmlToPDF from "./components/HtmlToPDF";
import PrintButton from "./components/PrintButton";

const Index = () => {
  return (
    <div className="bg-black-80 w-100 pv5">
      <div className="white mt3 tc f3">Data</div>
      <PrintButton id={"HtmlToPDF"} label={"Page to pdf"} />
      <HtmlToPDF id={"HtmlToPDF"} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
