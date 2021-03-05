import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../layout/colors.js";
import VectorIcons from 'react-native-vector-icons/AntDesign';
 class TextCustomInput extends React.Component {
     constructor(props) {
         super(props);
     }
     render() {
        const {
            placeholder,
            iconname,
            onChangeText,
        } = this.props;
        return (
            <View style={styles.inputtext}>
                    <VectorIcons
                        name={iconname}
                        size={24}
                        color={Color[Color.key].fourthcolor}
                    />
                    <TextInput 
                    style={styles.textinputcolor} 
                    placeholder={placeholder}
                    onChangeText={(text) =>{
                        if (onChangeText != null){
                            onChangeText(text);
                        }
                    }}
                    />
            </View>
        );
     }
 }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color[Color.key].secondcolor,
        alignItems: 'center',
    },
    inputtext: {
        flexDirection: "row",
        paddingLeft: 5,
        backgroundColor: Color[Color.key].maincolor,
        width: "90%",
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        textAlign: 'center', 
        marginBottom: 10.
    },
    textinputcolor: {
        color: Color[Color.key].fourthcolor,
    }
});
export default TextCustomInput;