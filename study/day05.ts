class Dict {
  private dictionary: { [key: string]: string };

  constructor() {
    this.dictionary = {};
  }

  //add(): 단어 추가
  add(eng: string, kor: string): void {
    //단어 없을 경우
    if (this.dictionary[eng] === undefined) {
      this.dictionary[eng] = kor;
    }
    return;
  }

  //get(): 단어 정의 리턴
  get(eng: string): string {
    return this.dictionary[eng];
  }

  //delete(): 단어 삭제
  delete(eng: string): void {
    //단어 있을 경우
    if (this.dictionary[eng] !== undefined) {
      delete this.dictionary[eng];
    }
    return;
  }

  //update(): 단어 업데이트
  update(eng: string, kor: string): void {
    //단어 있을 경우
    if (this.dictionary[eng] !== undefined) {
      this.dictionary[eng] = kor;
    }
    return;
  }

  //showAll(): 모든 단어 보여주기
  showAll(): void {
    const engWords = Object.keys(this.dictionary);
    engWords.forEach((e) => console.log(`${e}: ${this.dictionary[e]}`));
    return;
  }

  //count(): 딕셔너리 총 수 반환
  count(): number {
    return Object.keys(this.dictionary).length;
  }

  //upsert(): 단어 있을 시 새로운 뜻, 없으면 추가 == 같은 작업
  upsert(eng: string, kor: string): void {
    this.dictionary[eng] = kor;
    return;
  }

  //exist(): 존재 여부
  exists(eng: string): boolean {
    if (this.dictionary[eng] == undefined) return false;
    else return true;
  }

  //bulkAdd: 여러개의 단어 한꺼번에 추가
  /*
    배열 안에 여러개의 Dictionary가 있는 것이므로 forEach로 각각의 Dictionary 원소에 접근한 뒤,
    Dictionary 원소의 key와 value를 Object.entries로 뽑아옴, 이 경우 반환값은 2차원배열이다.
    딕셔너리 원소 한개씩 접근하여 이차원배열의 행은 1개밖에 없으므로 첫번째 인덱스는 0으로 고정하면 된다
    */
  bulkAdd(bulk: { [key: string]: string }[]): void {
    bulk.forEach((e) => {
      let voca = Object.entries(e);
      this.add(voca[0][0], voca[0][1]);
    });
  }

  //bulkDelete: 여러개의 단어 한번에 삭제
  //bulkAdd와 다르게 배열로만 받으므로 bulkAdd보다 간편
  bulkDelete(engs: string[]): void {
    engs.forEach((e) => {
      this.delete(e);
    });
  }
}

const myDict = new Dict();
myDict.add("apple", "사과");
myDict.add("typescript", "자바스크립트");
myDict.add("glasses", "안경");
myDict.add("table", "탁자");
myDict.add("chuseok", "추석");

console.log(myDict.get("apple")); //있는단어
myDict.get("hahaha"); //없는단어(오류 발생여부 확인)

myDict.delete("chuseok"); //있는단어, 딕셔너리 4개로 줄어듦
myDict.delete("kimchi"); //없는단어(오류 발생여부 확인)

myDict.update("typescript", "타입스크립트"); //있는단어
myDict.update("happy", "행복한"); //없는단어

myDict.showAll();

console.log(`딕셔너리의 길이: ${myDict.count()}`);

myDict.bulkAdd([{ computer: "컴퓨터" }, { cat: "고양이" }, { dog: "강아지" }]);
myDict.showAll();

myDict.bulkDelete(["apple", "table"]);
myDict.showAll();
