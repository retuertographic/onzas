import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/components/sites/ochoonzas/asset";
import { Footer } from "@/components/sites/ochoonzas/footer";
import { Header } from "@/components/sites/ochoonzas/header";
import { PostCard } from "@/components/sites/ochoonzas/post-card";
import { posts } from "@/components/sites/ochoonzas/posts";
import { WhatsappButton } from "@/components/sites/ochoonzas/whatsapp-button";

export const metadata: Metadata = {
  title: "Novedades · Ocho Onzas",
  description: "Lo que llega al mostrador, ideas para tu cocina y noticias de la tienda de Ocho Onzas en Los Realejos.",
};

export default function NovedadesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative flex h-[380px] items-center justify-center overflow-hidden max-md:h-[300px]">
          <Image src={asset("/sites/ochoonzas/img/hero-congelados.jpg")} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative px-6 pt-10 text-center text-white">
            <h1 className="font-display text-[44px] font-light uppercase leading-none max-md:text-[32px]">Novedades</h1>
            <p className="mt-4 font-display text-[20px] max-md:text-[17px]">Del mostrador a tu cocina.</p>
          </div>
        </section>

        <section className="bg-[#f7f8f8] px-5 py-[70px]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-3 gap-6 max-md:grid-cols-1 md:max-lg:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
