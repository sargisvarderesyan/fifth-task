import React, { useState } from 'react';

const Fields = ({ user, updateUser }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [emailError, setEmailError] = useState(null);

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(e.target.value);
        setEmailError(isValidEmail ? null : 'Please enter a valid email address');
    };

    const handleSaveChanges = () => {
        if (emailError) {
            alert('Please fix the validation errors before saving.');
            return;
        }
        updateUser({ ...user, name, email });
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <label>Name: <input type="text" value={name} onChange={handleNameChange} /></label>
            <label>Email: <input type="email" value={email} onChange={handleEmailChange} /></label>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
    );
};

export default Fields;
