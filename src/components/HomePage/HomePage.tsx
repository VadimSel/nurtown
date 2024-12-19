import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Goals } from "../Goals/Goals";
import { Projects } from "../Projects/Projects";
import { Title } from "../Title/Title";
import s from './HomePage.module.css'

export const HomePage = () => {
	return (
		<div className={s.container}>
			<Title />
      <About/>
      <Goals/>
      <Projects/>
      <Contact/>
		</div>
	);
};
