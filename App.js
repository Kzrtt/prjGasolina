import { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import ModalCustom from './src/modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      message: "",
      modalVisible: false,
    }

    this.calcula = this.calcula.bind(this);
    this.fechar = this.fechar.bind(this);
  } 

  calcula () {
    if(this.state.alcool === 0 || this.state.gasolina === 0) {
      alert("Preencha os campos");
    } else {
      let res = this.state.alcool / this.state.gasolina;
      this.setState({
        message: res > 0.7 ? "Compensa usar Gasolina" : "Compensa usar Álcool",
        modalVisible: true,
      });      
    }
  }

  fechar() {
    this.setState({
      alcool: 0,
      gasolina: 0,
      modalVisible: false,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style = { styles.logoText } > 
            <Image
              source = { require('./src/logo.png') }
              style = { styles.logo }
            />
            <Text style = { styles.text } >Qual a melhor opção?</Text>
          </View>

          <View style = { styles.form } >
            <Text style = { styles.label } >Álcool (preço por litro)</Text>
            <TextInput
              style = { styles.input }
              value = { this.state.alcool }
              onChangeText = { (text) => this.setState({alcool: text}) }
            />
            <Text style = {[ styles.label, styles.margin ]} >Gasolina (preço por litro)</Text>
            <TextInput
              style = { styles.input }
              value = { this.state.gasolina }
              onChangeText = { (text) => this.setState({gasolina: text}) }
            />
          </View>

          <View style = { styles.btnView } >
            <TouchableOpacity style = { styles.btn } onPress = { this.calcula } >
              <View style = { styles.btnArea } >
                <Text style = { styles.btnText } > Calcular </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Modal animationType = "slide" visible = { this.state.modalVisible } >
                <View style = {{ flex: 1, justifyContent: 'center' }} >
                  <View style = {{ backgroundColor: '#292929', flex: 1, borderRadius: 15 }} >
                    <ModalCustom  
                      fechar = { this.fechar } 
                      message = { this.state.message } 
                      gasolina = { this.state.gasolina } 
                      alcool = { this.state.alcool } 
                    />                      
                  </View>    
                </View>
            </Modal>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  modal: {
    backgroundColor: 'red',
  },
  logo: {
    marginTop: 100,
  },
  text: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  label: {
    marginTop: 10,
  },
  margin: {
    marginTop: 30,
  },
  logoText: {
    alignItems: 'center',
  },
  form: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: '10',
    padding: 10,
    width: "95%",
    height: 40,
  },
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
    marginTop: 45,
    alignItems: 'center',
  }
});

export default App;
