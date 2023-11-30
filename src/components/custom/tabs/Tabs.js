//Libs
import { useState } from "react"

// Style CSS
import "./Tabs.css"

//Components

export default function Tabs({ tabs, children }) {

	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<>
			<div className="tab-container medium-margin-top grid">
				{tabs.map((content, index) =>
					<button
						key={"tab" + index}
						className={activeIndex === index ? "button-tab big activated" : "button-tab big"}
						onClick={()=> setActiveIndex(index)}
					>
						{content}
					</button>
				)}
			</div>
			<div className="grid center-items">
				{children.map((children, index) => activeIndex === index && children)}
			</div>
		</>
	)
}
