
class IncomeItem {
    constructor(nIncomeP, amnIncomeP) {
        this.nIncome = nIncomeP;
        this.amnIncome = amnIncomeP;
    }
    
    isValid() {
        if (this.nIncome == "" || this.amnIncome == "" || isNaN(this.amnIncome)) {
            return false;
        } 
        else {
            return true;
        }
    
    }
}
