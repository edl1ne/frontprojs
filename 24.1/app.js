import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <SearchBar />
        <ResultsList />
      </div>
    </div>
  );
}

export default App;
