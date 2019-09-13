export function hex2rgb(hex, out) {
    out = out || [];

    out[0] = ((hex >> 16) & 0xFF) / 255;
    out[1] = ((hex >> 8) & 0xFF) / 255;
    out[2] = (hex & 0xFF) / 255;

    return out;
}

export function hex2string(hex) {
    hex = hex.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;

    return `#${hex}`;
}

export function string2hex(string) {
    if (typeof string === 'string' && string[0] === '#') {
        string = string.substr(1);
    }

    return parseInt(string, 16);
}

export function rgb2hex([r, g, b]) {
    return Number('0x' + (r << 16 | g << 8 | b).toString(16));
}

export function string2RGBA(source) {
    const match = source.match(/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/);
    return match ? {
        r: Number(match[1]),
        g: Number(match[2]),
        b: Number(match[3]),
        a: Number(match[4]),
    } : {};
}
