let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'TELEFONO',
    'ANIMAL',
    'ADORNO',
    'INOCENTE',
    'APLAUSO',
    'ECLIPSE',
    'AMETRALLADORA',
    'PERMANENTE',
    'HIPNOTIZAR',
    'MENTIRA',
    'MASAJISTAS',
]





export function getRandomWord() {

    const randomIndex = (Math.floor (Math.random() * words.length));

    return words[randomIndex];
}