import React from 'react';

const UserProfile = ({ user,profilePicture }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <div className='profile_picture_block'>
                <img src={profilePicture} alt="Profile" />
            </div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;