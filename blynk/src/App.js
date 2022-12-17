import { QueryClient, QueryClientProvider } from "react-query"
// import TestUseQuery from "./Components/UseQuery"
import BlynkSwitch from "./Components/blynkSwitch"
import "./App.css"
// import Test from "./Components/Try"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='Main__section'>
        {/* <Test /> */}
        {/* <TestUseQuery /> */}
        <BlynkSwitch />
      </div>
    </QueryClientProvider>
  )
}

export default App
