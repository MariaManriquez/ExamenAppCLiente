import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";

import VectorIcons from 'react-native-vector-icons/AntDesign';
import TextCustomInput from '../components/TextCustominput.js';
import Color from "../layout/colors.js";
import CustomButtons from '../components/CustomButtons.js';
import Request from '../server/Request.js';
import {CREATE_TAREAS} from '../server/EndPoints.js'
class CreateTarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            date: '',
            hour: '',
            done: '',
        };
    }
    componentDidMount() {}
        registerData(){
            console.log(this.state);
            var req = new Request("post", CREATE_TAREAS, this.state, (response) =>{
                if(response.status == 200){
                    alert('Tarea registrada');
                }
            });
            req.start();
        }
    render() {
        return (
            <View style={styles.container}>
                <TextCustomInput 
                iconname="pushpino" 
                placeholder="Name"
                onChangeText={(txt) =>{
                    this.setState({
                        name: txt,
                    });
                }}
                />

                <TextCustomInput 
                iconname="pushpino" 
                placeholder="Description" 
                onChangeText={(txt) =>{
                    this.setState({
                        description: txt,
                    });
                }}
                />

                <TextCustomInput 
                iconname="pushpino" 
                placeholder="Date" 
                onChangeText={(txt) =>{
                    this.setState({
                        date: txt,
                    });
                }}
                />

                <TextCustomInput 
                iconname="pushpino" 
                placeholder="Hour" 
                onChangeText={(txt) =>{
                    this.setState({
                        hour: txt,
                    });
                }}
                />
                <CustomsButtons 
                    tittle="CREAR TAREA"
                    iconname="meh"
                    onPress={() =>{
                        this.registerData();
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
});

export default CreateTarea;