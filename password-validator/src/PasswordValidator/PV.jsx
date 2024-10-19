import React, { useState } from 'react';
import '../PasswordValidator/PV.css'
function PasswordValidator() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    // Function to calculate password strength
    const checkStrength = (password) => {
        let strengthScore = 0;

        // Criteria check
        if (password.length >= 6) strengthScore++; // Length check
        if (password.length >= 8) strengthScore++; // Length > 8
        if (/[0-9]/.test(password)) strengthScore++; // Contains numbers
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strengthScore++; // Upper and lowercase letters
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strengthScore++; // Special characters
        if (password.length >= 10 && strengthScore >= 4) strengthScore++; // Bonus for length >= 10

        // Determine strength based on score
        switch (strengthScore) {
            case 0:
            case 1:
                setStrength('Weak');
                break;
            case 2:
                setStrength('Good');
                break;
            case 3:
                setStrength('Very Good');
                break;
            case 4:
                setStrength('Strong');
                break;
            case 5:
                setStrength('Excellent');
                break;
            default:
                setStrength('Excellent');
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        checkStrength(value);
    };

    return (
        <div className="wrapper">
            <div className="password-validator">
                <h2>Password Strength Checker</h2>
                <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <p>Password Strength: <strong>{strength}</strong></p>
            </div>
        </div>
    );
}

export default PasswordValidator;
