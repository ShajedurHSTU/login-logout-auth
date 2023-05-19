import React from 'react';

const HomePage = () => {
    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
                <h1>Home Page</h1>
                <button onClick={logout}>Log Out</button>
        </div>
    );
};

export default HomePage;