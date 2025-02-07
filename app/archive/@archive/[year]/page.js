import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

// 1. 동적 라우트 추가
// 사용자가 특정 연도를 선택할 수 있도록 동적 라우트 세그먼트를 추가하여, URL에서 선택한 연도를 받아올 수 있도록 합니다.

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;

  // 3. 뉴스 필터링 및 출력
  // 선택된 연도의 뉴스만 필터링해서 출력합니다. `params.year`를 통해 선택된 연도를 얻고,
  // `getNewsForYear` 함수를 사용하여 해당 연도의 뉴스만 필터링하여 출력합니다.
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
