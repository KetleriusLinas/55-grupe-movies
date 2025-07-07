import { createHash } from 'crypto';

export function hash(text) {

try {
        return createHash('sha256').update(text).digest('hex');
} catch (error) {
        return '';
    }
}

console.log('------', hash());
console.log('-----------', hash(5));
console.log('-----', hash(''));
console.log('-----', hash(true));
console.log('-----', hash('a'));
console.log('-----', hash('labas'));
console.log('-----', hash('labas'));
