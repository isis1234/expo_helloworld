import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Constants } from 'expo';

export default class Calculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.processView}>
          <Text style={styles.process} nativeID="process"></Text>
        </View>
        <View stye={styles.resultView}>
          <Text style={styles.result} nativeID="result">0</Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.inLine}>
            <Button title="C" buttonStyle={styles.minOptions} textStyle={styles.minText} />
            <Button title="+/-" buttonStyle={styles.minOptions} textStyle={styles.minText}/>
            <Button title="%" buttonStyle={styles.minOptions} textStyle={styles.minText}/>
            <Button title="/" buttonStyle={styles.majOptions} textStyle={styles.majText}/>
          </View>
          <View style={styles.inLine}>
            <Button title="7" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="8" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="9" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="x" buttonStyle={styles.majOptions} textStyle={styles.majText}/>
          </View>
          <View style={styles.inLine}>
            <Button title="4" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="5" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="6" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="-" buttonStyle={styles.majOptions} textStyle={styles.majText}/>
          </View>
          <View style={styles.inLine}>
            <Button title="1" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="2" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="3" buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="+" buttonStyle={styles.majOptions} textStyle={styles.majText}/>
          </View>
          <View style={styles.inLine}>
            <Button title="0" buttonStyle={styles.zeroOptions} textStyle={styles.numText}/>
            <Button title="." buttonStyle={styles.numberOptions} textStyle={styles.numText}/>
            <Button title="-" buttonStyle={styles.majOptions} textStyle={styles.numText}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#202020',
  },
  result: {
    marginRight: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#7a7a7a',
  },
  process: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    textAlign: 'left',
    color: '#7a7a7a',
  },
  inLine:{
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  minOptions:{
    backgroundColor: "#585b60",
    height: 65,
    width: 65,
  },
  minText:{ fontSize: 30 },
  majOptions:{
    backgroundColor: "#f89111",
    height: 65,
    width: 65,
  },
  majText:{ fontSize: 30 },
  numberOptions:{
    backgroundColor: "#a1a2a7",
    height: 65,
    width: 65,
  },
  zeroOptions:{
    backgroundColor: "#a1a2a7",
    height: 65,
    width: 65*2+30,
  },
  numText:{ fontSize: 30 },
});
