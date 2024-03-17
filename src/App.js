import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookingProvider from "./providers/BookingProvider";

function App() {
  return (
    <BookingProvider>
      <Header />
      <Nav />
      <Footer />
    </BookingProvider>
  );
}

export default App;
