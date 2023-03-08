import React, {useState} from "react";
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    Modal
} from "react-native";

import {UserForm} from "./src/components/UserForm";

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Registrate en la {""}
                <Text style={styles.titleBold}>UAM</Text>
            </Text>
            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.titleButton}>New User</Text>
            </Pressable>

            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setModalVisible2(true)}
            >
                <Text style={styles.titleButton}>Background</Text>
            </Pressable>

            <Modal animationType="slide" visible={modalVisible}>
                <Text>Modal</Text>
                
                <Pressable 
                    style={styles.btnNewUser}
                    onPress={() => setModalVisible2(false)}
                  >
                    <Text style={styles.titleButton}>Close Me</Text>
                </Pressable>
            </Modal>

            <Modal animationType="slide" visible={modalVisible2}>
                <UserForm />
            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0069a3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },
    titleBold: {
        fontWeight: '900',
        color: "#f4d73b",
    },
    btnNewUser: {
        backgroundColor: '#f4d73b',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
    },
    titleButton: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
    },
});