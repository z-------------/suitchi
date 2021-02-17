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

const s3 = v => s(v, [
    [0, "0"],
    [[1, 2], "3"],
]);

const s4 = v => s(v, [
    [0, "0"],
    [1, "1"],
    [2, "2"],
    "?",
]);

const s5 = v => s(v, [
    [0, "0"],
    (x) => { return `${x}?`; },
]);

const s6 = v => s(v, [
    [n => !(n % 2), true],
    false,
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

test("works when cases are mixed single and multiple", t => {
    t.is("0", s3(0));
    t.is("3", s3(1));
    t.is("3", s3(2));
});

test("returns undefined when no match", t => {
    t.is(undefined, s0(3));
});

test("returns default value when no match", t => {
    t.is("?", s4(3));
});

test("default value supports dynamic values", t => {
    t.is("3?", s5(3));
});

test("works with case functions", t => {
    t.is(true, s6(2));
    t.is(false, s6(3));
});
