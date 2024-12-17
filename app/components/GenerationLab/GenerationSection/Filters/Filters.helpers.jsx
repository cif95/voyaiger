// Assets
import NatureSVG from "assets/icons/nature.svg";
import BeachSVG from "assets/icons/beach.svg";
import CultureSVG from "assets/icons/culture.svg";
import MountainsSVG from "assets/icons/mountains.svg";
import NightlifeSVG from "assets/icons/nightlife.svg";

const PERIOD_FILTERS = [
	{
		value: "oneWeekend",
		label: "Weekend"
	},
	{
		value: "oneWeek",
		label: "One Week"
	},
	{
		value: "twoWeeks",
		label: "Two Weeks"
	},
	{
		value: "threeWeeks",
		label: "Three Weeks"
	},
	{
		value: "oneMonth",
		label: "One Month"
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
	},
	{
		value: "southAmerica",
		label: "South America"
	},
]

const PEOPLE_COUNT_FILTERS = [
	{
		value: "one",
		label: "Solo Traveler"
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
		value: "nature",
		icon: <NatureSVG />
	},
	{
		label: "Mountains",
		value: "mountains",
		icon: <MountainsSVG />
	},
	{
		label: "Culture",
		value: "artAndCulture",
		icon: <CultureSVG />,
	},
	{
		label: "Beach",
		value: "beach",
		icon: <BeachSVG />
	},
	{
		label: "Nightlife",
		value: "nightlife",
		icon: <NightlifeSVG />
	}
]

export const ITINERARY_FILTERS_CONFIG = {
	"periodFilterConfigs": PERIOD_FILTERS,
	"peopleCountFilterConfigs": PEOPLE_COUNT_FILTERS,
	"continentFilterConfigs": CONTINENT_FILTERS,
	"typeFilterConfigs": TYPE_FILTERS
}