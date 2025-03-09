

import { FeedBackAlert } from "./components/feedback-notifications/FeedBackAlert"
import { ThemeProvider } from "./context/theme/Theme.context"
import Test from "./pages/Test."


function App() {

  return (
    <ThemeProvider defaultTheme="light">
        <Test/>
        <FeedBackAlert/>
    </ThemeProvider>
  )
}

export default App
