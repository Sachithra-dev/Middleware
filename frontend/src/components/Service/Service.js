import React from 'react';

const VerticalStackedComponent = () => {
  return (
    <div style={mainContainerStyles}>
      <div style={contentBoxStyles}>
        <div style={innerContentStyles}>
          <h2>Activated Services</h2>
          <div style={scrollableContentStyles}>
            <div style={tileStyles}>
                <h3>International Roaming</h3>
                <button style={buttonStyles}>Deactivate</button>
            </div>
            <div style={tileStyles}>
                <h3>Ring-in Tone Personalization</h3>
                <button style={buttonStyles}>Deactivate</button>
            </div>
          </div>
        </div>
      </div>
      <div style={contentBoxStyles}>
        <div style={innerContentStyles}>
          <h2>Available Services</h2>
          <div style={scrollableContentStyles}>
            <div style={tileStyles}>
                <h3>International Roaming</h3>
                <button style={buttonStyles}>Activate</button>
            </div>
            <div style={tileStyles}>
                <h3>Ring-in Tone Personalization</h3>
                <button style={buttonStyles}>Activate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mainContainerStyles = {
  display: 'flex',
  flexDirection: 'column', // Stacking boxes vertically
  width: '100%',
};

const contentBoxStyles = {
  border: '1px solid #ccc',
  margin: '20px',
  padding: '10px',
  overflow: 'hidden',
};

const innerContentStyles = {
  width: '100%',
  overflowX: 'auto',
  maxHeight: '300px', // Set a maximum height for the scrollable area
};

const scrollableContentStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  overflowX: 'auto',
};

const tileStyles = {
  width: '200px',
  height: '150px',
  border: '1px solid #ddd',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyles = {
    padding: '5%',
    color: 'white',
    border: '4px solid #05004E',
    borderRadius: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05004E',
}
export default VerticalStackedComponent;
