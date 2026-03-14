import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserContent, getAdminContent } from "../api/authApi";

const DashboardPage = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const [userContent, setUserContent] = useState("");
  const [adminContent, setAdminContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const userData = await getUserContent();
        setUserContent(userData);
      } catch (err) {
        console.log("No user content access");
      }

      if (role === "ADMIN") {
        try {
          const adminData = await getAdminContent();
          setAdminContent(adminData);
        } catch (err) {
          console.log("No admin content access");
        }
      }
    };

    fetchContent();
  }, [role]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {role}
          </span>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 max-w-2xl mx-auto mt-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Welcome to your Dashboard!
        </h2>

        {/* User Card - visible to USER and ADMIN */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-600 mb-2">
            👤 User Content
          </h3>
          <p className="text-gray-600">
            {userContent || "Loading user content..."}
          </p>
        </div>

        {/* Admin Card - visible to ADMIN only */}
        {role === "ADMIN" && (
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
            <h3 className="text-lg font-bold text-red-600 mb-2">
              🔐 Admin Content
            </h3>
            <p className="text-gray-600">
              {adminContent || "Loading admin content..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;