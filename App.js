import react, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


function App(){

  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]


const [img, setImg] = useState(require('./src/biscoito.png'))
const [Frase, setFrase] = useState('')

function quebrarBiscoito(){

  let numeroAleatorio = Math.floor(Math.random() * frases.length)

  setFrase(  '"'+ frases[numeroAleatorio] +'"')
  setImg(require('./src/biscoitoAberto.png'))
}
function novoBiscoito(){
  setImg(require('./src/biscoito.png'))
  setFrase('')

}

  return(
    <View style={styles.container}>
     <Image style={styles.img}
     source={ img }/>
<Text style={styles.txt2}> {  Frase  } </Text>

    <TouchableOpacity style={styles.btn} onPress={ quebrarBiscoito }>
      <View style={styles.areaBtn}>
        <Text style={styles.txt}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>
     <TouchableOpacity style={[styles.btn, { borderColor:'black', }]} onPress={ novoBiscoito }>
      <View style={styles.areaBtn}>
        <Text style={[styles.txt, {color:'black'}]}>Novo Biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',

  alignItems:'center',
  backgroundColor:'purple'
},
img:{
  height: 230,
  width:230,
  marginBottom: 25
}, 
txt2: {
  fontSize: 20,
  color: '#dd7b22',
  margin: 30,
  fontStyle: 'italic',
  textAlign: 'center'
},
btn:{
  height:50,
  width:230,
  borderWidth: 2,
  borderRadius:25,
   borderColor: '#dd7b22',
   marginBottom: 10
},
areaBtn:{
  flex:1,
  justifyContent: 'center',
  alignItems:'center'
},
txt:{
   fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
}
})

export default App;