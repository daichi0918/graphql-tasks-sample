import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import NotFound from './components/NotFount';
import { GuestRoute, PrivateRoute } from './AuthRoute';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/signin"
              element={<GuestRoute children={<SignIn />} />}
            />
            <Route
              path="/signup"
              element={<GuestRoute children={<SignUp />} />}
            />
            <Route path="/" element={<PrivateRoute children={<Main />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
