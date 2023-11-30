//Libs
import { ArrowRightCircle } from 'lucide-react';

//Assets
import Motor from "../assets/Motor.png"
import Pirelli from "../assets/Pirelli.png"
import Danone from "../assets/Danone.png"
import Embraer from "../assets/Embraer.png"
import Tigre from "../assets/Tigre.png"

//Components
import Navbar from "../components/navbar/Navbar";
import PrimaryButton from "../components/button/PrimaryButton";
import CTAFormModal from '../components/custom/cta/CTAFormModal';
import { useState } from 'react';

export default function HomeHeader() {
	const [onRenderModal, setOnRenderModal] = useState(false)

	return (
		<>
		<Navbar/>
		<header className="grid large-gap">
			<section className="header-container">
				<div className="header-title">
					<h1>Monitoramento online e gestão de ativos em um só lugar</h1>
					<p>Evite falhas nas suas máquinas e deixe o tempo de inatividade no passado com o melhor sistema preditivo do mercado</p>
					<div className="medium-margin-top">
						<PrimaryButton
							onClick={() => {setOnRenderModal(true)}}
						>
							<span>Demonstração <ArrowRightCircle color="#fff" size={25}/></span>
						</PrimaryButton>
						<p className="light-grey tiny">
							Já é cliente?
							<a href="https://app.tractian.com/login" className="light-grey pointer">
								<b> Acesse aqui</b>
							</a>
						</p>
					</div>
				</div>
				<img src={Motor} alt="Desenho flat de motor"/>
			</section>
				<div className="grid fit-normal center-items max-width">
					<img src={Pirelli} alt="Logo Pirelli"/>
					<img src={Embraer} alt="Logo Embraer"/>
					<img src={Tigre} alt="Logo Tigre"/>
					<img src={Danone} alt="Logo Danone"/>
				</div>
		</header>
		{ onRenderModal &&
			<CTAFormModal
				setOnRenderModal={setOnRenderModal}
			/>
		}
	</>

	)
}
