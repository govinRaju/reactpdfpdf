import React from "react";

const Page = ({ children, id }) => (
  <div
    id={id}
    className="bg-white center pa4"
    style={{ width: "210mm", height: "400mm" }}
  >
    {children}
  </div>
);

export default Page;
