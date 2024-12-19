import s from "./Footer.module.css";
import logoWhite from "../../assets/icons/logoWhite.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedIn from "../../assets/icons/Linked In.svg";
import pinterest from "../../assets/icons/pininterest.svg";

export const Footer = () => {
	const infoItems = ["Главная", "Галерея", "Проекты", "Сертификаты", "Контакты"];
	const socialIcons = [facebook, twitter, linkedIn, pinterest];

	return (
		<footer className={s.container}>
			<div className={s.info}>
				<img src={logoWhite} alt="logo" />
				<div className={s.information}>
					<p>Информация</p>
					<div className={s.informationItem}>
						{infoItems.map((item) => {
							return <span key={item}>{item}</span>;
						})}
					</div>
				</div>
				<div className={s.contacts}>
					<p>Контакты</p>
					<div>
						<img src={location} alt="location" />
						<p>
							100000, Республика Казахстан,
							<br /> г. Караганда, ул. Телевизионная 10
						</p>
					</div>
					<div>
						<img src={phone} alt="phone" />
						<a href="tel:+77017776811">+7 (701) 77 76 811</a>
					</div>
					<div>
						<img src={mail} alt="mail" />
						<a href="mailto:Galym.sultanov@mail.ru">Galym.sultanov@mail.ru</a>
					</div>
				</div>
				<div className={s.socials}>
					<p>Социальные сети</p>
					<div>
						{socialIcons.map((item, i) => {
							return <img src={item} alt="socialIcon" />;
						})}
					</div>
				</div>
				<div className={s.infoSocials}></div>
			</div>
			<p className={s.rights}>© 2019 Digital Project. Все права защищены.</p>
		</footer>
	);
};
