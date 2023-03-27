export function checkData(data: boolean) {
    if (!data) throw Error('Something went wrong!')
}

export function isEqualArr(arr1:boolean[], arr2:any) {

    if (arr1.length !== arr2.length) {
        throw new Error('Length is different!')
    }

    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}