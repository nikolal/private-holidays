import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';

import HomeList from './HomeList';



export default class HomeContainer extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }

  testProps = () => {
    console.log(this.props.items)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.testProps}>
          Home page...
        </Text>
        <HomeList
          items = {this.props.items}
        />
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
