/**
 * Emulates a switch expression.
 * @param expr {*}
 * @param mappings {[*, *][]}
 */
const suitchi = function(expr, mappings) {
    for (const [caseExpr, val] of mappings) {
        if (typeof caseExpr === "object" ? caseExpr.includes(expr) : caseExpr === expr) {
            return typeof val === "function" ? val() : val;
        }
    }
};

module.exports = suitchi;
