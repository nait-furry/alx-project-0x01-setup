import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    // Optionally assign an id (e.g. length + 1)
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, userWithId]);
    setIsModalOpen(false); // close modal after adding
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="overflow-auto flex-grow">
          {users.length === 0 ? (
            <p>No users yet. Click "Add User" to create one.</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id} className="mb-2 border p-2 rounded">
                  <p><strong>{user.name}</strong> ({user.username})</p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.website}</p>
                  <p>{user.address.city}, {user.address.street}</p>
                  <p>Company: {user.company.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {isModalOpen && (
          <UserModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export default UsersPage;
