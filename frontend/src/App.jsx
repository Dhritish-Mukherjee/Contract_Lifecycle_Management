import React, { useContext } from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import CreatorDashboard from "./pages/Creator/CreatorDashboard";
import ReviewerDashboard from "./pages/Reviewer/ReviewerDashboard";
import ApproverDashboard from "./pages/Approver/ApproverDashboard";
import { AppContext } from "./context/AppContext";
import DashboardHome from "./pages/Creator/DashboardHome";
import CreateContract from "./pages/Creator/CreateContract";
import MyContracts from "./pages/Creator/MyContracts";
import Profile from "./pages/Creator/Profile";

const App = () => {
  const { token } = useContext(AppContext);
  const { role } = useContext(AppContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/dashboard" />}
        />

        {/* DASHBOARD ROOT */}
      <Route path="/dashboard">
        {/* CREATOR ROUTES */}
        {token && role === "creator" && (
          <Route element={<CreatorDashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="contracts/create" element={<CreateContract />} />
            <Route path="contracts" element={<MyContracts />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        )}

        {/* REVIEWER ROUTES */}
        {token && role === "reviewer" && (
          <Route element={<ReviewerDashboard />}>
            <Route index element={<h2>Reviewer Home</h2>} />
          </Route>
        )}

        {/* APPROVER ROUTES */}
        {token && role === "approver" && (
          <Route element={<ApproverDashboard />}>
            <Route index element={<h2>Approver Home</h2>} />
          </Route>
        )}

        {/* NO ACCESS */}
        {!token && <Route path="*" element={<Navigate to="/login" />} />}
      </Route>
      </Routes>
    </div>
  );
};

export default App;
