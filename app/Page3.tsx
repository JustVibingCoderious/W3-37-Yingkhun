import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Calculatist(){

    const R = 2;
    const PI = 3.14159;
    const [Number1, SetNumber1] = useState(0)
    const [Number2, SetNumber2] = useState(0)
    const [Number3, SetNumber3] = useState(0)
    const [Number4, SetNumber4] = useState(0)
    const router = useRouter()

    function Calculates(){
        let result = (2 * PI * (Number1 * Number1)) + (2 * PI * Number2 * Number3)
        SetNumber4(result)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> Surface Area of a Cylinder Calculater </Text>
            <Button 
                title="Button that brings u back to the first page" 
                onPress={() => router.navigate('/App')}
            />
            
            <Text>({R} x {PI} x ({Number1} x {Number1})) + ({R} x {PI} x {Number2} x {Number3})   </Text>
            <Text>||</Text>
            <Text>{Number4}</Text>

            <Text style={styles.MainTitle}> |=------------------------------------------=|</Text>
            <Text></Text>
            <TextInput 
                value={Number1.toString()}
                onChangeText={(N1) => SetNumber1(Number(N1))}
                style={styles.TextInput} 
                placeholder="the area of the two bases"
            />
            
            <Text></Text>
            <TextInput
                value={Number2.toString()}
                onChangeText={(N2) => SetNumber2(Number(N2))}
                style={styles.TextInput}
                placeholder="the areaof lateral surfaces"
            />

            <Text>  </Text>
            <TextInput
                value={Number3.toString()}
                onChangeText={(N3) => SetNumber3(Number(N3))}
                style={styles.TextInput}
                placeholder="the areaof lateral surfaces"
            />
            
            <Text>  </Text>
            <Button 
                title="Button that calculates" 
                onPress={(Calculates)}
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