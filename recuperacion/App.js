import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function BuscarScreen({ navigation }) {
  const [number, setNumber] = useState(0);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui puedes buscar usuarios por su edad:</Text>
        <Text></Text>
        <TextInput
          style={{ borderColor: 'red', borderWidth: 3, width: 100 }}
          onChangeText={(x) => setNumber(x)}
          // value={number}
          keyboardType="numeric"
        />
        <Text></Text>
        <Button
          title="Press me"
          onPress={() => navigation.navigate('Detalles', { numbero: number })}
        />
      </View>
    </ScrollView>
  );
} //ListadoScreen

function HistoriaScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Text style={{ marginBottom: 20 }}>
          Bienvenido a la historia de los dispositivos moviles
        </Text>

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 300, height: 400, marginBottom: 25 }}
              source={require('./assets/backberry.jpeg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Esto es una BlackBerry</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>19 de enero de 1999</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              BlackBerry es una marca de tel??fonos inteligentes desarrollada por
              la compa????a canadiense BlackBerry,que integra el servicio de
              correo electr??nico m??vil desde 1999; aunque incluye las
              aplicaciones t??picas de un tel??fono inteligente: libreta de
              direcciones, agenda, calendario, lista de tareas, bloc de notas,
              navegador, aplicaciones de redes sociales, as?? como c??mara de
              fotograf??a integrada en todos los dispositivos. BlackBerry se hizo
              famosa por su teclado QWERTY incorporado, y por su capacidad para
              enviar y recibir correos electr??nicos de Internet accediendo a las
              redes de las compa????as de telefon??a celular que brindan este
              servicio. Debido a esta popularidad, el t??rmino blackberry tambi??n
              ha pasado a ser de uso com??n para hacer referencia a cualquier
              tel??fono celular inteligente que incorpore un teclado
              completo.BlackBerry sol??a usar un Sistema operativo propio, el
              BlackBerry OS, el cual adem??s de las prestaciones de un tel??fono
              inteligente incorpora su propio servicio de mensajer??a llamado
              BBM. Aunque actualmente sus tel??fonos corren el sistema operativo
              Android.El t??rmino fue acu??ado por la compa????a de marcas Lexicon
              Branding, inspir??ndose en la semejanza de las teclas de los
              tel??fonos BlackBerry con las drupas de las que est?? compuesta la
              mora.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusi??n:
            <Text style={{ fontWeight: 'normal' }}>
              Este tel??fono movil actualmente esta desfasado, en comparacion con
              el mercado actual es totalmente obsoleto, no es tactil, no dispone
              de casi ninguna aplicacion fuera de llamar, sms...etc.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 225, height: 250, marginBottom: 25 }}
              source={require('./assets/1eriphone.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Este es el primer iphone</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>29 de junio de 2007</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              iPhone es una l??nea de tel??fonos inteligentes de alta gama
              dise??ada y comercializada por Apple Inc. Ejecuta el sistema
              operativo m??vil iOS, conocido hasta mediados de 2010 como "iPhone
              OS". El iPhone dispone de c??mara de fotos y un reproductor de
              m??sica (equivalente al del iPod), adem??s de software para enviar y
              recibir mensajes de texto y de voz. Tambi??n ofrece servicios de
              Internet, como leer correo electr??nico, cargar p??ginas web y
              conectividad por Wi-Fi. La primera generaci??n de tel??fonos eran
              GSM cuatribanda con la tecnolog??a EDGE; la segunda generaci??n
              inclu??a UMTS con HSDPA.; la sexta generaci??n ya inclu??a 4G LTE.
              Steve Jobs anunci?? p??blicamente el iPhone en la Macworld
              Conference and Expo el 9 de enero de 2007, tras varios rumores y
              especulaciones que circulaban desde hac??a meses.El iPhone se
              introdujo inicialmente en los Estados Unidos el 29 de junio de
              2007. Fue nombrado ??Invento del a??o?? por la revista Time en
              2007.El 11 de julio de 2008 sali?? a la venta el iPhone 3G,
              disponible en 22 pa??ses y en 70 para finales de a??o. Esta versi??n
              soportaba la transmisi??n de datos por 3G a una velocidad m??s
              r??pida y tecnolog??a AGPS. Para el evento WWDC 2009 se present?? el
              iPhone 3GS (S de Speed, velocidad), con el mismo dise??o que el 3G,
              pero con hardware mejorado. El iPhone 3GS era hasta dos veces m??s
              r??pido que su predecesor cargando p??ginas web o ejecutando
              aplicaciones, saca partido del est??ndar OpenGL ES 2.0 para ofrecer
              mejores gr??ficos 3D, soporta HSDPA a 7,2 MB (tambi??n conocido como
              3.5G), cuenta con una nueva c??mara de 3 megap??xeles con enfoque
              autom??tico y grabaci??n de v??deo, control por voz, br??jula y
              soporte integrado para el Nike+iPod.[cita requerida] El 26 de
              junio de 2010 en la WWDC 2010 Apple present?? el iPhone 4, con un
              dise??o renovado tanto est??ticamente, abandonando su est??tica
              redondeada, como a nivel hardware. Contiene el SoC Apple A4,
              creado por Intrinsity y Samsung, que es el mismo que contiene el
              iPad , el Samsung Exynos 4210 al igual que el Samsung Galaxy S2),
              aunque reducido de frecuencia de trabajo, 512 MB de memoria RAM,
              un panel LCD IPS de alta resoluci??n autodenominado Retina Display,
              2 c??maras, una de 5 megapixeles con opci??n para grabar en HD 720p
              y la otra VGA.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusi??n:
            <Text style={{ fontWeight: 'normal' }}>
              Aunque este telefono tenga mucho tiempo y en comparacion no ya con
              los de su propia familia, sino, tambi??n con los de otras marcas,
              se puede seguir utilizando para la vida moderna actualmente,
              aunque con ciertas limitaciones de aplicaciones que existen y este
              ya no las soporta. Quizas para alguien con una vida sencilla le
              basta este telefono.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 225, height: 250, marginBottom: 50 }}
              source={require('./assets/iphone7.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Este es el iphone 7</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              16 de septiembre de 2016
            </Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              El iPhone 7 es un tel??fono inteligente de gama alta dise??ado por
              Apple Inc., presentado el 16 de septiembre de 2016 junto con el
              iPhone SE como sucesor del iPhone 6s, durante el evento Keynote
              realizado en San Francisco (California, EE. UU.).Su presentaci??n
              se realiz?? el 17 de septiembre de 2016 en el Apple Special Event
              en el auditorio Bill Graham Civic Auditorium en San Francisco
              (California). En la misma se anunci?? que la preventa comenzar??a el
              d??a 9 de ese mismo mes y que el lanzamiento oficial de los
              dispositivos ser??a el 11 de octubre en los pa??ses de la primera
              oleada, extendi??ndose al resto del mundo a partir del 17 de
              diciembre. El 21 de marzo de 2017 y sin aviso previo m??s que
              algunos rumores, Apple lanz?? una edici??n especial del iPhone 7 en
              color rojo. Esta versi??n est?? disponible ??nicamente en capacidades
              de 128 y 256 GB y forma parte de la iniciativa Product (RED), por
              lo que parte del dinero recaudado con las ventas de este modelo se
              destinar??n a la lucha contra el VIH en el ??frica subsahariana.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusi??n:
            <Text style={{ fontWeight: 'normal' }}>
              Este telefono actualmente no esta en el mercado de dispositivos
              nuevos, pero se puede adquirir de forma reacondicionada o en el
              mercado de segunda mano. Bajo mi opinion sigue siendo muy buen
              telefono a pesar de la gran competencia que tiene hoy en dia,
              sigue actualizando la version de software mas actual y es
              compatible con todas las aplicaciones actuales, sigue siendo
              rapido y util.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}
      </View>
    </ScrollView>
  );
} //informacionScreen
function DetallesScreen({ route }) {
  const users = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Var??n' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Var??n' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Var??n' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Var??n' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Var??n' },
    { id: 9, name: '??lvaro Andrade', age: 43, sex: 'Var??n' },
    { id: 10, name: '??ngel Andrade', age: 23, sex: 'Var??n' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacrist??n', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 59, sex: 'Var??n' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Var??n' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Var??n' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Var??n' },
  ];
  function pintar({ item }) {
    if (item.age == route.params.numbero) {
      return (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
        </View>
      );
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Los usuarios con la edad introducida son: {route.params.numbero}
      </Text>
      <Text></Text>
      <FlatList
        data={users}
        renderItem={pintar}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
} //DetallesScreen
const Stack = createNativeStackNavigator();
function BuscarStack() {
  return (
    <Stack.Navigator initialRouteName="buscar">
      <Stack.Screen
        name="buscar"
        component={BuscarScreen}
        options={{ headerStyle: { backgroundColor: '#D50BD5' } }}
      />
      <Stack.Screen
        name="Detalles"
        component={DetallesScreen}
        options={{ headerStyle: { backgroundColor: '#D50BD5' } }}
      />
    </Stack.Navigator>
  );
} //LISTADO STACK
const Stack2 = createNativeStackNavigator();
function HistoriaStack() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="historia"
        component={HistoriaScreen}
        options={{ headerShown: false }}
      />
    </Stack2.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Historia"
        tabBarOptions={{
          activeTintColor: '#000',
          activeBackgroundColor: '#830583',
          inactiveTintColor: '#FFF',
          inactiveBackgroundColor: '#D50BD5',
        }}>
        <Tab.Screen
          name="Historia"
          component={HistoriaStack}
          options={{ headerStyle: { backgroundColor: '#D50BD5' } }}
        />
        <Tab.Screen
          name="Buscar"
          component={BuscarStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} //app

const styles = StyleSheet.create({
  
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
 
});
