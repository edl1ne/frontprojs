import React from 'react';
import ResultCard from './resultcard';

function ResultsList() {
  return (
    <div className="row">
      {/* Example of three result cards */}
      <ResultCard title="Luke Skywalker" description="Jedi Knight" />
      <ResultCard title="Darth Vader" description="Sith Lord" />
      <ResultCard title="Tatooine" description="Desert Planet" />
    </div>
  );
}

export default ResultsList;
