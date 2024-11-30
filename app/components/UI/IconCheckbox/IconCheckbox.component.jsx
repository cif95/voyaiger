import "./IconCheckbox.css";

export const IconCheckbox = ({
	value,
	onChange,
	label,
	icon
}) => {

	return(
		<div className={"icon-checkbox-container"}>
			<input
				type="checkbox"
				value={value}
				onChange={onChange}
			/>
			<label>{label}</label>
			{icon}
		</div>
	)
}