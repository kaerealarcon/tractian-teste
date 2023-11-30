//Libs
import React, { useEffect, useState } from "react"

// Style CSS
import "./Slide.css"

//Components

export default function Slide({ children }) {

	const [activeIndex, setActiveIndex] = useState(0)
	const timeoutRef = React.useRef(null);
	const [delay, setDelay] = useState(3000);

	function resetTimeout() {
		if (timeoutRef.current) {
		  clearTimeout(timeoutRef.current);
		}
	}
	useEffect(() => {
		if(delay !== undefined) {
		resetTimeout();
		timeoutRef.current = setTimeout(
		  () =>
		  	setActiveIndex((prevIndex) =>
			  prevIndex === children.length - 1 ? 0 : prevIndex + 1
			),
		  delay
		);

		return () => {
		  resetTimeout();
		};
	}
	  }, [activeIndex, delay]);
	return (
		<>
			<div onMouseEnter={() => setDelay(3000)} onMouseLeave={() => setDelay(undefined)}  className="">
				{children.map((children, index) => activeIndex === index && children)}
			</div>
			<div className="grid center-items">
				<div className="slide-container">
					{children.map((_, index) =>
						<button
							key={"tab" + index}
							className={activeIndex === index ? "button-slide activated-slide" : "button-slide"}
							onClick={()=> setActiveIndex(index)}
						></button>
					)}
				</div>
			</div>
		</>
	)
}
