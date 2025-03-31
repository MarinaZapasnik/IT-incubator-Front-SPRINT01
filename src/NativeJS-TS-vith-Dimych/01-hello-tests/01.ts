export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentense: string) {
    const words = sentense
        .split(' ') // Разбиваем строку по пробелам
        .map(word => word.replace(/[.,!?-]/g, '').toLowerCase()) // Убираем знаки препинания и приводим к lowercase
        .filter(word => word !== ''); // Удаляем пустые строки

        return words

}