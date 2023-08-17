import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteExpense from "./routes/RouteExpense";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouteExpense />
      </BrowserRouter>
    </div>
  );
}

export default App;
