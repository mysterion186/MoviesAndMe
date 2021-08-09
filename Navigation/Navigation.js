import {createAppContainer} from 'react-navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Components/Search'

const SearchStaackNavigator = createNativeStackNavigator({
    Search : { //On a nommé cette vue Search on aurait pu lui donner le nom qu'on veut c'est grâce à ça qu'on peut l'appeler ailleurs 
        screen :Search,
        navigationOptions : {
            title : 'Rechercher'
        }
    }
})

export default createAppContainer(SearchStaackNavigator)