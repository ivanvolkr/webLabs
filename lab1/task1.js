function combinations(array, k){
    let m = [];
    let combinations = [];
    let indices = [];    //хуй знает, разобраться
    let len = array.length;
    function run(level) {     // функция поиска всех комбинаций
        for(let i = 0; i < len; i++) {    // увеличить НА 1 ПОСЛЕ ИТЕРАЦИИ ЦИКЛА, ЦИКЛ ВЫПОЛНИТСЯ LEN РАЗ
            if(!indices[i]){
                indices[i] = true;
                combinations[level] = array[i];
                if(level < k - 1){
                    run(level + 1, i + 1);
                } else {
                    m.push(([]).concat(combinations));   //PUSH - ДОБАВИТЬ ЭЛЕМЕНТ В МАССИВз; CONTACAT - СОЕДИНЕНИЕ МАССИВОВ
                }
                indices[i] = false;
            }
        }
    }
    run(0);
    return m;
}
console.log(combinations([1, 2, 3, 4], 4));   // ВЫВЕСТИ В КОНСОЛЬ