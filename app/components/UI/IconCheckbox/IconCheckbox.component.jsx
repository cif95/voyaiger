import styles from "./IconCheckbox.module.css";

export const IconCheckbox = ({
	value,
	onChange,
	label,
	icon
}) => {

	return(
		<div className={ value === true ? styles.iconCheckboxChecked : styles.iconCheckbox}>
			<label className={styles.checkboxContainer}>
				<input type="checkbox" checked={value} onChange={onChange}/>
				<div className={styles.checkmark}></div>
			</label>
			<p>{label}</p>
			{icon}
		</div>
	)
}