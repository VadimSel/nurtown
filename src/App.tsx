import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
