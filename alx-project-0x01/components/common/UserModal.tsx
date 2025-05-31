import React, { useState } from "react";
import { UserModalProps, UserData, Address, Geo, Company } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData | string,
    nestedField?: keyof Address | keyof Company | keyof Geo
  ) => {
    if (nestedField && field === "address") {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [nestedField]: e.target.value,
        },
      }));
    } else if (nestedField && field === "company") {
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [nestedField]: e.target.value,
        },
      }));
    } else if (nestedField && field === "geo") {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [nestedField]: e.target.value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 max-h-[90vh] overflow-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        {/* Example inputs */}
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
          required
        />
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, "username")}
          required
        />
        <input
          type="email"
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
          required
        />
        {/* Address fields */}
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Street"
          value={formData.address.street}
          onChange={(e) => handleChange(e, "address", "street")}
        />
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="City"
          value={formData.address.city}
          onChange={(e) => handleChange(e, "address", "city")}
        />
        {/* Company name */}
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Company Name"
          value={formData.company.name}
          onChange={(e) => handleChange(e, "company", "name")}
        />
        {/* Phone, website */}
        <input
          className="mb-2 w-full border px-2 py-1 rounded"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleChange(e, "phone")}
        />
        <input
          className="mb-4 w-full border px-2 py-1 rounded"
          placeholder="Website"
          value={formData.website}
          onChange={(e) => handleChange(e, "website")}
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
