import "./IconCheckbox.css";

export const IconCheckbox = ({
	value,
	onChange,
	label,
	icon
}) => {

	return(
		<div className="icon-checkbox">
			<label className="checkbox-container label">
				<input type="checkbox" checked={value} onChange={onChange}/>
				<div className="checkmark"></div>
			</label>
			<p>{label}</p>
			{icon}
		</div>
	)
}