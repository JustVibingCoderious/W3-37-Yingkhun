import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet} from "react-native";

export default function App(){

    const router = useRouter()
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> Home Page </Text>
            <Text style={styles.MainTitle}>|=---------------------------------------------=|</Text>
            <Button title="Button that brings u to the PlaceHolder page" onPress={() => router.navigate('/square')}/>
            <Text style={styles.MainTitle}>|=---------------------------------------------=|</Text>
            <Button title="Button that calculate Surface Area of a Cylinder" onPress={() => router.navigate('/Page3')}/>
            <Text style={styles.MainTitle}>|=---------------------------------------------=|</Text>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgreen",
        justifyContent:"center",
        alignItems:"center"

    },
    MainTitle:{
        fontSize:20,
        fontWeight: "700",
    }
})