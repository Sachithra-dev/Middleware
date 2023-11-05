import React from 'react';

const ActivatingServices = () => {
  return (
    <div>
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
      <div>
        <button>Activate More Services</button>
      </div>
      {/* Add your content for Activating Services */}
    </div>
  );
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
  
export default ActivatingServices;
