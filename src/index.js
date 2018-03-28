const OPEN_TAG = '###OPEN_TAG_TOKEN###';
const CLOSE_TAG = '###CLOSE_TAG_TOKEN###';

const OPEN_TAG_REGEXP = new RegExp(OPEN_TAG, 'g');
const CLOSE_TAG_REGEXP = new RegExp(CLOSE_TAG, 'g');

export function format(text) {
    return 'string' !== typeof text ? '' : text
        .replace(/<c=#([^>]+)>([^]*?)<\/?c>/gm, 
            `${OPEN_TAG}span class="color-format" style="color:#$1"${CLOSE_TAG}$2${OPEN_TAG}/span${CLOSE_TAG}`)
        .replace(/<c[=@][@=]?([^>]+)>([^]*?)<\/?c\/?>/gm,
            `${OPEN_TAG}span class="color-format--$1"${CLOSE_TAG}$2${OPEN_TAG}/span${CLOSE_TAG}`)
        .replace(/\n/g, `${OPEN_TAG}br/${CLOSE_TAG}`)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(OPEN_TAG_REGEXP, '<')
        .replace(CLOSE_TAG_REGEXP, '>');
}   