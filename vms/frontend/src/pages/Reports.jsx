import { useState } from "react";
import {
  Container,
  TextField,
  Button,
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
import TopBar from "../components/TopBar";

const Reports = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reports, setReports] = useState([]);
  const [reportGenerated, setReportGenerated] = useState(false); // New state to track search action

  const fetchReports = async () => {
    setLoading(true);
    setError(null);
    setReportGenerated(true); // Mark as generated when user searches

    try {
      const res = await api.get(
        `/visitors/reports?from=${fromDate}&to=${toDate}`
      );
      setReports(res.data);
    } catch (err) {
      setError("Failed to fetch reports");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <TopBar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Visitor Reports
          </Typography>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <TextField
              label="From"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <TextField
              label="To"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <Button variant="contained" onClick={fetchReports}>
              Generate Report
            </Button>
          </div>

          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : reportGenerated && reports.length === 0 ? (
            <Alert severity="info">
              No records found for the selected date range.
            </Alert>
          ) : (
            reports.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Total Visitors: {reports.length}
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Purpose</TableCell>
                        <TableCell>Check-in Time</TableCell>
                        <TableCell>Check-out Time</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reports.map((visitor, index) => (
                        <TableRow key={visitor._id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{visitor.name}</TableCell>
                          <TableCell>{visitor.phone}</TableCell>
                          <TableCell>
                            {visitor.department?.name || "N/A"}
                          </TableCell>
                          <TableCell>{visitor?.purpose || "N/A"}</TableCell>
                          <TableCell>
                            {new Date(visitor.checkInTime).toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {visitor.checkOutTime
                              ? new Date(visitor.checkOutTime).toLocaleString()
                              : "N/A"}
                          </TableCell>
                          <TableCell>{visitor.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )
          )}
        </Container>
      </div>
    </div>
  );
};

export default Reports;
