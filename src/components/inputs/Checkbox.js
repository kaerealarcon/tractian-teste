export default function CheckboxInput(props) {
	return (
		<label
			className = {props.labelClass || "checkbox-radio-types"}
		>
			<input
				type           = "checkbox"
				name           = {props.name}
				className      = {props.className}
				onChange       = {props.onChange && (e => props.onChange(e))}
				onClick        = {props.onClick}
				value          = {props.value}
				disabled       = {props.disabled}
				checked        = {props.checked}
			/>
			{props.labelContent}
		</label>
	)
}
