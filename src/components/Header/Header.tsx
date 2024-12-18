import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import s from "./Header.module.css";

export const Header = () => {
	const items = ["Главная", "Галерея", "Проекты", "Сертифкаты", "Контакты"];

	return (
		<div className={s.container}>
			<img src={logo} alt="logo" />
			<div className={s.header__links}>
				{items.map((item, i) => {
					return (
						<Link key={i} className={i === 0 ? s.item1 : s.item} to={"/"}>
							{item}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
