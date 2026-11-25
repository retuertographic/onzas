import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "./posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <Link href={`/novedades/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden>
        <Image
          src={post.cover}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.06em] text-onzas-ink">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <time dateTime={post.date} className="text-[12px] uppercase tracking-[0.06em] text-onzas-body">
          {formatDate(post.date)}
        </time>
        <h3 className="mt-2 text-[18px] font-normal leading-[1.3] text-onzas-ink">
          <Link href={`/novedades/${post.slug}`} className="transition-colors hover:text-onzas-body">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-[14px] leading-[1.55] text-onzas-body">{post.excerpt}</p>
        <Link
          href={`/novedades/${post.slug}`}
          className="mt-auto pt-4 text-[13px] font-normal uppercase tracking-[0.06em] text-onzas underline decoration-onzas-light decoration-2 underline-offset-4 transition-colors hover:decoration-onzas"
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}
