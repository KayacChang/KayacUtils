export * from './dev';
export * from './dom';
export * from './format';
export * from './time';
export * from './check'

export function fetchJSON(url) {
    return fetch(url).then((res) => res.json());
}
