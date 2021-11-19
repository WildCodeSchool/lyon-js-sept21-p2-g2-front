import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div id="dashboardContainer">
      <div className="wip">
        <h1 id="title-dash">Coming Soon</h1>
        <div className="teasing-container my-8">
          <p className="info-for-users lg:text-center">
            We prepare a personalized space for you to optimize the sharing of
            your travel experiences. For now, feel free to share them and
            comment on others.
          </p>
        </div>
        <Link to="/" id="return-home-link">
          back to search
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
