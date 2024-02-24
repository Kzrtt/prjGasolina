import React, { Component }  from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class ModalCustom extends Component {

  render() {
    return(
        <View style = {{ flex: 1, marginTop: 100, borderRadius: 15, alignItems: "center" }} >
            <Image
                source = { require('./gas.png') }
            />
            <Text style = {{ color: "green", marginTop: 35, fontWeight: 'bold', fontSize: 18 }} > {this.props.message} </Text>
            
            <Text style = {{ color: '#FFF', marginTop: 40, fontWeight: 'bold', fontSize: 18 }} >Com os preços: </Text>
            <Text style = {{ color: '#FFF', marginTop: 20 }} >Gasolina: R$ { this.props.gasolina } </Text>
            <Text style = {{ color: '#FFF', marginTop: 20 }} >Álcool: R$ { this.props.alcool } </Text>

            <View style = { styles.btnView } >
                <TouchableOpacity style = { styles.btn } onPress = { this.props.fechar } >
                    <View style = { styles.btnArea } >
                        <Text style = { styles.btnText } > Calcular Novamente </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    btn: {
        width: "90%",
        height: 50,
        marginTop: 35,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 15,
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    btnView: {
        marginTop: 25,
        alignItems: 'center',
    }
});