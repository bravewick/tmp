/**
 *  Fisher - Yates Shuffle
 */
function fyShuffle() {
    var direction = [1, 2, 3, 4],
        i = direction.length - 1,
        j = 0;
    for (i; i > 0; i = i - 1) {
        j = Math.floor(Math.random() * i);

        direction[i] = direction[i] + direction[j];
        direction[j] = direction[i] - direction[j];
        direction[i] = direction[i] - direction[j];
    }
    return direction;
}