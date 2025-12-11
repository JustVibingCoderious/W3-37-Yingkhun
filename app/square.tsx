import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Square(){

    const [width, SetWidth] = useState(0)
    const [lenght, SetLenght] = useState(0)
    const [area, SetArea] = useState(0)

    const router = useRouter()
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> Second Page </Text>
            <Button title="Button that brings u to the first page" onPress={() => router.navigate('/App')}/>
            <TextInput 
            style={styles.TextInput} 
            placeholder="Input killer"
            value={width.toString()}
            onChangeText={(w) => SetWidth(Number(w))}
            />
            <TextInput style={styles.TextInput} placeholder="Input Goober"/>
            <TextInput style={styles.TextInput} placeholder="Input lms theme"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgreen",
        justifyContent:"center",
        alignItems:"center",
        padding: 10,
        gap: 10

    },
    MainTitle:{
        fontSize:20,
        fontWeight: "700",
    },
    TextInput:{
        borderWidth: 1,
        width: "80%",
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 10
    }
})