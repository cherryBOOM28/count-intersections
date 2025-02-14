import React, { useState, useEffect } from 'react'
import styles from './BookingPage.module.css'
import DateRangePickerComponent from '../../components/dateRangePicker/DateRangePickerComponent.jsx'
import Filters from '../../components/filters/Filters.jsx'
import RoomList from '../../components/roomList/RoomList.jsx'
import roomsData from '../../data/rooms.js'

const BookingPage = () => {
    const [selectedDates, setSelectedDates] = useState(null)
    const [filters, setFilters] = useState({ bedrooms: "", price: "", view: "" })

    const [rooms, setRooms] = useState(() => {
        const savedRooms = localStorage.getItem("rooms");
        return savedRooms ? JSON.parse(savedRooms) : roomsData;
    })

    useEffect(() => {
        localStorage.setItem("rooms", JSON.stringify(rooms));
    }, [rooms]);

    const handleBookRoom = (roomId) => {
        if (!selectedDates) return;
    
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === roomId
              ? {
                  ...room,
                  bookings: [...room.bookings, selectedDates],
                }
              : room
          )
        );
    
        alert("Номер забронирован!");
    }

    return (
        <div className={styles.container}>
            <h1>Страница бронирования</h1>

            <div className={styles.date__container}>

                <DateRangePickerComponent onSelectDates={setSelectedDates} />
                <Filters onFilterChange={setFilters}/>
            </div>

            {selectedDates && (
                <p>
                    Выбранные даты: 
                        {selectedDates.startDate.toLocaleDateString()} -{" "}
                        {selectedDates.endDate.toLocaleDateString()}
                </p>
            )}
            
            <RoomList filters={filters} selectedDates={selectedDates} onBookRoom={handleBookRoom} />
            
           

            {/* <p>Фильтры: {JSON.stringify(filters)}</p> */}
        </div>
    );
};

export default BookingPage;