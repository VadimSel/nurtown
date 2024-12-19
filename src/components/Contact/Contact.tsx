import { Button } from "../Button/Button";
import s from "./Contact.module.css";
import contactImage from '../../assets/img/contact.png'

export const Contact = () => {
	return (
		<div className={s.container}>
			<h2 className={s.contactTitle}>Связаться с нами</h2>
			<div>
				<div className={s.formContainer}>
					<form action="" method="post">
						<input type="text" name="name" placeholder="Имя" />
						<input type="tel" name="phone" placeholder="Номер телефона" required />
						<input type="email" name="email" placeholder="E-mail" required />
						<input type="text" name="product" placeholder="Интересующий товар/услуга" />
						<textarea name="message" placeholder="Сообщение"></textarea>
					</form>
          <img src={contactImage} alt="img" />
				</div>
				<div className={s.privacy}>
					<input type="checkbox" id="privacy" />
					<label htmlFor="privacy">
						Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
					</label>
				</div>
			</div>
			<Button type="secondary" text="Отправить" />
		</div>
	);
};
