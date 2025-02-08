// 💡 병렬 라우팅(Parallel Routing)
// 병렬 라우팅을 사용하면 한 페이지에서 두 개 이상의 서로 독립적인 콘텐츠를 동시에 렌더링할 수 있다.
// 즉, 특정(ex. /archive) 경로에서 두 개의 페이지를 한 화면에 동시에 표시할 수 있는 라우팅
// 이를 활용해 /archive 페이지에서 뉴스 목록을 연도/월별로 탐색하고, 최신 뉴스 목록을 항상 유지할 수 있음
// => 즉, 과거 뉴스 탐색(archive)과 최신 뉴스(latest)를 하나의 페이지에서 동시에 볼 수 있음 &  Next.js의 병렬 라우팅 덕분에 각각의 콘텐츠를 독립적으로 관리 가능

// 1. /archive: 이 페이지는 두 개의 병렬 경로(Parallel Routes) 로 구성
// 2. @archive, @latest: 각 병렬 경로를 위한 @로 시작하는 하위 폴더 생성
// 3. 각 병렬 라우트에 개별 페이지(page.js) 추가
// 4. 레이아웃 파일(layout.js)에서 병렬 라우트 렌더링 (layout.js에서는 각 병렬 경로를 props로 전달받음)
// NextJS will add these props(@archive, @latest) automatically for 'layout' comp, If it is next to such parallel route folders.
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
