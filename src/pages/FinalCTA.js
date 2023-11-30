//Libs
import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";

//Components
import PrimaryButton from "../components/button/PrimaryButton";
import CTAFormModal from "../components/custom/cta/CTAFormModal";

export default function FinalCTA() {
	const [onRenderModal, setOnRenderModal] = useState(false)


	return (
		<>
		<section className="bg-white-blue grid fit-large center-items medium-padding medium-margin">
			<h2 className="light-blue">Durma com tranquilidade sabendo que suas máquinas estão <b>seguras</b>!</h2>
			<div>
				<PrimaryButton
					onClick={() => {setOnRenderModal(true)}}
				>
					<span>Solicite uma demonstração <ArrowRightCircle color="#fff" size={25}/></span>
				</PrimaryButton>
			</div>
		</section>
		{ onRenderModal &&
			<CTAFormModal
				setOnRenderModal={setOnRenderModal}
			/>
		}
		</>

	)
}
