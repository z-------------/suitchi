/**
 * Emulates a switch expression.
 * @param expr {*}
 * @param mappings {[*, *][]}
 */
const suitchi = function(expr, mappings) {
    for (const [caseExpr, val] of mappings) {
        if (caseExpr === expr) {
            return typeof val === "function" ? val() : val;
        }
    }
};

module.exports = suitchi;
