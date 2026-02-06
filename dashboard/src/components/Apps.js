import React from 'react';

const App = () => {
    const handleHomeRedirect = () => {
        // Redirect to frontend (assuming frontend runs on port 3000)
        window.location.href = 'https://vypaar-x-project.vercel.app/';
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '100%',
            flexDirection: 'column',
            padding: '40px'
        }}>
            {/* Main Content */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '25px'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '10px'
                }}>
                    <i className="fa fa-home" style={{
                        fontSize: '64px',
                        color: '#4CAF50',
                        marginBottom: '20px'
                    }}></i>
                    <h2 style={{
                        color: '#333',
                        fontSize: '28px',
                        fontWeight: '600',
                        marginBottom: '10px'
                    }}>Return to Home</h2>
                    <p style={{
                        color: '#666',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}>Navigate back to the main landing page</p>
                </div>
                
                <button 
                    onClick={handleHomeRedirect}
                    style={{
                        padding: '14px 40px',
                        fontSize: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        boxShadow: '0 4px 6px rgba(76, 175, 80, 0.3)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#45a049';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 12px rgba(76, 175, 80, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#4CAF50';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 6px rgba(76, 175, 80, 0.3)';
                    }}
                >
                    <i className="fa fa-arrow-left"></i>
                    Go to Home Page
                </button>
            </div>

            {/* Footer */}
            <footer style={{
                width: '100%',
                padding: '20px 0',
                borderTop: '1px solid #e0e0e0',
                marginTop: '40px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <img src="logo.png" style={{ width: "30px", height: "auto" }} alt="VypaarX Logo" />
                        <span style={{
                            color: '#666',
                            fontSize: '14px'
                        }}>© 2024 VypaarX. All rights reserved.</span>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        gap: '25px',
                        alignItems: 'center'
                    }}>
                        <a href="/#" style={{
                            color: '#666',
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                        onMouseOut={(e) => e.target.style.color = '#666'}
                        >
                            <i className="fa fa-question-circle me-1"></i>
                            Support
                        </a>
                        <a href="/#" style={{
                            color: '#666',
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                        onMouseOut={(e) => e.target.style.color = '#666'}
                        >
                            <i className="fa fa-file-text me-1"></i>
                            Terms
                        </a>
                        <a href="/#" style={{
                            color: '#666',
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                        onMouseOut={(e) => e.target.style.color = '#666'}
                        >
                            <i className="fa fa-shield me-1"></i>
                            Privacy
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
