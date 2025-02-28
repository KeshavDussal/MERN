import { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import api from "../utils/axiosInstance";
import Sidebar from "../components/Sidebar";
import AppBar from "../components/AppBar";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const res = await api.get("/visitors");
      setVisitors(res.data);
    } catch (err) {
      setError("Failed to load visitors");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <AppBar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Visitors
          </Typography>

          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>#</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Phone</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Department</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Check-in Time</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Status</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visitors.map((visitor, index) => (
                    <TableRow key={visitor._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{visitor.name}</TableCell>
                      <TableCell>{visitor.phone}</TableCell>
                      <TableCell>{visitor.department?.name || "N/A"}</TableCell>
                      <TableCell>
                        {new Date(visitor.checkInTime).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {visitor.checkedOut ? "Checked Out" : "Active"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Visitors;
