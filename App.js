import { Text, SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import StyledButton from "./components/StyledButton";
import { useState } from "react";

function toPaddedInteger(num, padLen = 2) {
    const numClamp = Math.max(0, Math.floor(num));

    return numClamp.toString().padStart(padLen, "0");
}

/**
 * @param {Array} stack The password type stack to convert to password number stack
 */
function getPassListFromStack(stack) {
    const result = [];
    const counts = { N: 0, P: 0, AP: 0 };

    for (const item of stack) {
        if (counts[item] === undefined) return;

        counts[item]++;

        if (item === "AP") {
            result.push(item + "0" + toPaddedInteger(counts[item], 2));
        } else {
            result.push(item + "0" + counts[item]);
        }
    }

    return result;
}

const App = () => {
    const [passStack, setPassStack] = useState([]);

    const pushPassword = (type = "N") => {
        if (typeof type !== "string") return;
        type = type.toUpperCase();

        if (["N", "P", "AP"].includes(type)) {
            setPassStack([...passStack, type]);
        }
    };

    const passwordDisplay = getPassListFromStack(passStack).slice(-20).reverse();
    const latestPass = passwordDisplay[0] ?? "Nenhum";

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heading}>Senha Atual</Text>
                <Text style={{ fontSize: 36, textAlign: "center" }}>{latestPass}</Text>
            </View>
            <View style={{ paddingInline: 8, marginTop: 8 }}>
                <View style={{ flexDirection: "row", gap: 16 }}>
                    <StyledButton
                        onPress={() => pushPassword("N")}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                    >
                        Normal
                    </StyledButton>
                    <StyledButton
                        onPress={() => pushPassword("P")}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                    >
                        Prioritário
                    </StyledButton>
                    <StyledButton
                        onPress={() => pushPassword("AP")}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                    >
                        Alta Prioridade
                    </StyledButton>
                </View>

                {/* Lista de Senhas */}
                <View
                    style={{
                        backgroundColor: "lightgray",

                        maxHeight: 400,
                        marginTop: 16,
                        padding: 8,
                    }}
                >
                    <Text style={styles.heading}>Senhas</Text>
                    <ScrollView>
                        {passwordDisplay.map((item) => (
                            <Text key={item} style={styles.passwordItem}>
                                {item}
                            </Text>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    heading: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: 700,
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

export default App;
