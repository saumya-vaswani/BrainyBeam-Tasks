import React, { useEffect, useState } from 'react';
import './code.css';

const CounterAndForm = () => {
    // Counter state managed with localStorage
    const [counter, setCounter] = useState(() => {
        const savedCounter = localStorage.getItem('counter');
        return savedCounter ? parseInt(savedCounter) : 0;
    });

    // Email and Password state for sessionStorage
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Save counter value to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('counter', counter);
    }, [counter]);

    // Save email & password to sessionStorage on button click
    const handleSaveToSession = (e) => {
        e.preventDefault();
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        console.log('Session Storage:', {
            email: sessionStorage.getItem('email'),
            password: sessionStorage.getItem('password')
          });
        alert('Email and Password saved to sessionStorage!');
    };

    // Clear sessionStorage when the component loads (tab reopened)
    useEffect(() => {
        sessionStorage.clear();
        console.log('Session Storage cleared.');
    }, []);

    return (
        <div className='wrapper'>
            {/* Counter Section */}
            <div className='localStorage'>
            <h2>Counter</h2>
            <div className='counter-btn'>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>
            <p>Counter Value: {counter}</p>
            </div>

            {/* Form Section */}
            <form className='sessionStorage'>
            <h2>Form</h2>
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSaveToSession}>Save</button>
            </form>
        </div>
    );
};

export default CounterAndForm;
