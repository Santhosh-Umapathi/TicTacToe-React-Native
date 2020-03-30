  import React, { Component } from "react";
  import { StyleSheet, Text, View, Button } from "react-native";
  import { entypo } from "@expo/vector-icons";

  var itemArray = new Array(9).fill("empty"); // New Array with 9 empty elementss

export default class App extends Component
{
      constructor(props) {
      super(props);
        this.state = {
        isCross: false,
        winGame: ""
      };ˆ
    }

    drawItem = itemNumber => {
      if (itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = this.state.isCross;
        this.setState({ isCross: !itemArray[itemNumber] }, () => {
          console.log(this.state.isCross);
        });
      }
    };

    chooseIcon = itemNumber => {
      if (itemArray[itemNumber] !== "empty") {
        return itemArray[itemNumber] ? "cross" : "circle";
      }
      return "pencil";
    };

    chooseColor = itemNumber => {
      if (itemArray[itemNumber] !== "empty") {
        return itemArray[itemNumber] ? "red" : "green";
      }
      return "gray";
    };

  resetGame = () => {
    itemArray.fill('empty');
    this.setState({ winGame: '' })
    this.forceUpdate();
    };

  chooseWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winGame: (itemArray[3] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[6] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winGame: (itemArray[1] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[2] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "cross" : "circle").concat(" Wins")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winGame: (itemArray[2] ? "cross" : "circle").concat(" Wins")
      });
    }

    };

    render() {
      return (
        <View style={styles.container}>
          <Text>App</Text>
          <Text></Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });
