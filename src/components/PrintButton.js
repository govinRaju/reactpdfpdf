import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PrintButton = ({ id, label }) => (
  <div className="tc mb4 mt2">
    <div id="myMm" style={{ height: "1mm" }} />
    <div
      className="pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1"
      onClick={() => {
        const input = document.getElementById(id);
        html2canvas(input).then(canvas => {
          const imgData = canvas.toDataURL("image/png");
          var pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 0, 0);
          pdf.save(`${id}.pdf`);
        });
      }}
    >
      {label}
    </div>
  </div>
);
export default PrintButton;
