import { DUMMY_NEWS } from "@/dummy-news";
import sql from "better-sqlite3";

// data.db 파일을 루트로 옮긴 후, 이곳에서 바로 데이터 가져오기 위해 better-sqlite3 설치
const db = sql("data.db");

// 2. 연도 목록 출력
// `news.js` 파일을 `lib` 폴더에 추가하여 뉴스 데이터를 다루는 유틸리티 함수를 작성하고,
// 그 함수를 사용해 뉴스에 포함된 연도 목록을 출력할 수 있게 합니다.

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all(); // SQLite 덕분에 async-await 코드 생략 가능!
  // 의도적인 딜레이 설정: Loading state 핸들링 구현 -> getAllNews는 비동기함수(async 추가)
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
