import React, { useEffect, useState } from "react";
import axios from "../../mock/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });

  useEffect(() => {
    axios.get("/api/users").then((response) => setUsers(response.data));
  }, []);

  const addUser = () => {
    // Simulate adding user to backend
    axios.post("/api/users", newUser).then((response) => {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setIsAdding(false); // Close the form
      setNewUser({ name: "", email: "", role: "", status: "Active" }); // Reset the form
    });
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={() => setIsAdding(true)}>Add User</button>

      {/* Add User Form */}
      {isAdding && (
        <div>
          <h3>Add New User</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addUser();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsAdding(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* User List */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => alert("Edit User Form Here!")}>Edit</button>
                <button
                  onClick={() =>
                    setUsers(users.filter((currentUser) => currentUser.id !== user.id))
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
