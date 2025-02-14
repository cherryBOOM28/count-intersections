import React from 'react'
import rooms from '../../data/rooms'
import styles from './RoomList.module.css'

const RoomList = ({ filters, selectedDates, onBookRoom }) => {
    const filterRooms = (room) => {
        if(filters.bedrooms && room.bedrooms !== Number(filters.bedrooms)) return false
        if (filters.price && room.price > Number(filters.price)) return false;
        if (filters.view && room.view !== filters.view) return false;
        return true;
    }

    const checkAvailability = (room) => {
        if(!selectedDates) return true

        const { startDate, endDate } = selectedDates
        return !room.bookings.some(
            (booking) =>
                new Date(booking.startDate) < new Date(endDate) &&
                new Date(booking.endDate) > new Date(startDate)
        )
    }

    const filteredRooms = rooms.filter(filterRooms).filter(checkAvailability);



    return (
        <div className={styles.container}>
            <h3>Доступные номера</h3>
            {filteredRooms.length > 0 ? (
                <ul className={styles.cards}>
                {filteredRooms.map((room) => (
                    <li key={room.id}>
                        <h4>{room.name}</h4>
                        <p>Спален: {room.bedrooms}</p>
                        <p>Цена: ${room.price} / ночь</p>
                        <p>Вид: {room.view === "ocean" ? "Океан" : room.view === "mountains" ? "Горы" : "Город"}</p>
                        <button 
                            onClick={() => onBookRoom(room.id)} 
                            disabled={!selectedDates}
                            className={styles.bookButton}
                        >
                            Забронировать
                        </button>
                    </li>
                ))}
                </ul>
            ) : (
                <p>Нет доступных номеров.</p>
            )}
        </div>
    );
};

export default RoomList;