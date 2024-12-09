import styles from "./Select.module.css";

export const Select = ({
	options,
	onChange,
	label,
	value
}) => {

	return(
		<div className={styles.selectBox}>
			<label className="text-label">{label}</label>
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