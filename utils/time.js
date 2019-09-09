/**
 *  wait ms milliseconds
 *  @param {number} ms
 *  @return {Promise}
 */
export function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

/**
 *  wait for next frame
 *  @return {Promise}
 */
export function nextFrame() {
    return new Promise((r) => requestAnimationFrame(r));
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
