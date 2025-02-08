"use client"; // usePathname 훅을 사용하기 위해 클라이언트 컴포넌트로 만들어졌다

// 현재 경로에 따라 활성화 상태가 변경되는 네비게이션 링크 컴포넌트
/*
 * 이 컴포넌트를 분리함으로써 얻는 이점:
 * 1. MainHeader는 서버 컴포넌트로 유지될 수 있음
 * 2. 클라이언트 사이드 코드를 최소한으로 유지
 * 3. 컴포넌트 재사용성 향상
 */

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
