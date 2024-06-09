import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

function App() {
  const Shoppage = () => <h1>I am Hungrt</h1>;
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="/home/shop" element={<Shoppage />} />
      </Route>
    </Routes>
  );
}

export default App;
