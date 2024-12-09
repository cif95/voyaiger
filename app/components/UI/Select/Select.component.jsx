import "./Select.css";

export const Select = ({
	options,
	onChange,
	label,
	value
}) => {

	return(
		<div className="select-box">
			<label className="label">{label}</label>
			<select onChange={onChange} value={value}>
				{options.map((option) => {
					const { label, value } = option;
					return(
						<option key={label} value={value}>
							{label}
						</option>
					)
				})}
			</select>
		</div>
	)
}