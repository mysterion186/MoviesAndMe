import React from 'react'
import {View,Button,TextInput,StyleSheet,FlatList,Text} from 'react-native'
import film from '../helpers/filmData'
import FilmItem from '../Components/filmItem'


class Search extends React.Component {
    render() {
        return ( 
        <View style={styles.main_container}>
            <TextInput placeholder="Titre du film" style={styles.textinput}/>
            <FlatList 
                data = {film} 
                keyExtractor = {(item) => item.id.toString()} // il faut tjs une key (équivalent pk dans django) cette méthode permet de donner une key par défaut (on remplace id par key en gros )
                renderItem= {({item}) => <FilmItem film={item}/>}
            />
            <Button title = "Rechercher" onPress={() => {}}/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        marginTop:100,
        flex:1,
    },
    textinput: {
        marginLeft : 15,
        marginRight : 15,
        height :50,
        borderColor : '#000000',
        borderWidth : 1,
        paddingLeft : 10
        }
    }
)

export default Search