import axios from "axios";

const options = {
  method: "GET",
  url: "https://newsdata.io/api/1/news",
  params: {
    apikey: "pub_2203039bbbc1938099f6862f6a2b866b2065a",
    language: "en",
  },
};

export const newsAPI = {
  async getNews() {
    try {
    return axios.request(options)
    } catch (error) {
      console.error(error);
    }
  },
};
