interface SStorage<T> {
  [key: string]: T;
}

abstract class ALocalStorage<T> {
  constructor(protected storage: SStorage<T> = {}) {}

  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage<T> extends ALocalStorage<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
    return;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

class geolocation<T> {
  //optionObj는 보조 데이터이므로 존재 유무가 함수 플로우에 영향을 주지는 않으므로 검사하지 않는다
  //사용된다면 successFn이나 errorFn에서 사용되거나 할텐데 이들의 구체적인 작동은 여기서 정의하지 않는다.
  //getCurrentPosition은 성공 시 successFn()을, 실패 시 errorFn()을 실행한다
  getCurrentPosition(
    successFn: () => void,
    errorFn?: () => void,
    optionsObj?: [
      maximumAge: number,
      timeout: number,
      enableHighAccuracy: boolean
    ]
  ): void {
    if (errorFn !== undefined) {
      try {
        successFn();
      } catch (e) {
        errorFn();
      }
    } else successFn();
  }

  //성공 시 successFn()을, 실패 시 errorFn()을 실행한다
  watchPosition(
    successFn: () => number,
    errorFn?: () => number,
    optionsObj?: any[]
  ): number {
    if (errorFn !== undefined) {
      try {
        return successFn();
      } catch (e) {
        return errorFn();
      }
    } else return successFn();
  }

  //clearWatch()는 watchPosition()이 전달하는 정수를 ID로 받고 해당 ID의 위치 변화 감지를 해제합니다.
  clearWatch(id: number): void {
    return;
  }
}
