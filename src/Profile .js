import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:7001/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to headers for authentication
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          // Handle errors, e.g., if user data fetch fails
        }
      } catch (error) {
        // Handle other errors
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      {/* Display other user details */}
    </div>
  );
};

export default Profile;
