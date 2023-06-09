import axios from 'axios';

axios.defaults.baseURL = "https://6464b2bf127ad0b8f8a57f71.mockapi.io";

export const fetchMenu = async () => {
    try {
	    const response = await axios.get("/items");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

