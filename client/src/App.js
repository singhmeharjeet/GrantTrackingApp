import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./Components/Add/Add";
import ViewOption from "./Components/View/ViewOption";
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
						<Route path="/view" element={<ViewOption />} />
						<Route path="/delete" element={<DeleteOption />} />
						<Route path="/update" element={<UpdateOption />} />
					</Routes>
				</GlobalContextProvider>
			</BrowserRouter>
		</div>
	);
}
