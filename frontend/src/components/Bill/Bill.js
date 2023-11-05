import React from 'react';

const BillComponent = () => {
  return (
    <div>
      <div style={filterContainer}>
        <input type="text" placeholder="Filter By Year" style={filterInput} />
        <input type="text" placeholder="Filter By Month" style={filterInput} />
      </div>
      <div><h3>System Generated Bill</h3></div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr style={trStyle}>
            <td>Item 1</td>
            <td>$50</td>
          </tr>
          <tr style={trStyle}>
            <td>Item 2</td>
            <td>$30</td>
          </tr>
          <tr style={trStyle}>
            <td>Item 3</td>
            <td>$70</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ textAlign: 'right' }}>Total</td>
            <td>$150</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const filterContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  height : '25px',
  marginBottom: '10px',
  marginTop: '30px',
};

const filterInput = {
  marginRight: '10px',
};

const tableStyle = {
  marginTop: '60px',
  width: '100%',
  borderCollapse: 'collapse',
};

const trStyle = {
  marginTop: '10px',
  borderBottom: '24px solid #f3fbff',
};

export default BillComponent;
