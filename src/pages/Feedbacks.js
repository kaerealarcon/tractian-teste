//Assets
import Fernanda from "../assets/FernandaCosta.png"
import Cintia from "../assets/Cintia.png"
import Carlos from "../assets/Carlos.png"
import Rodrigo from "../assets/Rodrigo.png"

//Components
import FeedbackCard from "../components/custom/feedbackCard/FeedbackCard";
import Slide from "../components/custom/slide/Slide";

export default function Feedbacks() {
	return (
		<>
		<header className="grid center-items center-text">
			<h1 className="light-blue none-margin-bottom">Ainda tá na <b>dúvida</b>?</h1>
			<p className="grey">Olha o que essa galera tem a dizer da <b>TRACTIAN</b></p>
		</header>
		<main className="bg-blue">
			<Slide>
				<FeedbackCard
					image={Fernanda}
					name="Fernanda Costa"
					role= "Supervisora de manutenção"
					company="Indústria de embalagens"
					feedback="Com a TRACTIAN, consigo acompanhar 100% o que está acontecendo na fábrica. Tudo é mais rápido, automático e interativo. Unindo monitoramento online, gestão de ordens de serviço e histórico acessível, fica mais fácil colocar a casa em ordem"
				/>
				<FeedbackCard
					image={Rodrigo}
					name="Rodrigo Silva"
					role= "Auxiliar técnico"
					company="Indústria química"
					feedback="Eu vi que para dar um passo adiante na confiabilidade da organização, eu precisaria monitorar alguns equipamentos 24h por dia. E a TRACTIAN oferece muita facilidade na implantação, além de ter uma IA potente por trás do processo"
				/>
				<FeedbackCard
					image={Cintia}
					name="Cintia Lopes"
					role= "Engenheira analista de manutenção"
					company="Indústria Alimentícia"
					feedback="O atendimento da Tractian é diferente de tudo que já vi durante essa minha carreira na manutenção. A hora que precisamos de ajuda, esclarecimentos, suporte nas ações, há uma equipe (e que equipe!), dedicada a nos auxiliar"
				/>
				<FeedbackCard
					image={Carlos}
					name="Carlos dos Santos"
					role= "Gerente de operação"
					company="Indústria de embalagens"
					feedback="Antes da TRACTIAN, a falha acontecia sem que nós tivéssemos nenhuma chance de reação. Agora nós conseguimos identificar qualquer anomalia fora do normal e isso nos permite fazer a intervenção antes que a quebra aconteça"
				/>
			</Slide>
		</main>
		</>

	)
}
