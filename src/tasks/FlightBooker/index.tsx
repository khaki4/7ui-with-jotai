import {useAtom, useAtomValue} from "jotai";
import {bookAtom, flightOptionAtom, FlightOptionType, returnDateAtom, startDateAtom} from "./atoms";

export function FlightBooker() {
	return (
		<div>
			<FlightOptionSelect/>
			<StartDateField/>
			<ReturnDateField/>
			<BookButton/>
		</div>
	)
}

function FlightOptionSelect() {
	const [flightOption, setFlightOption] = useAtom(flightOptionAtom)

	return (
		<div>
			<select
				value={flightOption}
				onChange={e => setFlightOption(e.target.value as FlightOptionType)}
			>
				<option value={FlightOptionType.oneWayFlight}>{FlightOptionType.oneWayFlight}</option>
				<option value={FlightOptionType.returnFlight}>{FlightOptionType.returnFlight}</option>
			</select>
		</div>
	)
}

function StartDateField() {
	const [date, setDate] = useAtom(startDateAtom)
	return (
		<div>
			<input
				style={{backgroundColor: date.date === null ? 'red' : 'inherit'}}
				value={date.str}
				onChange={e => setDate(e.target.value)}
			/>
		</div>
	)
}

function ReturnDateField() {
	const [date, setDate] = useAtom(returnDateAtom)
	const flightOption = useAtomValue(flightOptionAtom);
	const isDisabled = flightOption === FlightOptionType.oneWayFlight
	return (
		<div>
			<input
				disabled={isDisabled}
				style={{backgroundColor: date.date === null ? 'red' : 'inherit'}}
				value={date.str}
				onChange={e => setDate(e.target.value)}
			/>
		</div>
	)
}

function BookButton() {
	const [isValid, book] = useAtom(bookAtom)
	return <div>
		<button disabled={!isValid} onClick={book}>book</button>
	</div>
}
