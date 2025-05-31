import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-800">{email}</p>
      <p className="text-gray-800">Phone: {phone}</p>
      <p className="text-gray-800">
        Website: <a href={`http://${website}`} className="text-blue-500 underline">{website}</a>
      </p>
      <p className="text-gray-700 mt-2">
        <strong>Company:</strong> {company.name}
      </p>
      <p className="text-gray-600 italic">{company.catchPhrase}</p>
    </div>
  );
};


export default UserCard;
