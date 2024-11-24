import img1 from '../../assets/img/img1.svg';
import img2 from '../../assets/img/img2.svg';
import img3 from '../../assets/img/img3.svg';
import loginTachTreck from '../../assets/img/login-tachTreck.svg';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

import './hero.css';
export function Hero() {
	return (
		<section className="hero">
			<p className="descriptionHero">
				Nosso app combina gamificação e{' '}
				<span className="spanHero">aprendizado interativo</span> para ensinar
				<span className="spanHero"> tecnologia</span> e
				<span className="spanHero"> programação</span> de forma acessível e
				divertida, com uma abordagem guiada pela capivara mais inteligente,
				tornando o processo de aprender a codar de um jeito mais simples e
				envolvente!
			</p>

			<div className="heroImages">
				<Card
					image={img1}
					title="Aprendizado Gamificado:"
					description="Complete missões, ganhe pontos e suba de nível enquanto aprende"
					background="#FFB319"
				/>
				<Card
					image={img3}
					title="Aprendizado Acessível:"
					description="Aprenda de forma acessível e inclusiva, com uma abordagem guiada"
					background="#36CECC"
				/>
				<Card
					image={img2}
					title="Aprendizado Interativo:"
					description="Aprenda com a prática, em um ambiente interativo e divertido"
					background="#D11E48"
				/>
			</div>
			<div className="infoHero">
				<div style={{ width: '500px' }}>
					<div className="content">
						<h1 className="titleHero">
							Venha aprender
							<span style={{ color: '#021B66' }}> programação</span> com a{' '}
							<span style={{ color: '#021B66' }}> TechTreck</span>
						</h1>
						<p className="descriptionInfHero">
							A techTreck tem o prazer te de ajudar a aprender programação de
							forma divertida.
						</p>
					</div>

					<div className="content">
						<h1 className="titleHero">
							Uma plataforma de{' '}
							<span style={{ color: '#021B66' }}> aprendizado gameficado</span>
						</h1>
						<p className="descriptionInfHero">
							Aprenda no seu ritmo de forma totalmente personalizada e com muita
							interação.
						</p>
					</div>
					<Button title="COMECE AGORA" backgroundColor="#D11E48" />
				</div>
				<img src={loginTachTreck} alt="" width={393} />
			</div>
		</section>
	);
}
