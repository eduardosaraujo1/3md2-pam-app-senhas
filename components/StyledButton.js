import { Pressable, Text, StyleSheet } from "react-native";

function StyledButton({ onPress = () => {}, buttonStyle = {}, textStyle = {}, children, ...props }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.button, buttonStyle, pressed && styles.pressed]}
            {...props}
        >
            <Text style={[styles.text, textStyle]} selectable={false}>
                {children}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "green",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.9,
        transform: [{ scale: 0.95 }],
    },
});

export default StyledButton;
