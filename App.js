import { Text, SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import StyledButton from "./components/StyledButton";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingInline: 8 }}>
                <View style={{ flexDirection: "row", gap: 16 }}>
                    <StyledButton buttonStyle={styles.button} textStyle={styles.buttonText}>
                        Normal
                    </StyledButton>
                    <StyledButton buttonStyle={styles.button} textStyle={styles.buttonText}>
                        Prioritário
                    </StyledButton>
                    <StyledButton buttonStyle={styles.button} textStyle={styles.buttonText}>
                        Alta Prioridade
                    </StyledButton>
                </View>

                {/* Lista de Senhas */}
                <View
                    style={{
                        backgroundColor: "lightgray",

                        maxHeight: 400,
                        marginTop: 16,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 36,
                            fontWeight: 700,
                        }}
                    >
                        Senhas
                    </Text>
                    <ScrollView style={{ padding: 8 }}>
                        <Text style={styles.passwordItem}>N01</Text>
                        <Text style={styles.passwordItem}>P01</Text>
                        <Text style={styles.passwordItem}>AP01</Text>
                        <Text style={styles.passwordItem}>N01</Text>
                        <Text style={styles.passwordItem}>P01</Text>
                        <Text style={styles.passwordItem}>AP01</Text>
                        <Text style={styles.passwordItem}>N01</Text>
                        <Text style={styles.passwordItem}>P01</Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    button: {
        flex: 1,
        paddingBlock: 64,
        backgroundColor: "#4ea72e",
        borderWidth: 2.5,
    },
    buttonText: {
        fontSize: 24,
    },
    passwordItem: {
        fontSize: 24,
    },
});
