export default function SelectInput(props) {
	return (
		<label className = {props.labelClass}>
			{props.labelContent}
			<select
				name      = {props.name}
				className = {props.className}
				onChange  = {props.onChange && (e => props.onChange(e))}
				value     = {props.value}
				disabled  = {props.disabled}
				placeholder = {props.placeholder}
			>
				{props.children}
			</select>
		</label>
	)
}
