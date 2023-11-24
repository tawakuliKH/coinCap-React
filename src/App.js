import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Coins from './components/Coins';
import CoinsDetails from './components/CoinsDetails';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/details/:id" element={<CoinsDetails />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
