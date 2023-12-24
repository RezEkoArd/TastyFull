import Navbar from "@/app/components/Navbar/Navbar";
import { getRestaurantResponseSearch } from "@/app/libs/api";
import Card from "@/app/components/CardRestaurant/page";


const Page = async ({params}) => {
  const {keyword} = params; 
   //! untuk mendecode dari pencarian one%20piece menjadi one piece
  const decodeKeyword = decodeURI(keyword);
  
  const searchRestaurant = await getRestaurantResponseSearch(`${keyword}`)
  return (
    <>
      
      <section>
        <div className='w-full min-h-[100vh] px-5 bg-color-secondary'>
        <Navbar />
        <div className='w-full  flex flex-col gap-5 justify-start font-semibold text-xl m-5 '>
            <p>Pencarian ... {decodeKeyword}</p>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-col-2 md:gap-4 gap-3 p-4 justify-center items-center" id="first-section">
            {/* Card Restaurant */}
          <Card resp={searchRestaurant.restaurants}/>
        </div>
        </div>
      </section>
   
    </>
  )
}

export default Page;
