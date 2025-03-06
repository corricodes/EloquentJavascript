let countChar = function(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
} 

console.log(countChar("kakkerlak", "k"));
console.log(countChar("kakkerlak", "a"));
console.log(countChar("kakkerlak", "z"));
console.log(countChar("kakkerlak", "l"));
console.log(countChar("kakkerlak", "K"));