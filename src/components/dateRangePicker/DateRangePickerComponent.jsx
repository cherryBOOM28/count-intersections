import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./dateRangePicker.css";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";


const DateRangePickerComponent = ({ onSelectDates }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])

    const selectDate = (ranges) => {
        setState([ranges.selection])

        onSelectDates({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
        })
    }

    return (
        <div>
            {/* <p>Выберите даты</p> */}
            <DateRangePicker 
                ranges={state}
                onChange={selectDate}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
            />
        </div>
    )
}

export default DateRangePickerComponent