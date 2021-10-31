import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function PageView(props) {
  const router = useRouter();

  const o_view = useSWR(
    `/api/page-views?post=${encodeURIComponent(router.pathname)}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );

  const o_vi_view = useSWR(
    `/api/page-views?post=${encodeURIComponent("/vi" + router.pathname)}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );

  const o_en_view = useSWR(
    `/api/page-views?post=${encodeURIComponent("/en" + router.pathname)}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );

  const views =
    Number.parseInt(o_view?.data?.pageViews ||  "0") +
    Number.parseInt(o_vi_view?.data?.pageViews ||  "0") +
    Number.parseInt(o_en_view?.data?.pageViews ||  "0");

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <p className="text-sm">{props.date}</p>
        <p className="text-sm">{views} views</p>
      </div>
    </React.Fragment>
  );
}
