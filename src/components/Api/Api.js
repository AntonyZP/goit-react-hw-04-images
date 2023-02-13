import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = '31704794-60eeb3a6ac83e8d6bcf335c57';

const APIfetchImages = async(
    searchQuery, 
    page = 1
    ) => {
    const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
}

export default APIfetchImages;


// const APIfetchImages = {
//     query:'',
//     page: 1
// }
// getSuggestedQuery(query) {
//     this.query = query;
// }

// increasePAge() {
//     this.page+1
// }

// resetPage(){
//     this.page = 1
// }

// asyncgetData(){
//     const response = await axios.get(`/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//     return response.data
// }