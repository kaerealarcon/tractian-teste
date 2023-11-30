//Libs
import { ArrowRight } from 'lucide-react';

// Style CSS
import './HowItWorksCards.css';

//Components

export default function HowItWorksCards(props) {
	return (
	<>
		<section className="cards-container" >
			<button
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
				className="cards-button big-xx">
					<a
						href={props.href}
						className={props.hover ? "cards-button-text light-blue" : "cards-button-text light-grey"}
					>
						{props.textButton}
						{ props.hover === false ?
							<ArrowRight color="#b2b2b2" size={30}/>
							:
							<ArrowRight color="#185EF6" size={30}/>
						}
					</a>
			</button>
				<p
					className="cards-text"
				>
					{props.text}
				</p>
		</section>
	</>
	)
}
