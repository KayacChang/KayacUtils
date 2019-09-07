
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

export * from './pageLoad';
export {throttle, debounce};

export function throttleBy(func) {
    let skip = false;

    return async function call(...args) {
        if (skip) return;

        skip = true;

        const result = await func(...args);

        skip = false;

        return result;
    };
}
