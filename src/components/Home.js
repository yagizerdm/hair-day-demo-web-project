const Home = () => {
    return (
        <main>
            <section>
                <article>
                    <div className="card outer-card">
                        <div className="card-bg-image"
                            style={{ backgroundImage: "url('https://salondesignandbuild.com/wp-content/uploads/2020/02/shutterstock_7560505121-scaled.jpg')" }}>
                        </div>
                        <div className="card-img-overlay top-card">
                            <h1>30% Off This Weekend</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className="row">
                <article className="col-12 col-lg-4">
                    <div className="card outer-card">
                        <div className="card">
                            <img src="https://themetinlondon.co.uk/wp-content/uploads/2020/10/aeac8cc192c8419dcc283aa330bdaa5d.jpg" className="card-img sub-card-img" alt="..." />
                            <div className="card-img-overlay sub-card">
                                <div className="flex-between">
                                    <div className="card-text-content">
                                        <p className="card-title">Haircuts and Styling</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-arrow-up-right"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-hover">
                                    <span className="arrow-icon">&rarr;</span>
                                    <span className="btn-text">Read More</span>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Haircuts and Styling</h2>
                            <p className="card-text">Indulge in a transformative experience as our skilled stylists at Hair Day craft personalized looks tailored to your unique preferences and lifestyle.</p>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-lg-4">
                    <div className="card outer-card">
                        <div className="card">
                            <img src="https://www.wedoact.com/static/e6b6ba53b50d74a2fac30dbd167d114d/42837/Tittle%20page_LEAVE_IN_desktop_1.jpg" className="card-img sub-card-img" alt="..." />
                            <div className="card-img-overlay sub-card">
                                <div className="flex-between">
                                    <div className="card-text-content">
                                        <p className="card-title">Retail Products</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-arrow-up-right"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-hover">
                                    <span className="arrow-icon">&rarr;</span>
                                    <span className="btn-text">Read More</span>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Retail Products</h2>
                            <p className="card-text">Discover our curated collection of premium hair care products designed to nourish, style, and maintain your hair's health and beauty.</p>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-lg-4">
                    <div className="card outer-card">
                        <div className="card">
                            <img src="https://www.bookinglayer.com/storage/app/media/blog/online-booking-system-features-medium.jpg" className="card-img sub-card-img" alt="..." />
                            <div className="card-img-overlay sub-card">
                                <div className="flex-between">
                                    <div className="card-text-content">
                                        <p className="card-title">Online Booking</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-arrow-up-right"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-hover">
                                    <span className="arrow-icon">&rarr;</span>
                                    <span className="btn-text">Read More</span>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Online Booking</h2>
                            <p className="card-text">Book your next appointment with ease from the comfort of your home or on the go through our convenient online booking platform.</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Home;