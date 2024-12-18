import s from "./Button.module.css";
import leftArrow from "../../assets/icons/arrow-left.svg";
import rightArrow from "../../assets/icons/arrow-right.svg";
import rightArrowWhite from "../../assets/icons/arrow-right-white.svg";

type ButtonProps = {
	type: "smallLeft" | "smallRight" | "primary" | "secondary";
	text?: string;
};

export const Button = ({ type, text }: ButtonProps) => {
	const ButtonHandler = (type: string) => {
		switch (type) {
			case "smallLeft":
				return leftArrow;
			case "secondary":
				return rightArrowWhite;
			default:
				return rightArrow;
		}
	};

	return (
		<button className={s[type]}>
			<span>{text}</span>
			<img src={ButtonHandler(type)} alt="button" />
		</button>
	);
};
