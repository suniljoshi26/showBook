import axios from "axios";

export const getShow = async () => {
  const response = await axios.get(
    "https://api.tvmaze.com/search/shows?q=game"
  );
  return response.data.map((d: any) => d.show);
};
