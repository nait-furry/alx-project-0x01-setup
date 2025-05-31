import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="mt-2 text-gray-800">{user.email}</p>
      <p className="text-gray-800">Phone: {user.phone}</p>
      <p className="text-gray-800">Website: <a className="text-blue-500 underline" href={`http://${user.website}`} target="_blank">{user.website}</a></p>
      <p className="text-gray-700 mt-2">
        <strong>Company:</strong> {user.company.name}
      </p>
      <p className="text-gray-600 italic">{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
