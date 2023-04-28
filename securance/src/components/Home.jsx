import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import "../css/Home.css"

function Home(){
    return(
        <>
            <NavBar />
        </>
    );
}

function NavBar(){
    const [isConnected, setIsConnected] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('formData'));
        if (data && data.fname && data.lname && data.metamask_id) {
            setIsConnected(true);
            setFormData(data);
        }
    }, []);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('formData');
        setIsConnected(false);
        setFormData({});
        window.location.reload();
        navigate("/Login");
    }

    
        return (
            <header className='navbar'>
                <div className='navbar__title navbar__item'><Link to="/">Securance</Link></div>
                <div className='navbar__item'><Link to="/Policy">Policy</Link></div>
                {isConnected && <div className='navbar__item'><Link to="/Dashboard">Dashboard</Link></div>}
                {isConnected ? (
                    <div className='navbar__item' onClick={logout}>Logout</div>
                ) : (
                    <div className='navbar__item'><Link to="/Login">Login</Link></div>
                )}
            </header>
        );
}

export default Home;
