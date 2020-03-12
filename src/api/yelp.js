import axios from 'axios';

export default  axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer AmCUYNtZy1ql0seK3G-TnIsb-q02Ev9x0QATkTNFW3hdWTPvQpUCydQXDRqjGkYy_JCjkUegbChQCWVwpDhanGeqqEVvcPXdNtqqJWxATyWOVkhq-o60Isj5T-tnXnYx"
    }
});

