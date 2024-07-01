import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AddNew from './pages/AddNew/AddNew';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-new' element={<AddNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
