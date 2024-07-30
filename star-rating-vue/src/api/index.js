import axios from 'axios'

const url = 'https://react-http-14ccb-default-rtdb.firebaseio.com/stars-vue.json'

export default {
    async saveStars(data) {
        try {
            await axios.put(
                `${url}`,
                data);
        } catch (error) {
            throw new Error(error.message || 'Failed to save!');
        }
    },

    async loadStars() {
        try {
            return await axios.get(`${url}`);
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch!');
        }
    },

}