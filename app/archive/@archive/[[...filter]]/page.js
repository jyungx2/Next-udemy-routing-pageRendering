import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

// 1. 동적 라우트 추가
// 사용자가 특정 연도를 선택할 수 있도록 동적 라우트 세그먼트를 추가하여, URL에서 선택한 연도를 받아올 수 있도록 합니다.

// 3. 뉴스 필터링 및 출력
// 선택된 연도의 뉴스만 필터링해서 출력합니다. `params.year`를 통해 선택된 연도를 얻고,
// `getNewsForYear` 함수를 사용하여 해당 연도의 뉴스만 필터링하여 출력합니다.

// const news = getNewsForYear(newsYear);
// return <NewsList news={news} />;

export default function FilteredNewsPage({ params }) {
  const filter = params.filter; // filter method holds an 'array' of all the matched path segments.
  // console.log(filter); // ['2024']

  const selectedYear = filter?.[0];
  // filter ? filter[0] : undefined
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear); // links 변수를 availableYears -> 선택된 Years에 대한 availableMonths으로 변경!
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
