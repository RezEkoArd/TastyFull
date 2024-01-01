import DetailRestaurant from '@/app/components/Detail/DetailRestaurant';
import { getRestaurantResponse } from '@/app/libs/api';
import NotFound from "@/app/not-found";


const page = async ({params: {id}}) => {
  let data = await getRestaurantResponse(`detail/${id}`);
  data = data.restaurant;  

  return (
    <>
      { data ?  
      <DetailRestaurant data={data}/>
      :
      <NotFound/>
      }
    </>
  )
}

export default page