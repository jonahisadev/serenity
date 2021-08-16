describe("correct behavior", () => {
    test("length is 1", () => {
        expect(Temporal.Calendar.prototype.fields).toHaveLength(1);
    });

    test("basic functionality", () => {
        const calendar = new Temporal.Calendar("iso8601");
        const array = ["foo", "bar", "baz"];
        const fields = calendar.fields(array);
        expect(fields).toEqual(array);
        expect(fields).not.toBe(array);
    });
});

describe("errors", () => {
    test("this value must be a Temporal.Calendar object", () => {
        expect(() => {
            Temporal.Calendar.prototype.fields.call("foo");
        }).toThrowWithMessage(TypeError, "Not a Temporal.Calendar");
    });

    test("iterator values must be strings", () => {
        const calendar = new Temporal.Calendar("iso8601");
        for (const value of [123, null, undefined, true, {}]) {
            expect(() => {
                calendar.fields([value]);
            }).toThrowWithMessage(TypeError, "FIXME: Add a string for this error.");
        }
    });
});