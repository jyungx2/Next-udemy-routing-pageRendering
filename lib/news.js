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

export async function getNewsItem(slug) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
