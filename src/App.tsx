import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import CodeEditorView from './views/CodeEditorView';

function App() {
  return (
    <>
      <Header />
      <div className='app-container container'>
        <SideBar />
        <Routes>
          <Route path='/' element={<CodeEditorView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
