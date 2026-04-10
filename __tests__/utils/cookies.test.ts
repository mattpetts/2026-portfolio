import { setCookie } from "@/app/utils/cookies";

describe('setCookie', () => {
    test('return null if no cookie name is provided', () => {
        expect(setCookie()).toBe(null);
        expect(setCookie(false)).toBe(null);
    });

    test('sets a cookie with the correct name and value', () => {
        setCookie('foo', 'bar');
        expect(document.cookie).toContain('foo=bar');
    });
});