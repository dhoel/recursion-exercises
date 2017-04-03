function countingSheep(num) {
    if (num === 0) return;
    console.log(num + " Another sheep jumps over the fence")

    return countingSheep(num - 1);
}
countingSheep(6);
