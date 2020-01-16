# suitchi

Switch expressions in JavaScript.

## Examples

```javascript
const userInput = "yes";
const reply = match(userInput, [
    ["yes", "Coolbeans."],
    ["no", "Aw, man!"],
    ["Please input an answer."], // default value
]);
console.log(reply); // "Coolbeans."
```

```javascript
match(userInput, [
    ["", "Please input something."],
    [() => {
        const spaced = userInput + " ";
        const rep = spaced.repeat(3);
        return rep.slice(0, -1);
    }],
]);
```

```javascript
const sixteenIsEven = match(16, [
    [n => n % 2 === 0, true],
    [false],
]);
```
