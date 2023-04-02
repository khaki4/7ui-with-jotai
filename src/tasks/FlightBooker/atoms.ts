import {atom} from "jotai";

export enum FlightOptionType {
	oneWayFlight = 'one-way flight',
	returnFlight = 'return flight'
}

export const flightOptionAtom = atom<FlightOptionType>(FlightOptionType.oneWayFlight)

type ParsedDateType = Date | null
type DateAtomType = {
	date: ParsedDateType
	str: string
}

function createDateAtom() {
	const INIT_DATE = omitUselessDateInfo(new Date())
	const baseDateAtom = atom<DateAtomType>({
		date: INIT_DATE,
		str: formatDate(INIT_DATE)
	})

	const dateAtom = atom(
		get => get(baseDateAtom),
		(_, set, newDateStr: string) => {
			const date = parseDate(newDateStr)
			set(baseDateAtom, {
				date,
				str: date ? formatDate(date) : newDateStr
			});
		}
	)
	return dateAtom
}


export const startDateAtom = createDateAtom()
export const returnDateAtom = createDateAtom()

export const bookAtom = atom(
	get => {
		const flightOption = get(flightOptionAtom)
		const startDate = get(startDateAtom).date
		const returnDate = get(returnDateAtom).date

		switch (flightOption) {
			case FlightOptionType.oneWayFlight:
				return startDate !== null
			case FlightOptionType.returnFlight:
				if (startDate === null || returnDate === null) {
					return false
				}
				return startDate <= returnDate
			default:
				return false
		}
	},
	get => {
		const flightOption = get(flightOptionAtom)
		const startDate = get(startDateAtom).date
		const returnDate = get(returnDateAtom).date
		
		switch (flightOption) {
			case FlightOptionType.oneWayFlight:
				if (startDate === null) return false
				return window.alert(`You have booked a one-way flight on ${formatDate(startDate)}`)
			case FlightOptionType.returnFlight:
				if (startDate === null || returnDate === null) return false
				return window.alert(
					`You have booked a return flight from ${formatDate(
						startDate
					)} to ${formatDate(returnDate)}`
				);
			default:
				return false
		}
	}
)

function formatDate(d: Date) {
	return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}

function parseDate(dateStr: string): ParsedDateType {
	if (!/^(\d+)\/(\d+)\/(\d+)$/.test(dateStr)) {
		return null; // invalid format
	}
	const d = new Date(dateStr);
	if (Number.isNaN(+d)) {
		return null; // invalid date
	}

	return omitUselessDateInfo(d);
}

function omitUselessDateInfo(d: Date) {
	const date = new Date(+d)
	date.setHours(0)
	date.setMinutes(0)
	date.setSeconds(0)
	date.setMilliseconds(0)
	return date
}
