import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {

	return (
		<footer className={styles.footer}>
			<p className="text-label">
				Made with &#128420; by <a href="https://github.com/cif95" target="_blank" rel="noopener noreferrer">Viviana Cifarelli</a>
			</p>
		</footer>
	)
}