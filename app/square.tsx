import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Square(){

    const [width, SetWidth] = useState(0)
    const [lenght, SetLenght] = useState(0)
    const [area, SetArea] = useState(0)
    const router = useRouter()

    function calSquare(){
        let result = width * lenght
        SetArea(result)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> PlaceHolder Page </Text>
            <Button 
                title="Button that brings u back to the first page" 
                onPress={() => router.navigate('/App')}
            />
            
            <Text> {width} x {lenght} = {area}</Text>

        <Text style={styles.MainTitle}> |=------------------------------------------=|</Text>
            <TextInput 
                value={width.toString()}
                onChangeText={(w) => SetWidth(Number(w))}
                style={styles.TextInput} 
                placeholder="Input killer"
            />
            
            <TextInput
                value={lenght.toString()}
                onChangeText={(l) => SetLenght(Number(l))}
                style={styles.TextInput}
                placeholder="Input Goober"
            />

            <Button 
                title="Button to CLICK" 
                onPress={(calSquare)}
            />
            <Text style={styles.MainTitle}> |=------------------------------------------=|</Text>
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