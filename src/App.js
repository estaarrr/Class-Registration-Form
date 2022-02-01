import Header from "./components/Header"
import Form from "./components/Form"
import {ClassesProvider} from "./context/Context"


function App() {
  return (
    <ClassesProvider>
      <Header />
      <Form />
    </ClassesProvider>
  )
}

export default App;
