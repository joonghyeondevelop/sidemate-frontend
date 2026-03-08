import { Toaster } from "sonner";
import "./App.css";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <Router />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
