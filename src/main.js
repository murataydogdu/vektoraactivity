'use strict'

var React = require('react-native');
var VektoraCalendar = require('./components/vektoracalendar/VektoraCalendar');
var Moment = require('moment')

var {
  View,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState : function(){
    return(
      {
        date : new Date(),
      }
    );
  },
  onDateChange : function(date){
    this.setState({ date: date });
  },
  render : function(){
    return(

      <View style={styles.container}>
        <VektoraCalendar
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}/>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container : {
    flex: 1,
    marginTop : 25,

  }
});
