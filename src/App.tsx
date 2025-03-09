import { FeedBackAlert } from './components/feedback-notifications/FeedBackAlert';
import { ThemeProvider } from './context/theme/Theme.context';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <FeedBackAlert />
    </ThemeProvider>
  );
}

export default App;
