const suitchi = require(".");

const foo = "no";
const bar = suitchi(foo, [
    ["yes", true],
    ["no", () => {
        const str = "No! ";
        const rep = str.repeat(3);
        return rep.slice(0, -1);
    }],
]);

console.log(bar); // "No! No! No!"
