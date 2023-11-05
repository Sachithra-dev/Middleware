import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"; // Corrected typo
import AuthCheck from "./AuthCheck";
import Navigation from "./components/Navigation/Navigation";


function App() {
	const token = Cookies.get("token");
  const [id,setID] = useState("");
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Make a request to the backend to fetch user role and profile completion state
		// Replace '/api/userInfo' with the actual endpoint to fetch user info
		fetch("/api/users/userInfo", {
			method: "GET",
			headers: {
				token: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// Assuming the response contains userRole and profileCompletion properties
        setLoading(false);
				setID(data.id);
			})
			.catch((error) => {
				console.error("Error fetching user info:", error);
				setLoading(false);
			});
	}, [token]);

	const logout = () => {
		Cookies.remove("token");
		window.location.href = "/login"; // Replace with your login page URL
	};

	return (
		<Router>
			<Routes>
				{token ? (
					<>
						<Route
							path="/"
							element={
								<>
									<AuthCheck
										token={token}
										id={id}
										loading={loading}
									/>
								</>
							}
						/>
					</>
				) : (
					<>
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/"
							element={<Navigate replace to="/login" />}
						/>
            			<Route
							path="/dashboard"
							element={<Navigation/>}
						/>
					</>
				)}
				
			</Routes>
		</Router>
	);
}

export default App;
