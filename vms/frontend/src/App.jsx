import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DepartmentProvider } from "./context/DepartmentContext";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <DepartmentProvider>
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
        </Routes>
      </Router>
    </DepartmentProvider>
  );
};

export default App;
