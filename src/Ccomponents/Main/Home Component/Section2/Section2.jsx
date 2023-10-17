import React from 'react';
import './section2.css'
const Section2 = () => {



  const divStyle = {
   /*  backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    Other styles you might want to apply */
    
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    height: '400px',
    width: '400px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <div className='flex  justify-evenly flex-wrap my-4  back' >
      <div style={containerStyle}>
        <h1>Easy-to-use Hr Software</h1>
        <p>No steep learning curves or bloated interfaces. HrForcast platform is simple yet powerful, 
         accessible and relevant to all HR rofessionals.</p>
      </div>
      <div style={containerStyle}>
        <img src="https://www.osimo.com.tr/assets/images/icons/articles.png" alt="Fairs" style={imageStyle} />

      </div>


      
    </div>
  );
}

export default Section2;
