'use strict';

var React = require('react-native');

var {StyleSheet}= React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header : {
    flex : 1,
    justifyContent: 'center',
    alignItems : 'center',
    marginTop : 25,
  },
  content : {
    flex : 1,
  },
  headerText : {
    marginTop : 9,
    fontSize : 17,
    fontWeight : 'bold'
  },
  headerImage : {
    width: 258,
    height: 58,
  },
  usernametextinput : {
    height: 50,
    borderColor: '#074FB3',
    borderWidth: 1,
    padding : 10,
    borderRadius : 15,
    marginLeft : 20,
    marginRight : 20,
    marginTop : 9,
  },
  loginButton : {
    alignItems : 'center',
    marginTop : 10,
  },
  loginText : {
    borderRadius : 12,
    fontSize : 25,
    fontWeight : 'bold',
    color : '#074FB3',
  }

});
