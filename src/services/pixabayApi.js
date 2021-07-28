import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchPicturesApi = ({
  searchQuery = "",
  currentPage = 1,
  pageSize = 12,
}) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=22061138-96faef093f4ee88d8ff48fa2c&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default fetchPicturesApi;
