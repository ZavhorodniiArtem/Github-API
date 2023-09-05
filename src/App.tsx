import "./App.css"
import { Route, Routes } from "react-router-dom"
import NotFound from "./view/404/NotFound"
import Dashboard from "./view/dashboard/Dashboard"
import Contacts from "./view/contacts/Contacts"
import Navigation from "./components/navigation/Navigation"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
