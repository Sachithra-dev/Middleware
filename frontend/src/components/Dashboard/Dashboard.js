import React from 'react';
import ActivatingServices from '../ActivatingService';
import AccountSummary from '../AccountSummary';
import AccountStatus from '../AccountStatus';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div>
        
      <div className="dashboard-container">
        <div className="dashboard-section">
          <AccountStatus />
        </div>
        <div className="dashboard-section">
          <ActivatingServices />
        </div>
        <div className="dashboard-section">
          <AccountSummary />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
