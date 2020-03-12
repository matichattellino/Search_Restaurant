import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchAPI = async (searchTerm) => {
        try { 
        const response = await yelp.get("/search", {
            params: {
                limit: 50,
                term: searchTerm,
                location: "rosario"
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something is wrong");
        }
    };

    useEffect(() => {
        searchAPI("pasta");
    }, []);

    return [ searchAPI , results, errorMessage ];
}