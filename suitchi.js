const matchCase = (expr, caseExpr) => {
    if (typeof caseExpr === "function") {
        return caseExpr(expr) === true;
    } else {
        return typeof caseExpr === "object" ? caseExpr.includes(expr) : caseExpr === expr;
    }
};

const getVal = val => typeof val === "function" ? val() : val;

/**
 * @param expr {*}
 * @param mappings {[*, *][]}
 */
const suitchi = function(expr, mappings) {
    for (let i = 0, l = mappings.length; i < l; ++i) {
        const entry = mappings[i];
        if (i === mappings.length - 1 && !Array.isArray(entry)) {
            return getVal(entry);
        }
        const [caseExpr, val] = entry;
        if (matchCase(expr, caseExpr)) {
            return getVal(val);
        }
    }
};

module.exports = suitchi;
