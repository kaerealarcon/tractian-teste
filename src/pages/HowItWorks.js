//Libs
import { useState } from "react";

//Assets
import Monitoring from "../assets/Monitoring.png"
import Management from "../assets/Management.png"
import IoT from "../assets/IoT.png"
import Predictive from "../assets/Predictive.png"

//Components
import HowItWorksCards from "../components/custom/howItWorksCard/HowItWorksCards";

export default function HowItWorks() {

	const [monitoring, setMonitoring] = useState(true)
	const [iot, setIot] = useState(false)
	const [management, setManagement] = useState(false)
	const [predictive, setPredictive] = useState(false)

	return (
		<>
			<h1 className="medium-margin-left large-margin-top">Como funciona?</h1>
			<main className="how-container">
				<div className="how-cards-container">
					<HowItWorksCards
						text="A TRACTIAN é a ferramenta que remove barreiras para você manter sua operação rodando sem interrupções"
						textButton="Monitoramento online"
						onMouseEnter={() => {setMonitoring(true), setIot(false), setManagement(false), setPredictive(false)}}
						hover={monitoring}
						href="https://tractian.com/en/tractian-smart-sensor"
					/>
					<HowItWorksCards
						text="Com o Smart Trac receba alertas automáticos ao menor sinal de defeito e elimine os gastos com corretivas"
						textButton="Tecnologia IoT"
						onMouseEnter={() => {setMonitoring(false), setIot(true), setManagement(false), setPredictive(false)}}
						hover={iot}
						href="https://tractian.com/en/tractian-smart-sensor"
					/>
					<HowItWorksCards
						text="Controle e organize todas as suas Ordens de Serviço na interface móvel do TracOS™"
						textButton="Gestão de ativos"
						onMouseEnter={() => {setMonitoring(false), setIot(false), setManagement(true), setPredictive(false)}}
						hover={management}
						href="https://tractian.com/en/software-management-maintenance"
					/>
					<HowItWorksCards
						text="Com a fusão perfeita de hardware e software, você consegue controlar suas máquinas, automatizar processos e gerenciar as atividades. Tudo isso em uma só ferramenta"
						textButton="Manutenção preditiva"
						onMouseEnter={() => {setMonitoring(false), setIot(false), setManagement(false), setPredictive(true)}}
						hover={predictive}
						href="https://tractian.com/en/monitoring-platform"
					/>
				</div>
				{monitoring == true &&
					<img class="monitoring-img" src={Monitoring}/>
				}
				{iot == true &&
					<img class="monitoring-img" src={IoT}/>
				}
				{management == true &&
					<img class="monitoring-img" src={Management}/>
				}
				{predictive == true &&
					<img class="monitoring-img" src={Predictive}/>
				}
			</main>
		</>

	)
}
