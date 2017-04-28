import styles from './styles';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

import { LayoutAnimation } from 'react-native';

class Debug extends Component {


 render() {
   return (
     <ScrollView>
       <List>
         {
           <ListItem
            // key={user.login.username}
             roundAvatar
          //   avatar={{ uri: user.picture.thumbnail }}
            // title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
          //   subtitle={user.email}
          //   onPress={() => this.onLearnMore(user)}
           />
      }
       </List>
     </ScrollView>
   );
 }
}

export default Debug;
