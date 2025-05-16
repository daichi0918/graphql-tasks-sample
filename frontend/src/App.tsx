import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';
import Main from './components/Main';
import NotFound from './components/NotFount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
