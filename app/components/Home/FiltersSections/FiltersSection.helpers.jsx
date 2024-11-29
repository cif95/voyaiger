// Assets
import NatureSVG from "assets/icons/nature.svg";
import BeachSVG from "assets/icons/beach.svg";
import CultureSVG from "assets/icons/culture.svg";
import MountainsSVG from "assets/icons/mountains.svg";


const PERIOD_FILTERS = [
	{
		value: "weekend",
		label: "Weekend"
	},
	{
		value: "oneWeek",
		label: "One Week"
	},
	{
		value: "twoWeeks",
		label: "twoWeeks"
	},
];

const CONTINENT_FILTERS = [
	{
		value: "europe",
		label: "Europe"
	},
	{
		value: "africa",
		label: "Africa"
	},
	{
		value: "asia",
		label: "Asia"
	},
	{
		value: "oceania",
		label: "Oceania"
	},
	{
		value: "northAmerica",
		label: "North America"
	},
	{
		value: "centralAmerica",
		label: "Central America"
	}
]

const PEOPLE_COUNT_FILTERS = [
	{
		value: "one",
		label: "Solo"
	},
	{
		value: "two",
		label: "Couple"
	},
	{
		value: "smallGroup",
		label: "Small group"
	},
	{
		value: "group",
		label: "Group"
	}
]

const TYPE_FILTERS = [
	{
		label: "Nature",
		value: "natureFilter",
		icon: <NatureSVG />
	},
	{
		label: "Mountains",
		value: "mountainsFilter",
		icon: <MountainsSVG />
	},
	{
		label: "Art & Culture",
		value: "artAndCultureFilter",
		icon: <CultureSVG />,
	},
	{
		label: "Beach",
		value: "beachFilter",
		icon: <BeachSVG />
	}
]

export const ITINERARY_FILTERS_CONFIG = {
	"periodFilterConfigs": PERIOD_FILTERS,
	"peopleCountFilterConfigs": PEOPLE_COUNT_FILTERS,
	"continentFilterConfigs": CONTINENT_FILTERS,
	"typeFilterConfigs": TYPE_FILTERS
}