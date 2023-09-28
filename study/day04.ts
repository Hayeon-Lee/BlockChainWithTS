//인자로 전달되는 변수들의 타입을 알 수 없어서 number로 하였습니다.

//call signatures
type Last = (arr: number[]) => number;
type Prepend = (arr: number[], item: number) => number[];
type Mix = (arr1: number[], arr2: number[]) => number[];
type Count = (arr: number[]) => number;
type FindIndex = (arr: number[], item: number) => number | null;
type Slice = (arr: number[], startIndex: number, endIndex?: number) => number[];

//function implementations

//배열의 마지막 요소를 반환합니다.
const last: Last = (arr) => {
  return arr[arr.length - 1];
};

//배열의 시작부분에 item을 넣은 뒤 배열을 return 합니다.
const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

//두 개의 배열을 하나의 배열로 섞어 반환합니다
const mix: Mix = (arr1, arr2) => {
  return arr1.concat(arr2);
};

//매개변수로 받은 배열의 길이를 반환합니다.
const count: Count = (arr) => {
  return arr.length;
};

//첫 번째 매개변수로 받은 배열에서 두 번째 매개변수로 받아온 item이 존재하는지 확인
const findIndex: FindIndex = (arr, item) => {
  const index: number = arr.indexOf(item);
  if (index !== -1) return index;
  else return null;
};

//endIndex가 들어오지 않았을 때 어떻게 하는지 정해지지 않아 끝 인덱스까지 자르기로 했습니다.
//arr을 startIndex부터 endInex까지 자름
const slice: Slice = (arr, startIndex, endIndex?) => {
  let newArray: number[];
  if (typeof endIndex === "number" && endIndex < arr.length) {
    //slice함수는 끝 인덱스를 제외하므로 +1
    newArray = arr.slice(startIndex, endIndex + 1);
    return newArray;
  }
  // 길이보다 넘어갈 경우 배열 끝까지만 잘라줍니다
  // 마지막 매개변수가 없으면 끝까지 잘라냅니다.
  newArray = arr.slice(startIndex);

  return newArray;
};

//test
const myArr = [1, 2, 3, 4, 5];
console.log(`last 결과값: ${last(myArr)}`);
console.log(`prepend 결과값: ${prepend(myArr, 0)}`);
console.log(`mix 결과값: ${mix(myArr, [6, 7, 8])}`);
console.log(`count 결과값: ${count(myArr)}`);
console.log(`findIndex 결과값(찾으려는 값 있을 때): ${findIndex(myArr, 3)}`);
console.log(`findIndex 결과값(찾으려는 값 없을 때): ${findIndex(myArr, 7)}`);
console.log(`slice 결과값(3번째 매개변수 있음): ${slice(myArr, 1, 3)}`);
console.log(`slice 결과값(3번째 매개변수 없음): ${slice(myArr, 1)}`);
console.log(`slice 결과값(3번째 매개변수 범위초과): ${slice(myArr, 1, 10)}`);
