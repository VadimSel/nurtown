import s from "./About.module.css";
import about_1 from "../../assets/img/about(1).png";
import about_2 from "../../assets/img/about(2).png";
import about_3 from "../../assets/img/about(3).png";
import { Button } from "../Button/Button";

export const About = () => {
	const images = [about_1, about_2, about_3];

	return (
		<div className={s.container}>
			<div className={s.background} />
			<div className={s.content}>
				<div className={s.images}>
					{images.map((image, i) => {
						return <img key={i} src={image} className={s.img + i + 1} alt="img" />;
					})}
				</div>
				<div className={s.info}>
					<h2>О компании</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
					<Button type="primary" text="Читать" />
				</div>
			</div>
		</div>
	);
};
