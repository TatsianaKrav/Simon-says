export function cleanInput() {
    const input = document.querySelector('input');
    input.value = '';
    input.classList.remove('wrong');
    input.classList.remove('correct');
}