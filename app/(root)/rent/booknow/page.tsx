"use client"
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  // const { name, image, price } = router;
  return (
    <div>
      <h1 className='flex justify-center items-center mt-12 font-bold hover:text-amber-800 text-3xl'>Book Now</h1>
      {/* <h1>Booking: {name}</h1> */}
    </div>
  )
}

export default page
