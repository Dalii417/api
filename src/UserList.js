import React, { useState, useEffect } from "react";

import axios from "axios";

const UserList = () => {
  const [users, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
        console.log(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <div>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
};

export default UserList;
