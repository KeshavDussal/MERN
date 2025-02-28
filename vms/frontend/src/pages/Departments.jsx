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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
  IconButton,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import api from "../utils/axiosInstance";
import Sidebar from "../components/Sidebar";
import AppBar from "../components/AppBar";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newDepartment, setNewDepartment] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/departments");
      setDepartments(res.data);
    } catch (err) {
      setError("Failed to load departments");
    } finally {
      setLoading(false);
    }
  };

  const handleAddDepartment = async () => {
    if (!newDepartment.trim()) {
      setSnackbar({
        open: true,
        message: "Department name is required",
        severity: "error",
      });
      return;
    }
    try {
      await api.post("/departments", { name: newDepartment });
      setSnackbar({
        open: true,
        message: "Department added successfully",
        severity: "success",
      });
      setOpenDialog(false);
      setNewDepartment("");
      fetchDepartments();
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to add department",
        severity: "error",
      });
    }
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await api.delete(`/departments/${id}`);
      setSnackbar({
        open: true,
        message: "Department deleted",
        severity: "success",
      });
      fetchDepartments();
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to delete department",
        severity: "error",
      });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <AppBar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Departments
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenDialog(true)}
            sx={{ mb: 2 }}
          >
            Add Department
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
                      <strong>Department Name</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Actions</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {departments.map((dept, index) => (
                    <TableRow key={dept._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{dept.name}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteDepartment(dept._id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>

        {/* Add Department Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add Department</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="Department Name"
              variant="outlined"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleAddDepartment} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for Messages */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          message={snackbar.message}
          severity={snackbar.severity}
        />
      </div>
    </div>
  );
};

export default Departments;
