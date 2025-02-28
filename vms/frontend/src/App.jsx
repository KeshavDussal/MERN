import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DepartmentProvider } from "./context/DepartmentContext";
import { VisitorProvider } from "./context/VisitorContext";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Visitors from "./pages/Visitors";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <DepartmentProvider>
      <VisitorProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/departments"
              element={
                <ProtectedRoute>
                  <Departments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/visitors"
              element={
                <ProtectedRoute>
                  <Visitors />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </VisitorProvider>
    </DepartmentProvider>
  );
};

export default App;
