import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./Components/Add/Add";
import Home from "./Components/Home/Home";
import View from "./Components/View/View";
import DeleteOption from "./Components/Delete/DeleteOption";
import UpdateOption from "./Components/Update/UpdateOption";

import GlobalContextProvider from "./Contexts/Global/GlobalContext";
export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<GlobalContextProvider>
					<Header />
					<Routes>
						<Route path="/add" element={<Add />} />
						<Route path="/home" element={<Home />} />
						<Route path="/view" element={<View />} />
						<Route path="/delete" element={<DeleteOption />} />
						<Route path="/update" element={<UpdateOption />} />
					</Routes>
				</GlobalContextProvider>
			</BrowserRouter>
		</div>
	);
}
