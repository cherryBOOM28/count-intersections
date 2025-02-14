import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import BookingPage from "./pages/bookingPage/BookingPage"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App
