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
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import api from "../utils/axiosInstance";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [newVisitor, setNewVisitor] = useState({
    name: "",
    age: "",
    phone: "",
    department: "",
    purpose: "",
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchVisitors();
    fetchDepartments();
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

  const fetchDepartments = async () => {
    try {
      const res = await api.get("/departments");
      setDepartments(res.data);
    } catch (err) {
      console.error("Failed to fetch departments");
    }
  };

  const handleAddVisitor = async () => {
    try {
      await api.post("/visitors", newVisitor);
      fetchVisitors();
      setOpen(false);
      setNewVisitor({ name: "", phone: "", department: "", purpose: "" });
    } catch (err) {
      console.error("Error adding visitor");
    }
  };

  const handleCheckout = async (id) => {
    try {
      await api.put(`/visitors/${id}`);
      fetchVisitors();
    } catch (err) {
      console.error("Error checking out visitor");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <TopBar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Visitors
          </Typography>
          <TextField
            label="Search Visitors"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{ mb: 2 }}
          >
            Add Visitor
          </Button>
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
                    <TableCell>
                      <strong>Actions</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visitors
                    .filter(
                      (visitor) =>
                        visitor.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        visitor.phone.includes(search) ||
                        visitor.status
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    )
                    .map((visitor, index) => (
                      <TableRow key={visitor._id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{visitor.name}</TableCell>
                        <TableCell>{visitor.phone}</TableCell>
                        <TableCell>
                          {visitor.department?.name || "N/A"}
                        </TableCell>
                        <TableCell>
                          {new Date(visitor.checkInTime).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {visitor.status === "Out" ? "Checked Out" : "Active"}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleCheckout(visitor._id)}
                            disabled={visitor.status === "Out"}
                            sx={{
                              "&.Mui-disabled": {
                                cursor: "not-allowed",
                                pointerEvents: "auto", // allows cursor to show while still preventing clicks
                              },
                            }}
                          >
                            Checkout
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add Visitor</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              sx={{ mt: 2 }}
              value={newVisitor.name}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, name: e.target.value })
              }
            />
            <TextField
              label="Age"
              type="number"
              fullWidth
              sx={{ mt: 2 }}
              value={newVisitor.age}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, age: e.target.value })
              }
            />
            <TextField
              label="Phone"
              fullWidth
              sx={{ mt: 2 }}
              value={newVisitor.phone}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, phone: e.target.value })
              }
            />
            <TextField
              select
              label="Department"
              fullWidth
              sx={{ mt: 2 }}
              value={newVisitor.department}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, department: e.target.value })
              }
            >
              {departments.map((dept) => (
                <MenuItem key={dept._id} value={dept._id}>
                  {dept.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Purpose"
              fullWidth
              sx={{ mt: 2 }}
              value={newVisitor.purpose}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, purpose: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={handleAddVisitor}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Visitors;
