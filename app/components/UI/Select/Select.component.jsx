import "./Select.css";

export const Select = ({
	options,
	onChange,
	label
}) => {

	return(
		<div className="select-box">
			<label>{label}</label>
			<select onChange={onChange}>
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