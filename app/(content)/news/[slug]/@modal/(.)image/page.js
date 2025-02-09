import ModalBackdrop from "@/components/modal-backdrop";

import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  // const newsItem = DUMMY_NEWS.find(
  //   (newsItem) => newsItem.slug === newsItemSlug
  // );
  const newsItem = await getNewsItem(newsItemSlug); // useRouter(client-side) 코드 삭제 후 작성한 async-await 코드

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      {/* 
        - 원래 `<div className="modal-backdrop" onClick={router.back} />`을 사용했으나,
          `router.back()` 호출로 인해 클라이언트 컴포넌트로 변환됨.
        - async/await를 사용하는 서버 컴포넌트로 유지하려면, 
          `ModalBackdrop`을 별도 컴포넌트로 분리하여 해결.
        - 서버 컴포넌트로 돌아왔으므로, 여기에서 데이터 패칭 가능.
      */}
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
