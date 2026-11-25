import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sites/ochoonzas/footer";
import { Header } from "@/components/sites/ochoonzas/header";
import { OrderButton } from "@/components/sites/ochoonzas/order-button";
import { PostCard } from "@/components/sites/ochoonzas/post-card";
import { formatDate, getPost, posts, type Block } from "@/components/sites/ochoonzas/posts";
import { WhatsappButton } from "@/components/sites/ochoonzas/whatsapp-button";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} · Ocho Onzas`, description: post.excerpt };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-[22px] font-normal leading-[1.25] text-onzas-ink">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-onzas-light">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="mt-8 border-l-[5px] border-onzas-light pl-5 italic">{block.text}</blockquote>;
    default:
      return <p className="mt-4">{block.text}</p>;
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header solid />
      <main className="flex-1 pt-16">
        <article className="px-5 pt-[50px] pb-[60px]">
          <div className="mx-auto max-w-[760px]">
            <nav aria-label="Ruta" className="text-[13px] text-onzas-body">
              <Link href="/" className="hover:text-onzas-ink">Inicio</Link>
              {" / "}
              <Link href="/novedades" className="hover:text-onzas-ink">Novedades</Link>
            </nav>
            <p className="mt-6 text-[12px] uppercase tracking-[0.08em] text-onzas-body">
              <span className="text-onzas">{post.category}</span> · <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            <h1 className="mt-3 text-[34px] font-light leading-[1.2] text-onzas-ink max-md:text-[27px]">{post.title}</h1>
            <p className="mt-4 text-[18px] font-light leading-[1.5] text-onzas-body">{post.excerpt}</p>
          </div>

          <div className="relative mx-auto mt-8 aspect-[16/9] max-w-[1080px] overflow-hidden">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 1080px) 100vw, 1080px" className="object-cover" />
          </div>

          <div className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.7] text-onzas-body">
            {post.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}

            {post.gallery && (
              <div className="mt-10 grid grid-cols-3 gap-3 max-sm:grid-cols-2">
                {post.gallery.map((g) => (
                  <a key={g.src} href={g.src} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/5] overflow-hidden">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 50vw, 250px" className="object-cover transition-transform duration-500 hover:scale-105" />
                  </a>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-onzas-light pt-6">
              {post.orders ? (
                post.orders.map((o) => <OrderButton key={o.label} category={o.category} product={o.product} label={o.label} />)
              ) : (
                <OrderButton category="productos de la tienda" label="Escríbenos por WhatsApp" />
              )}
              <Link href="/productos" className="text-[14px] text-onzas underline decoration-onzas-light underline-offset-4">
                Ver productos
              </Link>
            </div>
          </div>
        </article>

        <section className="bg-[#f7f8f8] px-5 py-[60px]">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="text-center text-[22px] font-normal uppercase text-onzas">Más novedades</h2>
            <div className="mt-8 grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/novedades" className="text-[14px] text-onzas underline decoration-onzas-light underline-offset-4">
                Ver todas las novedades
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
