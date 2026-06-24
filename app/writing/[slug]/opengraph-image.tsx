import { ImageResponse } from "next/og";
import { getAllSlugs, getPost } from "@/lib/writing";

export const alt = "Yash Kothari — Writing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.title ?? "Writing";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf9f7",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            color: "#2563eb",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#2563eb",
              borderRadius: 5,
              marginRight: 18,
            }}
          />
          <div>yashkothari.ca</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 1010,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#6b6b6b" }}>
          Yash Kothari
        </div>
      </div>
    ),
    { ...size },
  );
}
