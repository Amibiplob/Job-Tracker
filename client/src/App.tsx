import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
