import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {


    const [term, setTerm] = useState("");
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <View style={{flex: 1}}>
            <SearchBar 
                       term={term} 
                       onTermChange={setTerm}  
                       onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList 
                          results={filterResultByPrice("$")} 
                          title="Cost Effective" 
                          
                />
                <ResultList results={filterResultByPrice("$$")} 
                            title="Bit Pricier" 
                            
                />
                <ResultList results={filterResultByPrice("$$$")} 
                            title="Big Spender" 
                        
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;