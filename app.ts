class JukeBox {
  //   private songRequestQueue;
  private songRequestQueue: SongRequest[] = [];

  constructor() {
    console.log("주크박스 생성");
    // this.songRequestQueue: SongRequest[] = [];
    //   constructor(songRequestQueue) {
    // this.songRequestQueue.push(songRequestQueue);
    // this.add(songRequestQueue);
    // this.songRequestQueue = songRequestQueue;
  }

  public play(
    type: boolean | string = false,
    genre: boolean | string = false,
    singer: boolean | string = false
  ): void {
    // type 있으면 나중에 들어간 노래부터 재생
    if (type && !genre && !singer) {
      console.log("나중에 들어간 노래부터 삭제");
      const playingSong = this.songRequestQueue.pop();
      console.log(
        `신청 고객 :${playingSong.customerName}, 곡 소개: ${playingSong.playList}`
      );
    } else if (!type && !genre && !singer) {
      console.log("순서대로 삭제");
      const playingSong = this.songRequestQueue.shift();
      console.log(
        `신청 고객 :${playingSong.customerName}, 곡 소개: ${playingSong.playList}`
      );
    }

    if (genre && !type && !singer) {
      console.log("특정 장르로 삭제");
      for (let i = 0; i < this.songRequestQueue.length; i++) {
        if (this.songRequestQueue[i].playList.genre === genre) {
          delete this.songRequestQueue[i];
          break;
        }
      }
    }

    if (singer && !genre && !type) {
      for (let i = 0; i < this.songRequestQueue.length; i++) {
        if (this.songRequestQueue[i].playList.singer === singer) {
          delete this.songRequestQueue[i];
          break;
        }
      }
    }

    console.log("남은 노래", this.songRequestQueue);
  }

  public add(songRequestQueue: SongRequest): void {
    this.songRequestQueue.push(songRequestQueue);
  }

  public remove(
    title: boolean | string = false,
    customerName: boolean | string = false
  ): void {
    console.log("삭제 전", this.songRequestQueue);

    if (title && !customerName) {
      //   console.log("제목으로 삭제");
      this.songRequestQueue = this.songRequestQueue.filter((e) => {
        return e.playList.title !== title;
      });
    }

    if (customerName && !title) {
      //   console.log("고객이름으로 삭제");

      this.songRequestQueue = this.songRequestQueue.filter((e) => {
        return e.customerName !== customerName;
      });
    }

    console.log("삭제 후 :", this.songRequestQueue);
  }
}

class SongRequest {
  playList: Song;
  customerName: string;

  constructor(playList: Song, customerName: string) {
    this.playList = playList;
    this.customerName = customerName;
  }
}

class Song {
  genre: string;
  title: string;
  singer: string;

  constructor(genre: string, title: string, singer: string) {
    this.genre = genre;
    this.title = title;
    this.singer = singer;
  }
}

const song1 = new Song("락", "락노래", "윤도현밴드");
const song2 = new Song("팝", "Pysical", "두아리파");
const song3 = new Song("팝", "Sugar", "마룬파이브");
const songRequest1 = new SongRequest(song1, "김도한");
const songRequest2 = new SongRequest(song2, "백두텍");
const songRequest3 = new SongRequest(song3, "한수민");

const jukebox = new JukeBox();
jukebox.add(songRequest1);
jukebox.add(songRequest2);
jukebox.add(songRequest3);

// jukebox.remove(false, "김도한");
// jukebox.remove(false, "백두텍");
// jukebox.remove("Sugar", false);

// 뒤에서부터 재생
// jukebox.play(true);
// jukebox.play(true);

// 앞에서부터 재생
jukebox.play();
// jukebox.play();

// jukebox.play(false, "팝"); // 특정 장르로 재생하기
// jukebox.play(false, false, "두아리파"); // 특정 가수로 재생하기
