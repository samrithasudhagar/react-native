import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import _ from "lodash";
export default function App() {
  const [textItem, setTextItem] = useState("");
  const [array, setArray] = useState([]);
  handleChange = text => {
    setTextItem(text);
  };
  pressChange = () => {
    setArray(array=>[...array, { key: Math.random().toString(), value: textItem }]);
    setTextItem("");
    console.log(array)
  };
  removeItem =(key)=>{
    setArray(array=>{
      console.log(key)
     return array.filter((i)=>
key!==i.key
     )
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TextInput
          placeholder="Type your To-Do's"
          style={styles.input}
          onChangeText={handleChange}
          value={textItem}
        />
        <Button title="ADD" onPress={pressChange} style={styles.Button} />
      </View>
      <FlatList
        data={array}
        renderItem={item => <TouchableOpacity onPress={removeItem.bind(this, item.item.key)}><View><Text style={styles.list}>{item.item.value}</Text></View></TouchableOpacity>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 20,
    marginRight: 20,
    flex: 1
  },
  container: {
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  list: {
    fontSize: 20,
    margin: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
