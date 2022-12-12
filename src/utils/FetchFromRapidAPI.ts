import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet,id",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromRapidAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("failed");
  }
};
