export default function TextInput(props) {
	return (
		<label className = {props.labelClass}>
			{props.labelContent}
			<input
				type         = {props.type || "text"}
				name         = {props.name}
				className    = {props.class}
				onChange     = {props.onChange && (e => props.onChange(e))}
				value        = {props.value}
				placeholder  = {props.placeholder}
				disabled     = {props.disabled}
				maxLength    = {props.maxLength}
			/>
		</label>
	)
}
