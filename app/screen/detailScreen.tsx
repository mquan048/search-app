import { Text } from "react-native";

const DetailScreen = ({ route }: any) => {
  const { docId } = route.params;

  return (
    <>
      <Text>Detail</Text>
    </>
  );
};

export default DetailScreen;
