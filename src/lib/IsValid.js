export class IsValid {
    static fields(data, schema) {
        const errors = {};

        const requiredKeysCount = Object.keys(schema).length;
        const dataKeysCount = Object.keys(data).length;

        if (dataKeysCount !== requiredKeysCount) {
            return [true, 'Atejusiuose duomenyse duomenu kiekis nesutampa su reikalaujamu duomenu apimtimi'];
        }

        for (const key in schema) {
            const funcName = schema[key];
            const func = IsValid[funcName];
            const value = data[key];
            const [err, msg] = func(value);

            if (err) {
                errors[key] = msg;
            }
        }

        return [Object.keys(errors).length > 0, errors];
    }

    static username(text) {
        const minSize = 3;
        const maxSize = 20;
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (typeof text !== 'string') {
            return [true, 'Slapyvardis turi buti tekstas'];
        }

        if (text.length < minSize) {
            return [true, `Slapyvardis turi buti ne maziau ${minSize} simboliu`];
        }

        if (text.length > maxSize) {
            return [true, `Slapyvardis turi buti ne daugiau ${maxSize} simboliu`];
        }

        if (text.includes(' ')) {
            return [true, 'Slapyvardis negali tureti tarpu'];
        }

        const foundIllegalSymbols = [];

        for (const s of text) {
            if (!allowedSymbols.includes(s) && !foundIllegalSymbols.includes(s)) {
                foundIllegalSymbols.push(s);
            }
        }

        if (foundIllegalSymbols.length) {
            return [true, `Slapyvardyje panaudotas neleistinas simbolis: ${foundIllegalSymbols.join(', ')}`];
        }

        return [false, ''];
    }

    static password(text) {
        const minSize = 12;
        const maxSize = 100;

        if (typeof text !== 'string') {
            return [true, 'Slaptazodis turi buti tekstas'];
        }

        if (text.length < minSize) {
            return [true, `Slaptazodis turi tureti ne maziau ${minSize} simboliu`];
        }

        if (text.length > maxSize) {
            return [true, `Slaptazodis turi tureti ne daugiau ${maxSize} simboliu`];
        }

        return [false, ''];
    }

    static age(number) {
        const min = 18;
        const max = 130;

        if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
            return [true, 'Amzius turi buti teigiamas sveikasis skaicius'];
        }

        if (number < min) {
            return [true, `Amzius turi tureti ne mazesnis nei ${min} metu`];
        }

        if (number > max) {
            return [true, `Amzius turi tureti ne didesnis nei ${max} metu`];
        }

        return [false, ''];
    }

    static email(text) {
        return [false, ''];
    }

    static tos(text) {
        if (typeof text !== 'string') {
            return [true, 'Sutikimas su taisyklemis turi buti teksto tipo.'];
        }

        if (text !== 'agree') {
            return [true, 'Sutikimas turi buti naudojant zodi "agree".'];
        }

        return [false, ''];
    }
}