import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
