function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
function averageArray(numbers) {
    const sum = sumArray(numbers);
    return sum / numbers.length;
}
function longestString(strings) {
    return strings.reduce((longest, str) => (str.length > longest.length ? str : longest), '');
}
function stringsLongerThan(strings, minLength) {
    return strings.filter((str) => str.length > minLength);
}
function printNumbersRecursively(n) {
    if (n > 0) {
        printNumbersRecursively(n - 1);
        console.log(n);
    }
}
