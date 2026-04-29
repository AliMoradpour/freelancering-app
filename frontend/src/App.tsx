import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
