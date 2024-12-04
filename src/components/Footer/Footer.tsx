

import './footer.css'
import Logo from '../../assets/logo-img.svg' 
import angular from '../../assets/angular.svg';
import css from '../../assets/css.svg';
import github from '../../assets/github.svg';
import html from '../../assets/html.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/javascript.svg';
import python from '../../assets/python.svg';
import googlePlay from '../../assets/img/googlePlay.png'
import appStore from '../../assets/img/appStore.png'

export function Footer() {

	return (
		<footer className="footer">				
			<div className="edit-logo">
				<div className="text-content">
					<h2 className="title">MANTENHA A MOTIVAÇÃO</h2>
					<p>
					nosso app foi criado para quem quer aprender de forma prática e <br /> divertida, com uma abordagem inovadora que conecta teoria e <br /> prática. Seja você um iniciante ou alguém em busca de aprimorar <br /> suas habilidades, aqui é o lugar certo para transformar sua relação <br /> com a tecnologia.
					</p>
				</div>
				<img src={Logo} alt="Logo" />
			</div>

			<div className="icons">
				<img src={angular} alt="Logo angular" />
				<img src={css} alt="Logo css" />
				<img src={github} alt="Logo github" />
				<img src={html} alt="Logo html" />
				<img src={java} alt="Logo java" />
				<img src={javascript} alt="Logo javascript" />
				<img src={python} alt="Logo python" />
			</div>

				<h3>Pronto para começar sua jornada tecnológica?</h3>

			<div className='img-play'>
				<img src={googlePlay} alt="" className='play'/>
				<img src={appStore} alt="" className='play'/>
			</div>
			
			<hr className="footer-hr" />
			
			<div className="rodaPe">
				<p id='footer-p'>TechTrack © Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}
