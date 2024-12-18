import s from "./Goals.module.css";

export const Goals = () => {
	return (
		<div className={s.container}>
			<h2>Основные задачи</h2>
			<div className={s.content}>
				<div className={s.contentItemLeft}>
					<span>1</span>
					<p>
						Создание комфортных условий и повышение качества обслуживания клиентов
					</p>
				</div>
				<div className={s.contentItemRight}>
					<span>2</span>
					<p>
						Постоянно совершенствовать качество предоставляемых услуг путем обучения
						персонала, закупки нового оборудования и усиленной рекламы на рынке
					</p>
				</div>
			</div>
		</div>
	);
};
