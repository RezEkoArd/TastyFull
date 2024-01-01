

export const getRestaurantResponse = async (resouce) => {
    const response = await 
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resouce}`,{ next: { revalidate: 1 } })
    
    let restaurant = response.json();
    
    return restaurant;

}

export const getRestaurantResponseSearch = async (query) => {
    const response = await 
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/search?q=${query}`)

    
    let restaurant = response.json();
    
    return restaurant;
}

export const postRestaurantReview = async (data) => {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/review`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      return result;
      
}
