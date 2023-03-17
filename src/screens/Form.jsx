import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput
        style={style.textInput}
        defaultValue="damwesdotaidi@gmail.com"
      />

      <Text style={style.textStyle}>Password</Text>
      <TextInput secureTextEntry={true} style={style.textInput} />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    color: "#e74c3c",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  textStyle: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    color: "#95a5a6",
  },
  button: {
    backgroundColor: "#e74c3c",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
