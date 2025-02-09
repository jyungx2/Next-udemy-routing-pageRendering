"use client"; // useEffect hook is a hook that needs to run on the client-side.

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // One way of loading data in a NextJS app(we could use in any React App).
  // But not the best way of loading data when using NextJS.
  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("http://localhost:8080/news");

      if (!res.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }

      const news = await res.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
