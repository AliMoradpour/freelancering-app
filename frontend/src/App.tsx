import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <main className="container xl:max-w-xl mx-auto">
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
}

export default App;
