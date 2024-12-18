import { Button } from "../Button/Button";
import s from "./Projects.module.css";
import img_1 from "../../assets/img/projects_1.png";
import img_2 from "../../assets/img/projects_2.png";
import img_3 from "../../assets/img/projects_3.png";
import img_4 from "../../assets/img/projects_4.png";
import img_5 from "../../assets/img/projects_5.png";
import whiteArrow from '../../assets/icons/arrow-right-white.svg'

export const Projects = () => {
	const images = [img_1, img_2, img_3, img_4, img_5];

	return (
		<div className={s.container}>
			<h2>Наши проекты</h2>
			<div className={s.content}>
				<img src={img_1} alt="img" />
				<img src={img_2} alt="img" />
				<img src={img_3} alt="img" />
				<img src={img_4} alt="img" />
				<img src={img_5} alt="img" />
        <div className={s.subTitle}>
          <span>Досуговый центр</span>
          <span>Подробнее<img src={whiteArrow} alt="img" /></span>
        </div>
			</div>
			<Button text="Все проекты" type="secondary" />
		</div>
	);
};
