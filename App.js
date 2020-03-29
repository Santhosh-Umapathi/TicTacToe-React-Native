import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class App extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
                        isCross: true,
                        winGame: ""
                     };
     };


     drawItem = () => {
       // TODO:
     };

     chooseIcon = () => {};

     chooseColor = () => {};

     resetGame = () => {};

     chooseWinner = () => {};





    render()
    {
        return (
            <View style={styles.container}>
                <Text>App</Text>
            </View>
        );
    };
};


const styles = StyleSheet.create(
{
    container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                },
});