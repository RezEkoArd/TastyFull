import Link from "next/link"

import SearchBar from "./SearchBar/SearchBar"

const Navbar = () => {
  return (
    <div className="w-full  md:px-[5rem] sticky top-0 z-10  bg-color-accent flex flex-col md:flex-row md:justify-between justify-center gap-4 items-center text-white p-4">
        <Link href={"/"} className="text-white text-2xl font-medium">
          TASTYFULL
        </Link>
        <SearchBar />
    </div>
  )
}

export default Navbar