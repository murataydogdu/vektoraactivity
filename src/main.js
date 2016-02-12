'use strict'

var React = require('react-native');
var styles = require('./styles/mainstyles');
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} = React;

//FIXME image source should be local for device (both ios and android)
var VEKTORALOGO = 'http://www.vektora.com/images/logo.png';

module.exports = React.createClass({
  getInitialState : function(){
    return({
      username : '',
      password : '',
      });
  },
  //FIXME explore what is the proper way to do it
  //FIXME when keybord open and close handle the view
  scrolldown: function(){
  this.refs.scrollView.scrollTo(200*2/3);
  },
  render : function(){
    return(
      <ScrollView
        ref="scrollView"
        contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={{uri:VEKTORALOGO}}
            style={styles.headerImage}/>
          <Text style={styles.headerText}>
            LETS IMPROVE TOGETHER
          </Text>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.usernametextinput}
            placeholder={'SAP Kullanıcı adı'}
            onChangeText={(username) => this.setState({username})}
            onFocus={this.scrolldown}
            value={this.state.username} />
          <TextInput />
          <TextInput
            style={styles.usernametextinput}
            placeholder={'SAP Şifre'}
            password={true}
            onChangeText={(password) => this.setState({password})}
            onFocus={this.scrolldown}
            value={this.state.password} />
          <TextInput />
          <View style={styles.loginButton}>
            <TouchableHighlight
              underlayColor='grey'
              onPress={this.onPressLogin}>
              <Text style={styles.loginText}> GİRİŞ </Text>
              </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    )
  }
});
