//Libs
import { Radio, Zap, LineChart } from 'lucide-react';

export default function SolutionsNav({setSolutionsDropdown}) {

	return(
		<section className="dropdown-container" onMouseLeave={() => {setSolutionsDropdown(false)}}>
			<section className="dropdown-title">
				<h4 className="grey big-x">Monitoramento Online</h4>
			</section>
			<section className="dropdown-container-button">
				<button className="dropdown-button light-blue">
					<a href='https://tractian.com/sensor-tractian' className="big "><Radio color="#185EF6" size={25}/>Sensores de Vibração</a>
				</button>
				<button className="dropdown-button light-blue">
					<a href='https://tractian.com/sensor-energy-trac' className="big"><Zap color="#185EF6" size={25}/>Sensores de Energia</a>
				</button>
				<button className="dropdown-button light-blue">
					<a href='https://tractian.com/supervisorio' className="big"><LineChart color="#185EF6" size={25}/>Sensores de Vibração</a>
				</button>
			</section>
		</section>
	)
}
