import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Employees from "./pages/Employees";
import Employee from "./pages/Employee";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Employees />} />
          <Route path="employee/:id" element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
