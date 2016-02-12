'use strict'

var React = require('react-native');
var VektoraCalendar = require('./components/vektoracalendar/VektoraCalendar');
var Moment = require('moment')

var {
  View,
  Text,
  StyleSheet,
  ListView
} = React;
//FIXME VektoraCalendar stars from Sunday change it to monday
module.exports = React.createClass({

  getInitialState : function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return(
      {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
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
          <View style={styles.listView}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </View>
      </View>
    );
  },
});
var styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  listView : {
    flex:6,
    marginTop : 10,
  }
});
