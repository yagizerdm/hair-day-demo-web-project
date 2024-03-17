import React from 'react';
import { useBookingContext } from '../providers/BookingProvider';

const Menu = () => {
    const { bookingInfo } = useBookingContext(); // Call the hook to get the context value

    return (
        <main>
            <fieldset>
                <legend>Your Booking</legend>

                {
                    '' === bookingInfo.fullName ?
                        <p>You don't have any bookings yet.</p>
                        :
                        <>
                            <p>Your full name: {bookingInfo.fullName}</p>
                            <p>Your email: {bookingInfo.email}</p>
                            <p>Your phone number: {bookingInfo.phone}</p>
                            <p>Your message: {bookingInfo.msg}</p>
                            {
                                bookingInfo.copyEmail ?
                                    <p>You requested to recieve an email of your booking.</p>
                                    :
                                    <p>You didn't request to recieve and email of your booking.</p>
                            }
                            <p>Your preferred method of contact: {bookingInfo.contactMethod}</p>
                        </>
                }
            </fieldset>
        </main>
    );
}

export default Menu;
