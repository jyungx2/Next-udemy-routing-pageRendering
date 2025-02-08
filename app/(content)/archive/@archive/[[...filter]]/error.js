"use client"; // This comp must be a client-comp bc errors can not just occur whilst something's happening on this server, but they may also occur from the client-side(bc something goes wrong after the page was loaded and the user is using the page..)
// => Therefore, the error fallback needs to work on both ends -> client comp는 양 쪽 모두에서 실행(작동)될 수 있는 컴포넌트이므로, 컴포넌트 가장 상위의 코드에 use client를 써줌으로써 서버 뿐만 아니라 클라이언트 쪽에서도 실행될 수 있게끔 만든것. 써주지 않는다면 그건 오직 서버 상에서만 작동!)

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
