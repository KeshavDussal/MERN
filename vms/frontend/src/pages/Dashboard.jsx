import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import api from "../utils/axiosInstance";
import Sidebar from "../components/Sidebar";
import AppBar from "../components/AppBar";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/dashboard"); // Fetch dashboard data
        setStats(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <AppBar />
        <Container sx={{ mt: 10 }}>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {stats && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Total Visitors</Typography>
                    <Typography variant="h4">{stats.totalVisitors}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Active Check-ins</Typography>
                    <Typography variant="h4">
                      {stats.checkedInVisitors}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Total Departments</Typography>
                    <Typography variant="h4">
                      {stats.totalDepartments}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
