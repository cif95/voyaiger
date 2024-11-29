'use client';

import { useState, useReducer } from 'react';
// Style
import "./FiltersSection.style.css";
// Helpers
import { ITINERARY_FILTERS_CONFIG } from './FiltersSection.helpers';
// Motion
import { motion } from "motion/react";
// Components
import { Select } from 'components/UI/Select/Select.component';
import { IconCheckbox } from 'components/UI/IconCheckbox/IconCheckbox.component';


const initialState = {
	natureFilter: false,
	mountainsFilter: false,
	artAndCultureFilter: false,
	beachFilter: false
};

const filterReducer = (state, action) => {
	switch (action.type) {

	case "TOGGLE_FILTER":
		const updatedState = {...state};
		updatedState[action.filter] = !updatedState[action.filter]
		return updatedState;
	default:
		return state;
	}
};

export const FiltersSection = () => {

	const [selectedPeriod, setSelectedPeriod] = useState("");
	const [selectedPeopleCount, setSelectedPeopleCount] = useState("");
	const [selectedContinent, setSelectedContinent] = useState("");

	const [typeFilters, dispatch] = useReducer(filterReducer, initialState);

	const onToggleTypeFilterHandler = (filterKey) => {
		dispatch({ type: "TOGGLE_FILTER", filter: filterKey });
	};

	const { 
		periodFilterConfigs,
		peopleCountFilterConfigs,
		continentFilterConfigs,
		typeFilterConfigs
	} = ITINERARY_FILTERS_CONFIG;

	console.log({typeFilters});
	

	return(
		<section className='filters-section column'>

			<motion.h2
				initial={{ transform: "translateX(-80px)" }}
				whileInView={{ transform: "translateX(0px)" }}
				viewport={{ once: true }}
				transition={{ type: "spring" }}
			>
				Let&apos;s Start!
			</motion.h2>

			<div className='select-inputs-wrapper row'>
				<Select
					value={selectedPeriod}
					options={periodFilterConfigs}
					onChange={(e) => setSelectedPeriod(e?.target?.value)}
					label={"Period"}
				/>

				<Select
					value={selectedContinent}
					options={continentFilterConfigs}
					onChange={(e) => setSelectedContinent(e?.target?.value)}
					label={"Continent"}
				/>

				<Select
					value={selectedPeopleCount}
					options={peopleCountFilterConfigs}
					onChange={(e) => setSelectedPeopleCount(e?.target?.value)}
					label={"How Many"}
				/>
			</div>

			<div className='column'>

				<h3>Tell me what you like most..</h3>

				<div className='row'>
					{typeFilterConfigs?.map( type => (
						<IconCheckbox
							key={type?.label}	
							label={type?.label}
							icon={type?.icon}			
							value={typeFilters[type?.value]}
							onChange={() => onToggleTypeFilterHandler(type?.value)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}