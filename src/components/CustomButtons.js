import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Touchable} from "react-native";
import VectorIcons from "react-native-vector-icons/AntDesign";
import Color from "../layout/colors.js";
 class CustomButtons extends React.Component {
     constructor(props) {
         super(props);
     }
     render() {
        const {tittle, iconname, onPress} = this.props;
        var icon = iconname;
        if(icon == null){
            icon = 'check'
        }
        return(
            <TouchableOpacity 
                style={styles.btnstyles}
                onPress={() => {
                    onPress();
                }}>
                <VectorIcons 
                name={iconname} 
                size={24} 
                color={Color[Color.key].maincolor} 
                />
                <Text style={styles.txt}>{tittle}</Text>
            </TouchableOpacity>
        );
     }
 }
 const styles = StyleSheet.create({
    btnstyles: {
        backgroundColor: Color[Color.key].seconcolor,
        flexDirection: 'row',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: Color[Color.key].fourthcolor,
        marginLeft: 10,
    }
 });
 export default CustomButtons;