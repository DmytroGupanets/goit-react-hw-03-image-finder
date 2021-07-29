import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchPicturesApi = async ({
  searchQuery = "",
  currentPage = 1,
  pageSize = 12,
}) => {
  const response = await axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=22061138-96faef093f4ee88d8ff48fa2c&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);

  if (!response.length) return Promise.reject("No any matches found!");
  if (response.length) return response;
};

export default fetchPicturesApi;
