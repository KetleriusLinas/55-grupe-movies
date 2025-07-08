export function cookieParser(req, res, next) {
    req.cookies = {};

    if (typeof req.headers.cookie !== 'string') {
        return next();
    }

    const cookieParts = req.headers.cookie
        .split(';')
        .map(s => s.trim());

    for (const cookie of cookieParts) {
        const splitIndex = cookie.indexOf('=');
        const key = cookie.slice(0, splitIndex);
        const value = cookie.slice(splitIndex + 1);

        req.cookies[key] = value;
    }

    return next();
}