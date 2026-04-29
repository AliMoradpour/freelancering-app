import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <main className="container xl:max-w-xl mx-auto">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </main>
  );
}

export default App;
