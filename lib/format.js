function toPaddedInteger(num, padLen = 2) {
    const numClamp = Math.max(0, Math.floor(num));

    return numClamp.toString().padStart(padLen, "0");
}

export default {
    toPaddedInteger,
};
