const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const index = arr.findIndex((e) => e == 4);
const result = index != -1 ? arr.slice(index) : [];

console.log(result);

const songQueue = [
  {
    playList: {
      genre: "팝",
      title: "Sugar",
      singer: "마룬파이브",
    },
    customerName: "1번고객",
  },
  {
    playList: {
      genre: "팝",
      title: "Pysical",
      singer: "두아리파",
    },
    customerName: "2번고객",
  },
  {
    playList: {
      genre: "팝",
      title: "노스텔지아",
      singer: "두아리파",
    },
    customerName: "3번고객",
  },
];
