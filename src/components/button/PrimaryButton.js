
export default function PrimaryButton(props) {
	return(
		<button className="primary-button" onClick={props.onClick}>
			{props.children}
		</button>
	)
}
