
export const setCookie = ( name: string, value: string ) => { // TODO: allow options to be passed in here
    if ( ! name || typeof window === 'undefined' ) {
        return null;
    }

    const options = {
        path: '/',
        expires: 30,
        secure: true
    }

    const expiryDate = new Date();
    expiryDate.setTime( expiryDate.getTime() + options.expires * 24 * 60 * 60 * 1000 )

    const cookieValue = encodeURIComponent( value );
    const cookieName = encodeURIComponent( name );

    const cookie = [
        `${cookieName}=${cookieValue}`,
        `expires=${expiryDate.toUTCString()}`,
        `path=${options.path}`,
        `SameSite=Lax`
    ];

    document.cookie = cookie.join( ';' );
}