import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "@/types/routes";

const HomeScreen = () => {
    
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const gotoPage = (docId: string) => {
        navigation.navigate("Detail", { docId });
    };

    return (
        <>
            <Text>Home</Text>
            <Button title="View all" onPress={() => gotoPage("a")} />
        </>
    );
};

export default HomeScreen;
