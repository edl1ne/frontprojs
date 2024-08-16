import React from 'react';

function ResultCard({ title, description }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-outline-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
