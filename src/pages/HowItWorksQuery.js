//Libs
import { useState } from "react";

//Components
import HowItWorksCardsQuery from "../components/custom/howItWorksCard/HowItWorksCardsQuery";

export default function HowItWorksQuery() {

	const [monitoring, setMonitoring] = useState(false)
	const [iot, setIot] = useState(false)
	const [management, setManagement] = useState(false)
	const [predictive, setPredictive] = useState(false)

	return (
		<>
			<main className="how-container-query">
				<div className="how-cards-container-query">
					<HowItWorksCardsQuery
						text="A TRACTIAN é a ferramenta que remove barreiras para você manter sua operação rodando sem interrupções"
						textButton="Monitoramento online"
						onClick={() => {setMonitoring(true), setIot(false), setManagement(false), setPredictive(false)}}
						status={monitoring}
						textButtonContent="Conheça o sensor inteligente"
						href="https://tractian.com/sensor-tractian"
					/>
					<HowItWorksCardsQuery
						text="Com o Smart Trac receba alertas automáticos ao menor sinal de defeito e elimine os gastos com corretivas"
						textButton="Tecnologia IoT"
						onClick={() => {setMonitoring(false), setIot(true), setManagement(false), setPredictive(false)}}
						status={iot}
						textButtonContent="Saiba mais sobre insights"
						href="https://tractian.com/sensor-tractian"
					/>
					<HowItWorksCardsQuery
						text="Controle e organize todas as suas Ordens de Serviço na interface móvel do TracOS™"
						textButton="Gestão de ativos"
						onClick={() => {setMonitoring(false), setIot(false), setManagement(true), setPredictive(false)}}
						status={management}
						textButtonContent="Confira o CMMS na prática"
						href="https://tractian.com/software-gestao-manutencao"
					/>
					<HowItWorksCardsQuery
						text="Com a fusão perfeita de hardware e software, você consegue controlar suas máquinas, automatizar processos e gerenciar as atividades. Tudo isso em uma só ferramenta"
						textButton="Manutenção preditiva"
						onClick={() => {setMonitoring(false), setIot(false), setManagement(false), setPredictive(true)}}
						status={predictive}
						textButtonContent="Descubra o sistema preditivo"
						href="https://tractian.com/plataforma-de-monitoramento"
					/>
				</div>
			</main>
		</>

	)
}
