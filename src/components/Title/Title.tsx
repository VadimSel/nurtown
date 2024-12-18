import s from "./Title.module.css";
import line from "../../assets/icons/line.svg";
import titleImage from "../../assets/img/Rectangle 6.png";
import bigLine from '../../assets/icons/bigLine.svg'
import { Button } from "../Button/Button";

export const Title = () => {
	return (
		<div className={s.container}>
			<div className={s.content}>
				<div className={s.contentLeft}>
					<div className={s.contentLeft__name}>
						<span>Project</span>
						<span>Nurtown</span>
					</div>
					<div className={s.contentLeft__buttons}>
						<Button type="smallLeft"/>
						<Button type="smallRight"/>
            <img src={bigLine} alt="bigLine" />
					</div>
					<div className={s.contentLeft__numbers}>
						<span>01</span>
						<img src={line} alt="line" />
						<span>02</span>
					</div>
				</div>
				<div className={s.contentRight}>
					<Button text="Взглянуть" type="primary"/>
					<img src={titleImage} alt="img" />
				</div>
			</div>
		</div>
	);
};
