  import React, { Component } from "react";
  import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from 'native-base';

  var itemArray = new Array(9).fill("empty"); // New Array with 9 empty elementss

export default class App extends Component
{
      constructor(props) {
      super(props);
        this.state = {
        isCross: false,
        winGame: ""
      };
    }

    drawItem = itemNumber => {
      if (itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = this.state.isCross;
        this.setState({ isCross: !itemArray[itemNumber] }, () => {
          console.log(this.state.isCross);
        });
      }
      this.chooseWinner();
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
      return "lightblue";
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
      this.setState(
        {
          winGame: (itemArray[0] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`,"", [{
            text: "Reset",
            onPress: () => this.resetGame()
          }]);}
      );
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState(
        {
          winGame: (itemArray[3] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState(
        {
          winGame: (itemArray[6] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState(
        {
          winGame: (itemArray[0] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState(
        {
          winGame: (itemArray[1] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState(
        {
          winGame: (itemArray[2] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState(
        {
          winGame: (itemArray[0] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState(
        {
          winGame: (itemArray[2] ? "Cross" : "Circle").concat(" Wins")
        },
        () => {
          Alert.alert(`${this.state.winGame}`, "", [
            {
              text: "Reset",
              onPress: () => this.resetGame()
            }
          ]);
        }
      );
    }

    };



    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 50, margin: 30}}>Tic Tac Toe</Text>
          <View style={styles.grid}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(0);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(0)}
                    size={50}
                    color={this.chooseColor(0)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(1);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(1)}
                    size={50}
                    color={this.chooseColor(1)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(2);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(2)}
                    size={50}
                    color={this.chooseColor(2)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(3);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(3)}
                    size={50}
                    color={this.chooseColor(3)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(4);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(4)}
                    size={50}
                    color={this.chooseColor(4)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(5);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(5)}
                    size={50}
                    color={this.chooseColor(5)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(6);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(6)}
                    size={50}
                    color={this.chooseColor(6)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(7);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(7)}
                    size={50}
                    color={this.chooseColor(7)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(8);
                  }}
                >
                  <Entypo
                    name={this.chooseIcon(8)}
                    size={50}
                    color={this.chooseColor(8)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.winstyle}>{this.state.winGame}</Text>
          <Button
            full
            rounded
            primary
            style={{ margin: 30 }}
            onPress={() => {
              this.resetGame();
            }}
          >
            <Text style={{ color: "white" }}> Reset Game</Text>
          </Button>
        </View>
      );
    }
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    grid:
    {

    },
    row:
    {
      flexDirection:'row'
    },
    item:
    {
      borderWidth: 0.5,
      borderColor: 'lightblue',
      borderRadius: 5,
      padding: 30

    },
    winstyle:
    {
      fontSize: 25,
      margin: 30
    },
  });
