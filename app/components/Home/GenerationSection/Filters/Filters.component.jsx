'use client';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { travelFiltersActions } from 'store/slices/travelFilters';
// Style
import styles from "./Filters.module.css";
// Helpers
import { ITINERARY_FILTERS_CONFIG } from './Filters.helpers';
// Motion
import { motion } from "motion/react";
// Components
import { Select } from 'components/UI/Select/Select.component';
import { IconCheckbox } from 'components/UI/IconCheckbox/IconCheckbox.component';


export const Filters = () => {

	const {
		focusActivities,
		peopleCount,
		continent,
		travelDuration
	} = useSelector((state) => state.travelFilters);

	const dispatch = useDispatch();

	const onUpdatePeopleCountFilter = (event) => {
		const selectedFilter = event?.target?.value;
		dispatch(travelFiltersActions.updatePeopleCountFilter(selectedFilter));
	}

	const onUpdateContinentFilter = (event) => {
		const selectedFilter = event?.target?.value;
		dispatch(travelFiltersActions.updateContinentFilter(selectedFilter));
	}

	const onUpdateTravelDurationFilter = (event) => {
		const selectedFilter = event?.target?.value;
		dispatch(travelFiltersActions.updateTravelDurationFilter(selectedFilter));
	}

	const onToggleTypeFilterHandler = (filterKey) => {
		dispatch(travelFiltersActions?.updateTravelActivitiesFilters(filterKey));
	};

	const { 
		periodFilterConfigs,
		peopleCountFilterConfigs,
		continentFilterConfigs,
		typeFilterConfigs
	} = ITINERARY_FILTERS_CONFIG;

	return(
		<section className={styles.section}>

			<div className='column'>
				<motion.h2
					initial={{ transform: "translateX(-80px)" }}
					whileInView={{ transform: "translateX(0px)" }}
					viewport={{ once: true }}
					transition={{ type: "spring", duration: 0.5 }}
				>
					Let&apos;s Start!
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, transform: 'translateY(50%)' }}
					whileInView={{ opacity: 1, transform: 'translateY(0%)'}}
					transition={{ duration: 0.5, type: 'spring', bounce: 0.25, delay: 0.5}}
					viewport={{ once: true }}
				>
					Set your preferences, and let the magic happen!
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1}}
				viewport={{ once: true }}
				className='column gap-l'
			>
				<div className={styles.selectInputsWrapper}>
					<Select
						value={travelDuration}
						options={periodFilterConfigs}
						onChange={onUpdateTravelDurationFilter}
						label={"Period"}
					/>
					<Select
						value={continent}
						options={continentFilterConfigs}
						onChange={onUpdateContinentFilter}
						label={"Continent"}
					/>
					<Select
						value={peopleCount}
						options={peopleCountFilterConfigs}
						onChange={onUpdatePeopleCountFilter}
						label={"How Many"}
					/>
				</div>
				<div className={styles.activitiesColumn}>
					<h3>Tell me what you like most..</h3>
					<div className={styles.checkboxInputsWrapper}>
						{typeFilterConfigs?.map( type => (
							<IconCheckbox
								key={type?.label}	
								label={type?.label}
								icon={type?.icon}			
								value={focusActivities[type?.value]}
								onChange={() => onToggleTypeFilterHandler(type?.value)}
							/>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	)
}