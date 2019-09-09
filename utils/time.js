/**
 * wait by time
 * @param ms
 * @return {Promise<number>}
 */
export function wait(ms) {
    return new Promise(execute);

    function execute(resolve) {
        const id = setTimeout(() => resolve(id), ms);
    }
}

/**
 * wait by frame
 * @return {Promise<number>}
 */
export function nextFrame() {
    return new Promise(execute);

    function execute(resolve) {
        const id = requestAnimationFrame(() => resolve(id));
    }
}

/**
 * Return a function which represents the time elapsed since Timer get call.
 * @return {function(): number} milliseconds.
 */
export function timer() {
    const start = performance.now();

    return function get() {
        return performance.now() - start;
    };
}

export async function waitByFrameTime(time, condition = () => false) {
    const duration = timer();

    while (true) {
        await nextFrame();

        const dur = duration();

        if (dur >= time || condition(dur)) return;
    }
}
