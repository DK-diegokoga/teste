import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, StatusBar, Alert } from 'react-native';

export default function Home() {
    /*var validando = true;*/
    var sequencePlayer = "";
    //var maxJogadas = 5;
    var randomic = "";
    var sequenceGame = "";

    function random() {
        do {
            randomic += Math.floor((Math.random() * 4 )+ 1).toString();
            sequenceGame += randomic
            switch (randomic) {
                case '1':
                    //sequenceGame += randomic;
                    Alert.alert('red')

                    break;
                case '2':
                    //sequenceGame += randomic;
                    Alert.alert('yellow')

                    break;
                case '3':
                    //sequenceGame += randomic;
                    Alert.alert('blue')

                    break;
                case '4':
                    //sequenceGame += randomic;
                    Alert.alert('green')

                    break;
            }
        } while (validando != true)
    }
    var validando = true
    //var i = 1;
    function start() {
        //if (i <= maxJogadas) {
        validando = true
        random();
        //i++

        // } else {Alert.alert('You Lose!')


        //validando = false
    }
    // compare()
    function compare() {
        for (var i = 0; i < sequencePlayer.length; i++) {
            if (sequencePlayer[i] == sequenceGame[i]) {
                start();
            }
            /*else{
                gameOver()
            }*/
            if (sequencePlayer[i] != sequenceGame[i]) {
                validando = false
                gameOver();
            }
        }
    }

    function gameOver() {
        //validando = false
        Alert.alert('Game Over!')
        //restart()
    }


    /* function restart(){
 
     }*/


    function redButton() {
        sequencePlayer += "1"; 
        //compare()
    }
    function yellowButton() {
        sequencePlayer += "2"; 
        //compare()
    }
    function blueButton() {
        sequencePlayer += "3"; 
        //compare()
    }
    function greenButton() {
        sequencePlayer += "4";
        //compare()
    }


    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.tela}>


                <TouchableOpacity
                    style={styles.redButton1}
                    onPress={() => {
                        redButton(compare())

                    }}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => {
                        start()
                    }}
                >
                    <Text style={styles.Texto}>PLAY</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.yellowButton2}
                    onPress={() => {
                        yellowButton(compare())

                    }}

                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.blueButton3}
                    onPress={() => {
                        blueButton(
                            compare()
                            )

                    }}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.greenButton4}
                    onPress={() => {
                        greenButton(compare())

                    }}
                >
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100
    },
    Texto: {
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        paddingTop: 29,
        //paddingLeft: 18
    },
    redButton1: {
        width: 100,
        height: 100,
        borderRadius: 40,
        borderWidth: 2,
        backgroundColor: '#CC1100',
        top: 20,
        marginBottom: 20
    },
    startButton: {
        width: 100,
        height: 100,
        borderRadius: 40,
        backgroundColor: '#000000',
        top: 20,
        alignItems: 'center'

    },
    yellowButton2: {
        width: 100,
        height: 100,
        borderRadius: 40,
        borderWidth: 2,
        backgroundColor: '#FFFF00',
        right: 120,
        bottom: 80,
    },
    blueButton3: {
        width: 100,
        height: 100,
        borderRadius: 40,
        borderWidth: 2,
        backgroundColor: '#0047ab',
        left: 120,
        bottom: 180,
    },
    greenButton4: {
        width: 100,
        height: 100,
        borderRadius: 40,
        borderWidth: 2,
        backgroundColor: '#90EE90',
        bottom: 160,
    },
    again: {

    }
});