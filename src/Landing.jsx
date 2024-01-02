import './index.css';
import React, { useState } from 'react';

function Landing({ onSearch, searchResults }) {
  const [modelYear, setModelYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSearchClick = () => {
    // Invoke the onSearch function with the provided parameters
    onSearch(modelYear, make, model);
  };

  return (
    
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-Xl">
      <div className="flex flex-col md:flex-row items-center mb-4">
  
        <input
          type="text"
          placeholder="Model Year"
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          className="mb-2 md:mb-4 md:mr-4 p-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search Recalls
        </button>
      </div>
      <div>
        {searchResults && searchResults.results.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              {searchResults.Count} Results Found
            </h2>
            {searchResults.results.map((result, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
                <h3 className="text-lg font-semibold mb-2">
                  {result.Manufacturer}
                </h3>
                <p>
                  <strong>Campaign Number:</strong> {result.NHTSACampaignNumber}
                </p>
                <p>
                  <strong>Report Received Date:</strong> {result.ReportReceivedDate}
                </p>
                <p>
                  <strong>Component:</strong> {result.Component}
                </p>
                <p>
                  <strong>Summary:</strong> {result.Summary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
