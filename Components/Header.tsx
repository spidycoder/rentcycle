import Link from "next/link"
import Image from "next/image"
import {logo} from "../public/images/index"
const Header = () => {
  return (
    <div className="flex flex-row justify-evenly mt-4 z-10 bg-transparent fixed top-0 left-0 w-full">
      <Link href="/" className="text-white text-lg hover:text-amber-800 font-semibold">Home</Link>
      <Link href="/rent" className="text-white text-lg hover:text-amber-800 font-semibold">Take-Rent</Link>
      <Image src={logo} alt="logo" height={44} width={44} className="border-2 rounded-md cursor-pointer"/>
      <Link href="/signin" className="text-white text-lg hover:text-amber-800 font-semibold">SignIn</Link>
      <Link href="/about" className="text-white text-lg hover:text-amber-800 font-semibold">About</Link>
    </div>
  )
}

export default Header
