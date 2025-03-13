import { ToastNotification } from './components/feedback-notifications/ToastNotification';
import { ThemeProvider } from './context/theme/Theme.context';
import Test from './pages/Test.';
import './index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Test />
      <ToastNotification />
    </ThemeProvider>
  );
}

export default App;
