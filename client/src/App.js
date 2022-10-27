import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Add from "./Components/Add/Add.jsx";
import ViewOption from "./Components/View/ViewOption";
import DeleteOption from "./Components/Delete/DeleteOption";
import UpdateOption from "./Components/Update/UpdateOption";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<ViewOption />} />
          <Route path="/delete" element={<DeleteOption />} />
          <Route path="/update" element={<UpdateOption />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
