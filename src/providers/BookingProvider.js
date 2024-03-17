import React from 'react';

const BookingContext = React.createContext()

const initialBookingInfo = {
    fullName: '',
    email: '',
    phone: '',
    msg: '',
    copyEmail: false,
    contactMethod: '',
}

const BookingProvider = ({children}) => {
    const [bookingInfo, setBookingInfo] = React.useState(initialBookingInfo);

    return (
        <BookingContext.Provider value={{bookingInfo, setBookingInfo}}>
            {children}
        </BookingContext.Provider>
    );
}

export const useBookingContext = () => React.useContext(BookingContext);
export default BookingProvider;