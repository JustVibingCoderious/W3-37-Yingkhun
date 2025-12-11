import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet} from "react-native";

export default function App(){

    const router = useRouter()
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> First Page </Text>
            <Button title="Button that brings u to the second page" onPress={() => router.navigate('/square')}/>
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