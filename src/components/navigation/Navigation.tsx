import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="bg-[#00cffa] p-6">
      <p className="text-zinc-950 font-bold">Navigation</p>
      <div style={{ borderTop: "1px solid black" }} className="mb-5" />

      <Link to="/" className="mr-4">
        Dashboard
      </Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  )
}

export default Navigation
