import { createContext, useState, useEffect } from "react";
import api from "../utils/axiosInstance";

export const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Departments
  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/departments");
      setDepartments(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch departments.");
    } finally {
      setLoading(false);
    }
  };

  // Add Department
  const addDepartment = async (name) => {
    try {
      const res = await api.post("/departments", { name });
      setDepartments([...departments, res.data]); // Update state
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add department.");
    }
  };

  // Delete Department
  const deleteDepartment = async (id) => {
    try {
      await api.delete(`/departments/${id}`);
      setDepartments(departments.filter((dept) => dept._id !== id)); // Remove from state
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete department.");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <DepartmentContext.Provider
      value={{
        departments,
        loading,
        error,
        fetchDepartments,
        addDepartment,
        deleteDepartment,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
