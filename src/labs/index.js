import { Route, Routes } from "react-router";
import Nav from "../nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";

function Labs() {
  return (
    <div className="me-3 ms-3">
      <Nav />
      <Routes>
        <Route path="a3" element={<Assignment3 />} />
        <Route path="a4" element={<Assignment4 />} />
      </Routes>
    </div>
  );
}

export default Labs;
