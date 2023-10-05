const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((e, sum) => {
    return sum += e;
}, 0);