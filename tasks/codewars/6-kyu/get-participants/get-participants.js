/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.
However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

Джонни фермер и он ежегодно проводит съезд фермеров-свеклодовод "Бросьте свеклу".
Каждый год он фотографирует, как фермеры обмениваются рукопожатиями. Джонни знает, что ни один фермер не обменивается
рукопожатием больше одного раза. Он также знает, что некоторые из возможных комбинаций рукопожатий могут не произойти.
Однако Джонни хотел бы узнать минимальное количество людей, принявших участие в этом году просто подсчитав все рукопожатия.
Помогите Джонни, написав функцию, которая принимает количество рукопожатий и возвращает минимальное количество людей,
необходимое для выполнения этих рукопожатий (пара фермеров обменивается рукопожатиями только один раз).

Число перестановок N!
*/
const getParticipants = factorialN => {
    if (factorialN === 0) return 0;
    if (factorialN % 2 !== 0) return 0;

    let result = factorialN;
    let divider = 2;

    for (divider; divider > result; divider++) {
        if (result%divider !== 0) break;

        result = result / divider;
    }

    const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
    if (factorialN === factorial(divider)) {
        return divider;
    }
}

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
console.log(getParticipants(6));
console.log(getParticipants(7));