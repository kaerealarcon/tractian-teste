//Libs
import {
	ArrowRightCircle,
	Bomb,
	Car,
	Cog,
	Factory,
	FlaskConical,
	Layers,
	ShoppingBag,
	Tag,
	Utensils } from "lucide-react"
import { useState } from "react"

//Components
import PrimaryButton from "../components/button/PrimaryButton"
import SecondaryButton from "../components/button/SecondaryButton"
import CTAFormModal from "../components/custom/cta/CTAFormModal"

export default function OperatingMarket() {
	const [onRenderModal, setOnRenderModal] = useState(false)

	return (
		<>
			<header className="grid center-text medium-margin-top">
				<h1 className="light-blue">Para <b>TODAS</b> indústrias de <b>TODOS</b> os setores</h1>
			</header>
			<main className="slider medium-margin-bottom">
				<section className="operating-buttons-box">
					<SecondaryButton>
						<a href="https://tractian.com/industria/automobilistica">
							<Car color="#185EF6" size={25}/>
							Automobilistico
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/alimenticia">
							<Utensils color="#185EF6" size={25}/>
							Alimentício e bebidas
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/bens-de-consumo">
							<Tag color="#185EF6" size={25}/>
							Bens de consumo
						</a>
					</SecondaryButton>

					<SecondaryButton>
						<a href="https://tractian.com/industria/embalagens-plastico">
							<ShoppingBag color="#185EF6" size={25}/>
							Embalagens e plástico
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/engenharia-clinica">
							<FlaskConical color="#185EF6" size={25}/>
							Quimica e farmacêutica
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/facilities">
							<Layers color="#185EF6" size={25}/>
							Falicities
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/mineracao-fundicao-usinagem">
							<Bomb color="#185EF6" size={25}/>
							Mineração e fundição
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/usinas-e-agricola">
							<Factory color="#185EF6" size={25}/>
							Usinas e agrícola
						</a>
					</SecondaryButton>
					<SecondaryButton>
						<a href="https://tractian.com/industria/outras">
							<Cog color="#185EF6" size={25}/>
							Outras
						</a>
					</SecondaryButton>
				</section >
			</main>

			<div className="grid center-items medium-margin-bottom">
				<PrimaryButton
					onClick={() => {setOnRenderModal(true)}}
				>
					<span>Demonstração <ArrowRightCircle color="#fff" size={25}/></span>
				</PrimaryButton>
			</div>
			{ onRenderModal &&
				<CTAFormModal
					setOnRenderModal={setOnRenderModal}
				/>
			}
		</>

	)
}
