//Libs
import { Plus } from 'lucide-react';

// Style CSS
import './HowItWorksCards.css';

//Components

export default function HowItWorksCardsQuery(props) {
	return (
	<>
		<section className="cards-query-container">
			<button
				onClick={props.onClick}
				className="cards-query big-x">
					<a
						className="cards-query-text"
					>
						{props.textButton}
						<Plus color="#185EF6" size={30} strokeWidth={3}/>
					</a>
			</button>
			{
				props.status &&
				<section className="cards-query-content">
					<p>{props.text}</p>
					<button
						className="cards-query-button-content">
							<a className="cards-query-text-content big light-blue pointer" href={props.href}>
								{props.textButtonContent}
							</a>
					</button>
				</section>
			}
		</section>
	</>
	)
}
