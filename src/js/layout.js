import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../styles/styles.css"

import ContactList from "./views/ContactList.js";
import injectContext from "./store/appContext";



//create your first component
function Layout() {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>


				<Routes>
					<Route path="/" element={<ContactList />} />
					<Route path="/contactlist" element={<ContactList />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>


			</BrowserRouter>
		</div>
	);
}

export default injectContext(Layout);