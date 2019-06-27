const func = require("./index");
const testCase = require("./test-cases")

// average test cases
test("base test case ", () => {
    expect(func.average(testCase.base.list)).toBe(testCase.base.exp.avg);
});
test("single object array (zero test included) ", () => {
    expect(func.average(testCase.single.list)).toBe(testCase.single.exp.avg);
});
test("Multiple disordered ranking", () => {
    expect(func.average(testCase.multiple.list)).toBe(testCase.multiple.exp.avg);
});
test("the boiz", () => {
    expect(func.average(testCase.theBoys.list)).toBe(testCase.theBoys.exp.avg);
});
test("invalids", () => {
    expect(func.average(testCase.invalids.list)).toBe(testCase.invalids.exp.avg);
});


// sorting test cases
test("base test case ", () => {
    expect(func.sort(testCase.base.list)).toStrictEqual(testCase.base.exp.sort);
});
test("single object array (zero test included) ", () => {
    expect(func.sort(testCase.single.list)).toStrictEqual(testCase.single.exp.sort);
});
test("Multiple disordered ranking", () => {
    expect(func.sort(testCase.multiple.list)).toStrictEqual(
        testCase.multiple.exp.sort
    );
});
test("the boiz", () => {
    expect(func.sort(testCase.theBoys.list)).toStrictEqual(testCase.theBoys.exp.sort);
});
test("invalids", () => {
    expect(func.sort(testCase.invalids.list)).toStrictEqual(
        testCase.invalids.exp.sort
    );
});