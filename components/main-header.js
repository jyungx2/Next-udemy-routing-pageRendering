// "use client" // 이전에는 이 컴포넌트가 클라이언트 컴포넌트였지만, NavLink 컴포넌트(usePathname 사용)로 클라이언트 사이드 로직을 분리하여 서버 컴포넌트로 남게끔...

import NavLink from "@/components/nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* 네비게이션 링크의 활성화 상태 관리 로직은 NavLink 컴포넌트로 이동 => 불필요한 클라이언트 사이드 렌더링을 최소화, 성능 최적화! */}
            <NavLink href="/news">News</NavLink>
          </li>

          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
