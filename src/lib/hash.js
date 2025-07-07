import { createHash } from 'crypto';

export function hash(text) {

try {
        return createHash('sha512').update(text).digest('hex');
} catch (error) {
        return '';
    }
}


