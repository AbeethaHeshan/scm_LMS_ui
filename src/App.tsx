import { ToastNotification } from './components/feedback-notifications/ToastNotification';
import { ThemeProvider } from './context/theme/Theme.context';
import './index.css';
import { MainRoutes } from './routes/main.routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <MainRoutes/>
      <ToastNotification />
    </ThemeProvider>
  );
}

export default App;
