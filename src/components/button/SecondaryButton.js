
export default function SecondaryButton(props) {
	return(
		<button className="secondary-button" onClick={props.onClick}>
			{props.children}
		</button>
	)
}
