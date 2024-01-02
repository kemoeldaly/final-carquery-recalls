import React from 'react';

function CarDataDisplay({ carData }) {
  // Create a div element to parse the HTML string
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = carData;

  // Get all table rows
  const rows = tempDiv.querySelectorAll('tr');

  // Filter out rows with 'Not Available' values
  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    cells.forEach((cell) => {
      if (cell.textContent.trim() === 'Not Available') {
        row.style.display = 'none'; // Hide the entire row
      }
    });
  });

  // Check if there is any data to display
  if (tempDiv.innerHTML.trim() === '') {
    return <p>No data available</p>;
  }

  // Render the filtered data
  return <div dangerouslySetInnerHTML={{ __html: tempDiv.innerHTML }} />;
}

export default CarDataDisplay;
