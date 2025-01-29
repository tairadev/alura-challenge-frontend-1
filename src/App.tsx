import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className="app-container container">
        <SideBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
