import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";

import About from "./pages/About";
import ApplicationDetails from "./pages/ApplicationDetails";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import EditApplication from "./pages/EditApplication";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewApplication from "./pages/NewApplication";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="applications" element={<Applications />} />
          <Route path="applications/new" element={<NewApplication />} />
          <Route path="applications/:id" element={<ApplicationDetails />} />
          <Route path="applications/:id/edit" element={<EditApplication />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
