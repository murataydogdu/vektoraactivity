'use strict'

var React = require('react-native');
var styles = require('./styles/mainstyles');
var base64 = require('base-64/base64');
var Moment = require('moment');

var Main = require('./main');

var {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} = React;

//FIXME image source should be local for device (both ios and android)
var VEKTORALOGO = 'http://www.vektora.com/images/logo.png';
//FIXME purpose of test - proper way is api.js should seperated -VSDURL
var VSDURL = "http://vkt-sap-erp01.vektora.com:8010/sap/opu/odata/SAP/Z_VKT_MBL_SRV/";

module.exports = React.createClass({
  getInitialState : function(){
    return({
      username : '',
      password : '',
      animating : false,
      });
  },
  //FIXME explore what is the proper way to do it
  //FIXME when keybord open and close handle the view
  scrolldown: function(){
  this.refs.scrollView.scrollTo(200*2/3);
  },
  onPressLogin : function(){

      this.props.navigator.immediatelyResetRouteStack([{name : 'calendar'}])
    // var headers = new Headers();
    // headers.append("Authorization", "Basic " + base64.encode(this.state.username+":"+this.state.password));
    //
    // var datetime = Moment().format('YYYY-MM-DDTHH:mm:ss');
    // var param = "DateSet?$filter=WorkDate eq datetime'"+datetime+"'";
    //
    //
    // fetch(VSDURL+param+'&$format=json', {
    //     headers: headers
    //   })
    //   .then(function(response){
    //     return response.json()
    //   })
    //   .then(function(json){
    //
    //     console.log(json.d.results);
    //
      // });


    // console.log(Moment().format('YYYY-MM-DDTHH:mm:ss'));
    // console.log(this.state.password);
  },
  actIndicatShow : function(){
    return(
      <ActivityIndicatorIOS
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    );
  },
  userInputsShow : function(){
   //FIXME this function returns all content for userInputs related
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
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={(username) => this.setState({username: username})}
            onFocus={this.scrolldown}
            value={this.state.username} />
          <TextInput
            style={styles.usernametextinput}
            placeholder={'SAP Şifre'}
            password={true}
            onChangeText={(password) => this.setState({password: password})}
            onFocus={this.scrolldown}
            value={this.state.password} />
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
