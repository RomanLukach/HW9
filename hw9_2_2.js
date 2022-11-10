// Export by default
const calculateBonus2 = (a, b) => {
    let bonus2;
    const sum = a + b;
    debugger;
// Script execution stopped at this point and actual result of parameters are displayed in debuging window (a, b, sum)
// Script awaiting confirmation for execution either up to next "debugger" or up to script finish
    sum > 50 ? (bonus2 = 50) : (bonus2 = sum);
    debugger;
// Script execution stopped at this point and actual result of parameters are displayed in debuging window (a, b, sum, bonus)
// Script awaiting confirmation for execution either up to next "debugger" or up to script finish
    return bonus2;
    };

export default calculateBonus2