import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
	return (
		<div>
			<div className="container">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
