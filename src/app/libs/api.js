

export const getRestaurantResponse = async (resouce) => {
    const response = await 
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resouce}`)
    
    let restaurant = response.json();
    
    return restaurant;
    //  search?q=<query>
}

export const getRestaurantResponseSearch = async (query) => {
    const response = await 
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/search?q=${query}`)
    // https://restaurant-api.dicoding.dev/search?q=<query>
    
    let restaurant = response.json();
    
    return restaurant;
}


