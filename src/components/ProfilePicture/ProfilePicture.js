import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './ProfilePicture.scss'
const ProfilePictureUpload = ({ user, updateProfilePicture,profilePicture }) => {
    const [image, setImage] = useState(null);
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
        updateProfilePicture(file);
    };

    return (
        <div className='image_drop_block'>
            <h2>Profile Picture</h2>
            <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop a profile picture, or click to select files</p>
                    </div>
                )}
            </Dropzone>
            {image && <img src={image ? image : profilePicture} alt="Profile" />}
        </div>
    );
};

export default ProfilePictureUpload;
