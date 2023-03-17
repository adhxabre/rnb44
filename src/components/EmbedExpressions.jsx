import { Image, Text, View } from "react-native";

export default function EmbedExpressions() {
  function getMajor() {
    return "Fullstack Devs";
  }

  const companyName = "DumbWays.ID";

  const image = "https://ik.imagekit.io/CoffeeLatteShop/1114168_Kj94I3nB_.png";

  return (
    <View>
      <Text>
        Welcome to {companyName} class {getMajor()}
      </Text>
      <Image src={image} style={{ width: "50%", height: "50%" }} />
    </View>
  );
}
