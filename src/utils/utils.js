import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const authNhanhVn = async (url, conditions) => {
    try {
        const formData = new FormData();
        formData.append('version', '2.0');
        formData.append('appId', '72866');
        formData.append('businessId', '125144');
        formData.append('accessToken', process.env.NHANH_ACCESS_TOKEN);
        formData.append('data', conditions);
        const response = await axios.post(url, formData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export { authNhanhVn };