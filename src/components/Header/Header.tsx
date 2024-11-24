import './header.css';
import angular from '../../assets/angular.svg';
import css from '../../assets/css.svg';
import github from '../../assets/github.svg';
import html from '../../assets/html.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/javascript.svg';
import python from '../../assets/python.svg';

import Logo from '../../assets/logo.svg';
import Capivara from '../../assets/logo-img.svg';
import { Button } from '../Button/Button';

export function Header() {
	return (
		<header className="container">
			<div className="intro">
				<div style={{ marginRight: 50 }}>
					<img src={Logo} alt="Logo" />
					<p className="description">
						Desvendando a tecnologia com a sabedoria da capivara!
					</p>

					<div className="buttons">
						<Button title="COMECE AGORA" backgroundColor="#d11e48" />
						<Button title="SAIBA MAIS" backgroundColor="#FFB319" />
					</div>
				</div>
				<img src={Capivara} alt="Logo Capivara" />
			</div>

			<div className="technology">
				<img src={angular} alt="Logo angular" />
				<img src={css} alt="Logo css" />
				<img src={github} alt="Logo github" />
				<img src={html} alt="Logo html" />
				<img src={java} alt="Logo java" />
				<img src={javascript} alt="Logo javascript" />
				<img src={python} alt="Logo python" />
			</div>
		</header>
	);
}
