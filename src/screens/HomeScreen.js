import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

// const Main = () => {
//   return (
//     <View>
//         <Text
//           style={{
//             fontSize: 40,
//             textAlign: 'center',
//             color: '#000',
//             fontWeight: 'bold',
//             padding: 10,
//             backgroundColor: '#efbbff',
//           }}>
//           Home
//         </Text>
//       <View style={{marginTop: 10}}>
//         <TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               color: '#000',
//               padding: 20,
//               backgroundColor: '#b3ecec',
//             }}>
//             Screen 1
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{marginVertical: 10}}>
//         <TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               color: '#000',
//               padding: 20,
//               backgroundColor: '#fff5ee',
//             }}>
//             Screen 2
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               color: '#000',
//               padding: 20,
//               backgroundColor: '#66b2b2',
//             }}>
//             Screen 3
//           </Text>
//         </TouchableOpacity>
//       </View> 
//     </View>
//   );
// };

const Home = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;