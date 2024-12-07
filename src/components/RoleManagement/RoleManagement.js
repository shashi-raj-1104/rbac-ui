import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={() => alert("Add Role Form Here!")}>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => alert("Edit Role Form Here!")}>
                  Edit
                </button>
                <button onClick={() => deleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
