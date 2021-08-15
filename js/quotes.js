const quotes = [
  {
    quote: " 겨울이 오면 봄이 멀지 않으리",
    author: "셸리",
  },
  {
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
    author: "데모스테네스",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다",
    author: "발타사르 그라시안",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;