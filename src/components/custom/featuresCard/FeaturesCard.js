//Libs

// Style CSS
import "./FeaturesCard.css"

//Components

export default function FeaturesCard({image, text, title}) {

	return (
		<>
			<div className="feature-content-card">
				<div className="feature-text-card">
					<img className="feature-img-card" src={image}/>
					<div className="feature-content-text">
						<h2 className="feature-title">{title}</h2>
						<p className="feature-text">{text}</p>
					</div>
				</div>
			</div>
		</>
	)
}
