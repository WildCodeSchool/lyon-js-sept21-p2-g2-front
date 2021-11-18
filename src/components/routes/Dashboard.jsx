import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <h1 id="title-dash">Coming Soon</h1>
      <div className="dashboard-container">
        <h4 id="baseline-crew">
          <Link to="/about-us">by trip@wilders crew </Link>
        </h4>
      </div>
      <div className="teasing-container">
        <p id="info-for-users">
          We prepare a personalized space for you to optimize the sharing of
          your experiences. For now, do not hesitate to share your travel
          experiences and to comment on others.
        </p>
      </div>
      <h4 id="return-to-home-title"> Find your destination here</h4>
      <Link to="/" id="return-home-link">
        back to search
      </Link>
    </>
  );
};

export default Dashboard;
