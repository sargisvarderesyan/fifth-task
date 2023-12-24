import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './components/UserProfile/UserProfile';
import Field from './components/Fields/Field';
import ProfilePictureUpload from './components/ProfilePicture/ProfilePicture';
import './App.scss';

const App = () => {
  const [user, setUser] = useState({
    name: 'Sargis Varderesyan',
    email: 'saqvarderesyan@gmail.com',
    profilePicture: 'favicon.ico',
  });
  const [profilePicture,setProfilePicture] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                const userImage = await axios.get('https://jsonplaceholder.typicode.com/photos/1')
                setUser(response.data);
                setProfilePicture(userImage.data.url)

            } catch (error) {
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    const updateProfilePicture = (file) => {
        setProfilePicture(file.name)
    };


    if (loading) {
       return <p>Loading...</p>;
    }

  return (
      <div className="App">
          {user ? <>
            <UserProfile user={user} profilePicture={profilePicture} />
            <Field user={user} updateUser={updateUser} />
            <ProfilePictureUpload user={user} updateProfilePicture={updateProfilePicture} profilePicture={profilePicture}/>
          </> : <h2>Error getting user data</h2>
          }
      </div>
  );
};

export default App;
