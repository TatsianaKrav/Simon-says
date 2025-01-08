import { easyLevel, hardLevel, mediumLevel } from "./keyboardVar";

export function setCurrentKeyboard(level) {
    let chars = [];

    if (level === 'Easy') {
        chars = [...easyLevel];
    } else if (level === 'Medium') {
        chars = [...mediumLevel];
    } else if (level === 'Hard') {
        chars = [...hardLevel];
    }

    return chars;
}