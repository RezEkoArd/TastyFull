import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import RestaurantList from "./components/RestaurantList"
import { getRestaurantResponse } from './libs/api'


const Home = async () => {
  let RestaurantData = await getRestaurantResponse("/list");
   RestaurantData = {
    data: RestaurantData.restaurants
  }

  return (
    <main className="w-full flex flex-col justify-center items-center ">
      <Hero/>
      {/* Section List */}
      <div className="w-full  bg-color-secondary relative ">
        <Navbar/>
          <RestaurantList api={RestaurantData}/>
        <Footer/>
      </div>
    </main>
    
  )
}

export default Home;