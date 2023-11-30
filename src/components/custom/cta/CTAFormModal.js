//Libs
import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";

//Assets

//Components
import PrimaryButton from "../../button/PrimaryButton";
import CheckboxInput from "../../inputs/Checkbox";
import SelectInput from "../../inputs/SelectInput";
import TextInput from "../../inputs/TextInput";
import Modal from "../modal/Modal";

export default function CTAFormModal({setOnRenderModal}) {

	// Example of how to work with data and request with API's

	const roles = [
		"Analista",
		"Auxiliar",
		"Coordenador",
		"Diretor",
		"Especialista",
		"Operador",
		"Estagiário",
		"Gerente"
	]

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [role, setRole] = useState(null)
	const [energy, setEnergy] = useState(false)
	const [vibration, setVibration] = useState(false)
	const [software, setSoftware] = useState(false)

	async function handlerAddNewContact() {
		try {
			const data = {
				name,
				email,
				phone,
				role,
				functionalities: {
					energy,
					vibration,
					software
				}
			}
			const requestOptions= {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			}
			fetch("API route here", requestOptions)
				.then(() => setOnRenderModal(false))
		}
		catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Modal closeModal={() => setOnRenderModal(false)}>
				<div className="width-modal-CTA">
					<div className="grid center-items">
						<h1 className="light-blue">Agende uma demonstração!</h1>
					</div>
					<form className="grid medium-gap" onSubmit={(event => event.preventDefault())}>
						<TextInput
							value={name}
							name="name"
							labelContent={<span className="tiny-x light-blue"><b>Nome completo</b></span>}
							onChange={(event) => setName(event.target.value)}
							placeholder="Escreva seu nome completo"
						/>
						<TextInput
							value={email}
							labelContent={<span className="tiny-x light-blue"><b>E-mail profissional</b></span>}
							onChange={(event) => setEmail(event.target.value)}
							placeholder="Escreva seu e-mail corporativo"
						/>
						<div className="grid fill-normal medium-gap">
							<TextInput
								value={phone}
								labelContent={<span className="tiny-x light-blue"><b>Telefone</b></span>}
								onChange={(event) => setPhone(event.target.value)}
								placeholder="(DDD) 00000-0000"
							/>
							<SelectInput
								value={role}
								labelContent={<span className="tiny-x light-blue"><b>Cargo</b></span>}
								onChange={(event) => setRole(event.target.value)}
							>
								<option value={null} selected disabled>Selecione seu cargo</option>

								{
									roles.map((role, index) => {
										return(
											<option value={index}>{role}</option>
										)
									})
								}
							</SelectInput>
						</div>
						<div className="grid center-items">
							<p className="grey">O que mais te interessou nas nossas soluções?</p>
						</div>
						<div className="grid fit-normal center-items">
							<CheckboxInput
								value={vibration}
								labelContent={<span>Sensor de vibração</span>}
								onChange={() => setVibration(!vibration)}
							/>
							<CheckboxInput
								value={energy}
								labelContent={<span>Sensor de energia</span>}
								onChange={() => setEnergy(!energy)}
							/>
							<CheckboxInput
								value={software}
								labelContent={<span>Software de gestão</span>}
								onChange={() => setSoftware(!software)}
							/>
						</div>
						<div className="grid center-items">
							<PrimaryButton
								onClick={() => handlerAddNewContact()}
							>
								<span>Solicite uma demonstração <ArrowRightCircle color="#fff" size={25}/></span>
							</PrimaryButton>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}
