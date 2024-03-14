import { ThemeProvider } from '@mui/material';
import { theme } from './shared/utils/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.page';
import SigninPage from './pages/Signin.page';
import RegisterPage from './pages/Register.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
