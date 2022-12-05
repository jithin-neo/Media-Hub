import Body from "./components/Body";
import Card from "./components/Common/Card";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Dashboard from "./components/Dashboard";
import Login from "./pages/login";
import { auth } from "./helpers/firebase_utils";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading loading from app...</p>;
  return (
    <div className="w-full h-full bg-[#F2EBE1] p-10">
      <Card>
        {!user ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Layout>
            <Navbar />
            <div className="w-96 bg-[#F2EBE1]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/edit" element={<div>edit</div>} />
                <Route path="/pages" element={<div>pages</div>} />
                <Route path="/upload" element={<div>uploads</div>} />
              </Routes>
            </div>
            <Body />
          </Layout>
        )}
      </Card>
    </div>
  );
}

export default App;
