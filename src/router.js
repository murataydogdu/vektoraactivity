'use strict'

var React = require('react-native');
var Authentication = require('./main');

var {Navigator} = React;

var ROUTES = {
  auth : Authentication
};

module.exports = React.createClass({
  renderScene : function(route, navigator){
    var Component = ROUTES[route.name];
    return(<Component route={route} navigator={navigator}/>);
  },
  render : function(){
    return(
        <Navigator
          initialRoute={{name : 'auth'}}
          renderScene={this.renderScene}
          configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        />
    );
  },
});
