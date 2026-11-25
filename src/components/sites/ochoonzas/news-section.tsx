import Link from "next/link";
import { PostCard } from "./post-card";
import { posts } from "./posts";
import { SectionHeading } from "./section-heading";

/** Bloque de la portada con las tres novedades más recientes. */
export function NewsSection() {
  return (
    <section id="novedades" className="scroll-mt-16 bg-[#f7f8f8] px-5 py-[70px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="Novedades" subtitle="Lo que llega al mostrador, ideas para tu cocina y noticias de la tienda" />
        <div className="mt-[44px] grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-[40px] text-center">
          <Link
            href="/novedades"
            className="inline-block rounded-[5px] border-2 border-onzas-light px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] text-onzas transition-colors hover:bg-onzas-light"
          >
            Ver todas las novedades
          </Link>
        </div>
      </div>
    </section>
  );
}
