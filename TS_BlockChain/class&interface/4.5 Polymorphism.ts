//polymorphism 다형성 - 다른 모양의 코드를 가질 수 있게 해줌.

interface SStorage<T> {
  [key:string] : T
}

class LocalStorage<T> {
  private storage: SStorage<T> = {}
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key]
  }
  get(key: string): T{
    return this.storage[key]
  }
  clear() {
    this.storage = {}
  }
}

const stringStorage = new LocalStorage<string>()
stringStorage.get("key")
stringStorage.set("hello","how are you")
const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("xxx")
booleansStorage.set('hello', true) //value -> string일 수 없음