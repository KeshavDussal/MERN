import { createContext, useState, useEffect } from "react";
import api from "../utils/axiosInstance";

export const VisitorContext = createContext();

export const VisitorProvider = ({ children }) => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Visitors
  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const res = await api.get("/visitors");
      setVisitors(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch visitors.");
    } finally {
      setLoading(false);
    }
  };

  // Add Visitor
  const addVisitor = async (visitorData) => {
    try {
      const res = await api.post("/visitors", visitorData);
      setVisitors([...visitors, res.data]); // Update state
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add visitor.");
    }
  };

  // Search Visitors
  const searchVisitors = async (query) => {
    setLoading(true);
    try {
      const res = await api.get(`/visitors/search?query=${query}`);
      setVisitors(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Search failed.");
    } finally {
      setLoading(false);
    }
  };

  // Checkout Visitor
  const checkoutVisitor = async (id) => {
    try {
      const res = await api.put(`/visitors/${id}`, {
        status: "Out",
        checkOutTime: new Date(),
      });
      setVisitors(visitors.map((v) => (v._id === id ? res.data : v))); // Update state
    } catch (err) {
      setError(err.response?.data?.message || "Failed to checkout visitor.");
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <VisitorContext.Provider
      value={{
        visitors,
        loading,
        error,
        fetchVisitors,
        addVisitor,
        searchVisitors,
        checkoutVisitor,
      }}
    >
      {children}
    </VisitorContext.Provider>
  );
};
