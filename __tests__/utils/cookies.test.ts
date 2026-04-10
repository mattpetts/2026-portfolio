import { setCookie } from "@/utils/cookies";

describe('setCookie', () => {
    test('sets a cookie with the correct name and value', () => {
        setCookie('foo', 'bar');
        expect(document.cookie).toContain('foo=bar');
    });
});