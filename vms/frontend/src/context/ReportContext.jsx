import { createContext, useState } from "react";
import api from "../utils/axiosInstance";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Reports
  const fetchReports = async (from, to) => {
    setLoading(true);
    try {
      const res = await api.get(`/visitors/reports?from=${from}&to=${to}`);
      setReports(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch reports.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReportContext.Provider value={{ reports, loading, error, fetchReports }}>
      {children}
    </ReportContext.Provider>
  );
};
