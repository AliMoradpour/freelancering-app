import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Auth from "./pages/Auth";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Fragment>
  );
}

export default App;
