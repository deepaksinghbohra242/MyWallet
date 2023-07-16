import React from "react";
import { Link } from "react-router-dom";
import DashboardItems from "./DashboardItems";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 textcenter">My Wallet</h1>
            <br />
            <div className="  dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Create new
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/">Wallet</Link>
                </li>
                <li className="dropdown-item">
                  <button >Transaction</button>
                </li>

              </ul>
            </div>
            <div className="card text-center">
              <div className="card-header bg-success text-white">
                <h4>Current Balance</h4>
                <h1>2700.00</h1>
              </div>
            </div>
            <br />
            <DashboardItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
