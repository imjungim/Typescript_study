//단어를 추가하고, 찾기, 삭제하는 메소드 생성
type Words = {
  //object의 type선언 property에대해 type만 알때 사용
  [key:string] : string
}

// let dict: Words = {
//   "potato": "food"//type을 string에 맞춰사용
// }

class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }
  add(word: Word) { //Word class를 type 사용
    if (this.words[word.term] === undefined) { //주어진 단어가 아직 사전에 존재하지 않음
      this.words[word.term] = word.def
    }
  }
  def(term: string) {
    return this.words[term]
  }
}

class Word {
  constructor(
    public term: string,
    public def : string
  ){}
}

const kimchi = new Word("kimchi", "한국 음식");
const pizza = new Word("pizza", "이탈리아 음식" )
const dict = new Dict()
dict.add(kimchi);
dict.def("kimchi");
