import React from 'react'
import { View, Text, Pressable} from 'react-native'
import styles from "./Create_ToDo_Styles";


const create_ToDo = (props) => {
    
    

    return (
        <View style={styles.item_container}>
            <Pressable delayLongPress={1000} onLongPress={()=>props.deleteItem(props.list_item.id)}>
                <Text style={styles.todo_item}>{props.list_item.text} </Text>
            </Pressable>
            
        </View>
    )
}

export default create_ToDo
