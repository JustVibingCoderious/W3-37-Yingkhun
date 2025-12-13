import { useRouter } from "expo-router";
import  {View, Text , Button, Touchable, ViewBase, StyleSheet} from "react-native";

export default function Index(){

    const router = useRouter()
    return(
        <View style={styles.container}>
            <Text style={styles.MainTitle}> login Sucessful! </Text>
            <Button title="Button that brings you to the home page" onPress={() => router.navigate('/App')}/>
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