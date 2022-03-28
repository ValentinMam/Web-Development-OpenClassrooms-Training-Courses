import React from "react";
import Header from "../components/Header";
import ReportedComments from "../components/ReportedComment";

const Admin = () => {
  return (
    <div className="admin">
      <Header />
      <ReportedComments />
    </div>
  );
};

export default Admin;
