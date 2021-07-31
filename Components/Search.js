import React from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native'


class Search extends React.Component {
    render() {
        return ( 
        <View style={{marginTop : 60}}>
            <TextInput placeholder="Titre du film" style={styles.textinput}/>
            <Button style = {{ height:50, backgroundColor : '#000000'}}title = "Rechercher" onPress={() => {}}/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
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