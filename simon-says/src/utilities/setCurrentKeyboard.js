import { easyLevel, hardLevel, mediumLevel } from "./keyboardVar";

export function setCurrentKeyboard(level) {

    if (level === 'Easy') {
        return easyLevel;
    } else if (level === 'Medium') {
        return mediumLevel;
    } else if (level === 'Hard') {
        return hardLevel;
    }

    return false;
}