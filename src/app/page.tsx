import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";

import { Avatar, AvatarFallback, AvatarImage, Avatartelegram } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name.split(" ")[0]} ${DATA.name.split(" ")[1]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Sobre Mi.</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experiencia laboral</h2>
          </BlurFade>

          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Presente"}`}
                description={
                  typeof work.description === "string" ? (
                    <p>{work.description}</p>
                  ) : (
                    <>
                      <p>{work.description.intro}</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {work.description.bullets.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="Professional">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Áreas de interés profesional.</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.Professional.map((Professional, id) => (
              <BlurFade key={Professional} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={Professional}>{Professional}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* 
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Conocimientos y manejos.</h2>
          </BlurFade>

          {DATA.skills.map((skills, id) => (
            <BlurFade
              key={skills.tipo}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCardLS
                title={skills.tipo}                }
              />
            </BlurFade>
          ))}
        </div>
      </section> */}

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Conocimientos y manejos.</h2>
            <h2 className="pt-5">Programación Back - End:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.pbackend.map((pbackend, id) => (
              <BlurFade key={pbackend} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={pbackend}>{pbackend}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="pt-5">Herramientas Back-End: </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.hbackend.map((hbackend, id) => (
              <BlurFade key={hbackend} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={hbackend}>{hbackend}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="pt-5">Programación Front - End:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.pfrontend.map((pfrontend, id) => (
              <BlurFade key={pfrontend} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={pfrontend}>{pfrontend}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="pt-5">Sistemas Operativos:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.Systems.map((Systems, id) => (
              <BlurFade key={Systems} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={Systems}>{Systems}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="pt-5">Herramientas de Soporte y telecomunicaciones:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.Networking.map((Networking, id) => (
              <BlurFade key={Networking} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={Networking}>{Networking}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid gap-4 px-4 md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold items-center justify-center text-center  tracking-tighter sm:text-5xl">
                Contactame
              </h2>
              <ul className="pt-5">
                <li className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><b>LLamame: </b> (+52) 56 1074 6350</li>
                <li className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><b>Mandame Correo: </b>  <Link href="mailto: JoseRicardo_Lopezb@hotmail.com">JoseRicardo_Lopezb@hotmail.com</Link></li>
                <li className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><b>LinkedIn: </b>  <Link href="www.linkedin.com/in/ricardolopezb">José Ricardo López Bermudez</Link></li>
              </ul>
            </div>
            <h2 className="pt-8 items-center justify-center text-center text-xl font-bold">Conoce a mi Bot de Telegram</h2>
            <h2 className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed items-center justify-center text-center">
              Dale click en la imagen o escanea el QR..
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY} className="flex justify-center">
            <Avatartelegram className="size-128">
              <Link href={DATA.telegram} target="_blank" rel="noopener noreferrer">
                <AvatarImage alt={DATA.name} src={DATA.telegramQR} />
              </Link>
              <AvatarFallback>{DATA.telegram}</AvatarFallback>
            </Avatartelegram>
          </BlurFade>
        </div>
      </section >

      {/* 

      <section id="ubication">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Ubicación</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="mt-4 w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Mapa de Ciudad de México"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60253.43035124957!2d-99.20322265!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92e6d896b01%3A0x1e0c66e8cd89a1ee!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1712345678901!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </BlurFade>
        </div>
      </section> */}

      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  projects.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
    </main >
  );
}