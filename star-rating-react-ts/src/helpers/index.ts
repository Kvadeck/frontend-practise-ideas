export function checkData(data: boolean) {
    if (!data) throw Error('Something went wrong!')
}

export function isEqualArr(arr1:boolean[], arr2:boolean[]) {

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

export function getStarThemeFromLocalStorage(isSelect?:boolean) {
    if (isSelect) {
        let selectDefaultValue:string = 'default';

        if(localStorage.getItem("star-theme")==='red') {
            selectDefaultValue='red';
        }
        if(localStorage.getItem("star-theme")==='gold') {
            selectDefaultValue='gold';
        }
        return selectDefaultValue;
    } else {

        // Not use boolean because defaultValue on select keeps only number and string types
        let themeValue:number = 0;

        if(localStorage.getItem("star-theme")==='red') {
            themeValue=1;
        }
        if(localStorage.getItem("star-theme")==='gold') {
            themeValue=0;
        }
        return themeValue
    }
}