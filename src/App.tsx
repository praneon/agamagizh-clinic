import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import BookAppointment from './pages/BookAppointment';
import History from './pages/History';
import SpecialOffers from './pages/SpecialOffers';
import Space from './pages/elements/Space';
import Air from './pages/elements/Air';
import Fire from './pages/elements/Fire';
import Water from './pages/elements/Water';
import Earth from './pages/elements/Earth';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="book" element={<BookAppointment />} />
          <Route path="history" element={<History />} />
          <Route path="offers" element={<SpecialOffers />} />
          <Route path="shop" element={<Shop />} />
          <Route path="elements/space" element={<Space />} />
          <Route path="elements/air" element={<Air />} />
          <Route path="elements/fire" element={<Fire />} />
          <Route path="elements/water" element={<Water />} />
          <Route path="elements/earth" element={<Earth />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
