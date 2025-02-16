import { easyLevel, hardLevel, mediumLevel } from "./keyboardVar.js";

export function setCurrentKeyboard(level) {

    if (level === 'Easy') {
        return easyLevel;
    } else if (level === 'Medium') {
        return mediumLevel;
    } else if (level === 'Hard') {
        return hardLevel;
    }
}