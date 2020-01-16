# suitchi

Switch expressions in JavaScript.

## Usage

### `suitchi(expression, mappings)`

| Parameter | Type | Description |
|---|---|---|
| `expression` | `any` | The expression to match against the cases in the mappings. |
| `mappings` | `[RegularCase, ..., DefaultCase?]` | A list of cases to match against to expression. |

`RegularCase`: `[Case, Value]`

`DefaultCase`: `Value`

Entries in `mappings` are iterated over until a match is found.

A `RegularCase` matches if its `Case` matches `expression`. The `DefaultCase`, if it exists, always matches and must be the final entry of `mappings`

When a match is found, the processed value of the corresponding `Value` is returned.

#### `Case`

If a function, it is called with `expression` and matches if it returns `true`.

If not a function, it matches if its value is exactly equal to `expression`.

#### `Value`

If a function, its processed value is its return value when called.

If not a function, its processed value is itself.

## Examples

```javascript
const userInput = "yes";
const reply = suitchi(userInput, [
    ["yes", "Coolbeans."],
    ["no", "Aw, man!"],
    "Please input an answer.", // default value
]);
// reply === "Coolbeans."
```

```javascript
suitchi(userInput, [
    ["", "Please input something."],
    () => {
        const spaced = userInput + " ";
        const rep = spaced.repeat(3);
        return rep.slice(0, -1);
    },
]);
```

```javascript
const sixteenIsEven = suitchi(16, [
    [n => n % 2 === 0, true],
    false,
]);
```
