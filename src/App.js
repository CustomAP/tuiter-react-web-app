import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/labs" />} />
        <Route path="/labs/*" element={<Labs />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/tuiter/*" element={<Tuiter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
