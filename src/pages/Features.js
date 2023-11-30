//Assets
import Plataforma2 from "../assets/plataforma2.png"
import Plataforma from "../assets/plataforma1.png"
import Plataforma3 from "../assets/plataforma3.png"
import Plataforma4 from "../assets/plataforma4.png"

//Components
import Tabs from "../components/custom/tabs/Tabs";
import FeaturesCard from "../components/custom/featuresCard/FeaturesCard";

export default function Features() {
	return (
		<>
			<header className="grid center-items medium-margin-top">
				<div className="feature-title center-text">
					<h1 className="light-blue big-xxxx">Com <b>TRACTIAN</b>, não existe máquina parada</h1>
					<p className="grey big">Todas as ferramentas que você precisa para manter a produção operando e usar seu tempo e recursos de forma otimizada estão aqui.</p>
				</div>
			</header>
			<main>
				<Tabs tabs={["Preditividade", "Inteligência", "Otimização", "Automação"]}>
					<FeaturesCard
						title="Preditiva de verdade"
						text="Crie, gerencie e automatize Ordens de Serviço. Planeje preventivas com múltiplas visões e categorias, acesse relatórios operacionais completos e reduza o tempo de reação de cada OS"
						image={Plataforma}
					/>
					<FeaturesCard
						title="Inteligência artificial"
						text="Esqueça as rotas de inspeção e análises mensais. Tenha tudo de forma automática com a melhor tecnologia do mercado, que aprende o comportamento da máquina e analisa com precisão cada falha potencial"
						image={Plataforma2}
					/>
					<FeaturesCard
						title="Rápida instalação"
						text="Você só precisa plugar o sensor no ativo – o resto ele faz sozinho. Com conexão 3G/4G e bateria de 3 anos, não é preciso WiFi ou infraestrutura. Toda a coleta é criptografada e não há risco de perda de dados"
						image={Plataforma3}
					/>
					<FeaturesCard
						title="Indicadores automáticos"
						text="Tenha todos os seus indicadores de manutenção atualizados em uma só página. Diminua o MTTR e o MTTA, aumente o MTBF e alcance os melhores índices de disponibilidade e confiabilidade"
						image={Plataforma4}
					/>
				</Tabs>
			</main>
		</>

	)
}
