import React from 'react';
import './Preloader.css'; 

export default function Preloader() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-my-primary">
      <div className="position-relative" style={{ width: '96px', height: '96px' }}>
        <div
          className="position-absolute w-100 h-100 border border-4 border-transparent border-top-light rounded-circle swirl-animation"
        ></div>
        <div
          className="position-absolute"
          style={{
            width: '64px',
            height: '64px',
            top: '16px',
            left: '16px',
            border: '4px solid transparent',
            borderTop: '4px solid #fff',
            borderRadius: '50%',
            animation: 'swirl 1s linear infinite',
          }}
        ></div>
      </div>
    </div>
  );
}
