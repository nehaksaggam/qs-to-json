import queryStringToJSON from "./queryStringToJSON";

test('parses and splits', () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: '1',
        b: '2'
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('parses and splits', () => {
    const input = "a[]=1&a[]=2";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1", "2"] };
    expect(output).toStrictEqual(expectedOutput);
});

test('parses and splits', () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: 1,
        b: 2
    };
    expect(output).not.toStrictEqual(expectedOutput);
});