import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

// 4. Parallel Routing 오류 처리
// 현재 경로에서 연도에 해당하는 뉴스 페이지를 찾지 못하는 오류가 발생합니다.
// 이는 두 개의 독립적인 경로가 동일한 페이지에 렌더링되기 때문입니다.
// 기본적으로 `latest` 경로와 `year` 경로가 함께 렌더링되지만, `year` 경로가 현재 경로에 없는 경우 오류가 발생합니다.

// 5. 해결 방법: Default.js 추가
// `default.js` 파일을 `latest` 경로에 추가하여, 경로가 매칭되지 않는 경우 기본 콘텐츠가 표시되도록 합니다.
// 이를 통해 두 개의 경로가 충돌하지 않게 하고, 항상 최신 뉴스가 표시되도록 합니다.

// 결과적으로 `/archive` 경로에서 연도를 선택하면 해당 연도의 뉴스만 보여지고,
// 그 외의 부분은 항상 최신 뉴스가 표시됩니다. 이로써 두 개의 라우트가 하나의 페이지에 독립적으로 존재하는 구조가 완성됩니다.

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
