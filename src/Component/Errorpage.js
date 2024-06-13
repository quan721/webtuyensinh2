import React from 'react'
import { Link } from 'react-router-dom';


function Errorpage() {
  return (
    <div>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oops! The page you're looking for could not be found.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        Go back to the homepage
      </Link>
    </div>
    </div>
  )
}

export default Errorpage