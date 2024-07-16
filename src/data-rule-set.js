class DataRuleSet {
    #ruleSet;
    constructor(ruleset) {
        this.#ruleSet = ruleset;
    }
    validate(input) {
        for (let key in input) {
            const valueRules = this.#ruleSet[key];
            const value = input[key];
            for (let rule of valueRules) {
                if (!rule(value)) {
                    console.log(rule);
                    console.log(input[key]);
                    return false;
                }
            }
        }
        return true;
    }
}

export default DataRuleSet;