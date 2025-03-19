import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routes로 수정

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/movie"
          element={<Detail />}
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
