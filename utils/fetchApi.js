import axios from "axios";
export const baseUrl = "https://free-nba.p.rapidapi.com/players"

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'bf017e85femsh3c97d252f3dedaep12c5a8jsn383d594f03c0',
        },
    })

    return data
}