import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/menu";

const featured = menuItems.filter((item) => item.featured).slice(0, 4);

export function SignatureItems() {
  return (
    <section className="section-shell bg-paper">
      <div className="content-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Signature food showcase"
            title="Cravings with poster energy."
            copy="Food previews use sourced item/category names only. Item-level prices stay out until the official menu is supplied."
          />
          <ButtonLink href="/menu" variant="blue">
            Full Menu
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {featured.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.06}
              className={index === 0 ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3"}
            >
              <article className="group relative min-h-[340px] overflow-hidden rounded-[2rem] bg-ink text-paper shadow-poster">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-black uppercase text-ink">
                    {item.category}
                  </p>
                  <h3 className="display-type text-5xl">{item.name}</h3>
                  <p className="mt-3 max-w-md text-sm font-bold leading-6 text-paper/75">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-paper/15 px-3 py-1 text-xs font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-paper backdrop-blur">
                  Temporary image
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
