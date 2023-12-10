const print = (input) => {
    const result = [];
    result.push("==================\n")
    result.push(`${input}\n`);
    result.push("==================\n")
    return result.join('');
}

export { print }