const solve = async (array) => {
    if(!Array.isArray(array)) {
        throw new Error('Это вообще то не массив');
    }

    let sequenceCount = 0;
    let str = "";

    for (let i = 0; i < array.length; i = i + 1) {
        while (i < array.length - 1 && array[i] + 1 === array[i + 1]) {
            sequenceCount = sequenceCount + 1;
            i = i + 1;
        }

        if(sequenceCount === 0) {
          str += array[i] + ",";  
        }

        if(sequenceCount === 1) {
            str += array[i-1] + "," + array[i] + ",";   
            sequenceCount = 0; 
        }

        if(sequenceCount > 1) {
            str += array[i-sequenceCount] + "-" + array[i] + ",";   
            sequenceCount = 0;
        }
    }

    const result = str.slice(0,-1);
    return result;
}

module.exports = {
    solve,
}