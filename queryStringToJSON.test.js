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

test('parses and splits', () => {
    const input = "&&&&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('parses and splits', () => {
    const input = "&&&&crsource=google to              ";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google to              "
    };
    expect(output).toStrictEqual(expectedOutput);
});


test('parses and splits', () => {
    const input = "&&     &&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});
