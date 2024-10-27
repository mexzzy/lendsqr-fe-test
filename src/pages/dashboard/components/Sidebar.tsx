import React from "react";
import { PiCaretDown } from "react-icons/pi";
import switch_organization from "../../../assets/images/dashboard/switch_organisation.svg";
import dashboard from "../../../assets/images/dashboard/dashboard.svg";
import users from "../../../assets/images/dashboard/users.svg";
import guarantors from "../../../assets/images/dashboard/guarantors.svg";
import loans from "../../../assets/images/dashboard/loans.svg";
import decision_models from "../../../assets/images/dashboard/decision_models.svg";
import Savings from "../../../assets/images/dashboard/savings.svg";
import loan_requests from "../../../assets/images/dashboard/loan_request.svg";
import whitelist from "../../../assets/images/dashboard/whitelist.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav_item">
        <img src={switch_organization} alt="switch_organization" />
        <span>Switch Organization</span>
        <PiCaretDown />
      </div>
      <div className="nav_item">
        <img src={dashboard} alt="dashboard" />
        <span>Dashboard</span>
      </div>

      <div className="header">CUSTOMERS</div>

      <div className="nav_tabs">
        <img src={users} alt="users" />
        <span>users</span>
      </div>

      <div className="nav_tabs">
        <img src={guarantors} alt="guarantors" />
        <span>Guarantors</span>
      </div>

      <div className="nav_tabs">
        <img src={loans} alt="loans" />
        <span>loans</span>
      </div>

      <div className="nav_tabs">
        <img src={decision_models} alt="loans" />
        <span>Decision Models</span>
      </div>
      <div className="nav_tabs">
        <img src={Savings} alt="Savings" />
        <span>Savings</span>
      </div>
      <div className="nav_tabs">
        <img src={loan_requests} alt="loan_requests" />
        <span>Loan Requests</span>
      </div>
      <div className="nav_tabs">
        <img src={whitelist} alt="whitelist" />
        <span>whitelist</span>
      </div>


    </div>
  );
};

export default Sidebar;
