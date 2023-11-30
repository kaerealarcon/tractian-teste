//Libs

// Style CSS
import "./FeedbackCard.css"

//Components

export default function FeedbackCard({image, name, role, company, feedback}) {

	return (
		<div className="feedback-box grid center-items">
			<div className="feedback-container grid-columns large-gap">
				<img className="feedback-img" src={image}/>
				<div className="feedback-profile">
					<div className="feedback-profile-box">
						<h1 className="black big-x none-margin-top none-margin-bottom">{name}</h1>
						<p className="black small none-margin-top none-margin-bottom">{role}</p>
						<p className="small grey none-margin-top none-margin-bottom">{company}</p>
					</div>
					<div>
						<p className="black"><i>"{feedback}"</i></p>
					</div>
				</div>
			</div>
		</div>
	)
}
