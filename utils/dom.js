export function select(query, comp) {
    comp = comp || document;

    const targets = comp.querySelectorAll(query);

    return (targets.length > 1) ? targets : targets[0];
}

export function clear(comp) {
    const elements = select('*', comp);

    if (elements) elements.forEach((el) => el.remove());
}

