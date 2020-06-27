
import axios from 'axios';

const KEY = 'AIzaSyBPgekj30oSRrcF3oiczyqLXwURQjYIIEk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});