export function isDevMode() {
    return window.dev || process.env.NODE_ENV === 'development';
}

export function log(msg, ...args) {
    if (isDevMode()) console.log(msg, ...args);
}

export function err(msg, ...args) {
    if (isDevMode()) console.error(msg, ...args);
}

export function table(msg, ...args) {
    if (isDevMode()) console.table(msg, ...args);
}
