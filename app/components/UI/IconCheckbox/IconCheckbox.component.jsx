import "./IconCheckbox.css";

export const IconCheckbox = ({
	selectedValue,
	onChange,
	label,
	icon
}) => {

	return(
		<div className={selectedValue ? `checked icon-checkbox-container` : `icon-checkbox-container`}>
			<label>{label}</label>
			{icon}
			<input
				type="checkbox"
				value={selectedValue}
				onChange={onChange}
			/>
		</div>
	)
}