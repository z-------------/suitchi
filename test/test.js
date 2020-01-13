const test = require("ava");
const s = require("..");

const range = (args) => {
    const first = args[0];
    const last = typeof args[1] === "undefined" ? args[2] : args[1] - 1;
    const list = [];
    for (let n = first; n <= last; ++n) list.push(n);
    return list;
};

const s0 = v => s(v, [
    [0, "0"],
    [1, "1"],
    [2, "2"],
]);

const s1 = v => s(v, [
    [0, () => { return "0"; }],
    [1, () => { return "1"; }],
    [2, () => { return "2"; }],
]);

const s2 = v => s(v, [
    [0, () => "0"],
    [1, () => { return "1"; }],
    [2, () => "2"],
    [3, () => { return "3"; }],
]);

test("works when all values are expressions", t => {
    for (const v of range([0,,2])) {
        t.is(v.toString(), s0(v));
    }
});


test("works when all values are functions", t => {
    for (const v of range([0,,2])) {
        t.is(v.toString(), s1(v));
    }
});

test("works when values are mixed expressions and functions", t => {
    for (const v of range([0,,3])) {
        t.is(v.toString(), s2(v));
    }
});
