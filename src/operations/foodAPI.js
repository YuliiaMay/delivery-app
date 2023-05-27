import axios from 'axios';

// axios.defaults.baseURL = "https://yummly2.p.rapidapi.com/feeds/auto-complete";

// const options = {
//     method: 'GET',
//     url: 'https://yummly2.p.rapidapi.com/feeds/list',
//     params: {
//         limit: '24',
//         start: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'b90a1d671dmsh66b8fe75bcbce2bp199cfcjsn310bad19509f',
//         'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
//     }
// };

const options = {
  method: 'GET',
  url: 'https://burgers-hub.p.rapidapi.com/burgers',
  headers: {
    'X-RapidAPI-Key': 'b90a1d671dmsh66b8fe75bcbce2bp199cfcjsn310bad19509f',
    'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
  }
};



export const fetchFeedsList = async () => {
    try {
	    const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

