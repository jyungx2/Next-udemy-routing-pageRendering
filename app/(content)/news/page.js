// "use client"; // useEffect hook is a hook that needs to run on the client-side.
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const res = await fetch("http://localhost:8080/news"); // you can still use fetch() directly inside of a Server-side component.
  // Because...
  // 1. It's supported by Node.js which executes that server-side code anyways.
  // 2. NextJS extends this fetch function and adds some extra caching related to features to it.

  if (!res.ok) {
    throw new Error("Failed to fetch news.");
  }
  const news = await res.json();

  // 2️⃣ Option 2: Server-side data fetching
  // useEffect를 사용해 client-side data fetching 방식을 이용: View Page Source를 클릭해 확인해보면 가져온 데이터들에 대한 코드가 보이지 않았다.
  // NextJS를 사용하는 프로젝트에서는 선호되지 않는 데이터 페칭 방식이며, Server component을 유지하면서 서버 사이드에서 바로 데이터를 가져오는 방식을 사용하는 것이 좋다.

  // 다시 말해, data fetching방식을 client-side -> server-side으로 바꾸면, 더 이상 news 변수의 존재 여부를 확인하는(데이터를 성공적으로 받아왔는지) 조건문이 필요하지 않음!
  // (= 데이터가 준비되지 않은 상태에서 컴포넌트가 렌더링되는 것을 걱정할 필요가 없음!)
  // => NewsPage 컴포넌트 전체가 async 함수이기 때문에, 결과데이터를 받아오기 전까진 현재 이 컴포넌트(JSX 코드)가 절대로 실행되지 않을 것이기 때문(=news 변수값을 무조건 계속해서 기다림)!
  // * async 컴포넌트의 주요 특징:
  // 1. 컴포넌트가 async로 선언되면, 해당 컴포넌트 내의 모든 await 작업이 완료될 때까지 렌더링이 일어나지 않습니다.
  // 2. 따라서 news = await res.json()이 완료되기 전까지는 return문의 JSX가 실행되지 않습니다.
  // ✅ 이러한 조건부 렌더링 코드를 제거할 수 있는 점은 Next.js의 Server Components의 장점 중 하나로, 데이터 fetching과 렌더링을 더 간단하고 안전하게 만들어준다.

  // 1️⃣ Option 1: Client-side data fetching
  // 이전 방식
  // let newsContent;
  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
}
