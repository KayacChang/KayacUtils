import {nextFrame} from "./time";

/**
 * Execute a function repeatedly when frame change.
 * @param {Function} func
 * @param {any} args
 * @return {stop} : Function to stop the loop
 */
export function frameLoop(func, ...args) {
    let loop = true;

    (async function execute() {
        await nextFrame();

        func(...args);

        if (loop) execute();
    })();

    return stop;

    function stop() {
        loop = false;
    }
}
