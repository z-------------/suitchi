const matchCase = (expr, caseExpr) => {
    if (typeof caseExpr === "function") {
        return caseExpr(expr) === true;
    } else {
        return typeof caseExpr === "object" ? caseExpr.includes(expr) : caseExpr === expr;
    }
};

const getVal = (val, expr) => typeof val === "function" ? val(expr) : val;

const suitchi = function(expr, mappings) {
    for (let i = 0, l = mappings.length; i < l; ++i) {
        const entry = mappings[i];

        // default case
        if (i === mappings.length - 1 && !Array.isArray(entry)) {
            const val = entry;
            return getVal(val, expr);
        }

        // regular case
        const [caseExpr, val] = entry;
        if (matchCase(expr, caseExpr)) {
            return getVal(val, expr);
        }
    }
};

module.exports = suitchi;
