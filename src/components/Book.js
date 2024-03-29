import { useBookingContext } from '../providers/BookingProvider';

const Book = () => {
    const { setBookingInfo } = useBookingContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const msg = formData.get('msg');
        const copyEmail = formData.get('copyEmail') === 'on';
        const contactMethod = formData.get('contactMethod');
        setBookingInfo({ fullName, email, phone, msg, copyEmail, contactMethod });

        alert('Your booking has been confirmed!')
        e.target.reset();
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Book Now</legend>

                    <label htmlFor="fullName">Your Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                    <label htmlFor="msg">Your Message:</label>
                    <textarea name="msg" id="msg" required></textarea>
                    <div className="checks">
                        <input type="checkbox" id="copyEmail" name="copyEmail" />
                        <label htmlFor="copyEmail">Send copy to my email.</label>
                    </div>
                    <div className="checks">
                        <p>Preferred method of contact:</p>
                        <input type="radio" id="contactEmail" name="contactMethod" value="Email" required />
                        <label htmlFor="contactEmail">Email</label>
                        <input type="radio" id="contactTel" name="contactMethod" value="Phone call" />
                        <label htmlFor="contactTel">Phone call</label>
                        <input type="radio" id="contactText" name="contactMethod" value="Text message" />
                        <label htmlFor="contactText">Text message</label>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Book Now</button>
                </fieldset>
            </form>
        </main>
    );
}

export default Book;