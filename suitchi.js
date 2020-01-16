/**
 * @param expr {*}
 * @param mappings {[*, *][]}
 */
const suitchi = function(expr, mappings) {
    for (const [caseExpr, val] of mappings) {
        if (typeof caseExpr === "object" ? caseExpr.includes(expr) : caseExpr === expr) {
            return typeof val === "function" ? val() : val;
        }
    }
    const lastMapping = mappings[mappings.length - 1];
    if (lastMapping && lastMapping.length === 1) return lastMapping[0];
};

module.exports = suitchi;
