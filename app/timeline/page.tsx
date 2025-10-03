"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import PageFooter from "@/components/page-footer"

const timelineEvents = [
  {
    year: "1969",
    title: "ARPANET",
    description:
      "Conçu par la DARPA, ARPANET est le premier réseau à transfert de paquets de données. Le premier message, le mot « login », a été envoyé le 29 octobre 1969. Il a servi de banc d'essai à de nouvelles technologies de gestion de réseau en reliant plusieurs universités et centres de recherche américains. Il a été officiellement arrêté en 1990.",
  },
  {
    year: "1979",
    title: "Usenet",
    description:
      "Lancé publiquement en 1980, Usenet est un système en réseau de forums inventé par des étudiants. Il permettait l'échange de messages, appelés « articles », organisés en groupes de discussion hiérarchisés. Il utilisait initialement le protocole UUCP avant de devenir accessible sur Internet via NNTP.",
  },
  {
    year: "1988",
    title: "Internet Relay Chat",
    description:
      "Conçu fin août 1988 par Jarkko Oikarinen, l'IRC est un protocole de communication textuelle sur Internet. Créé pour remplacer un programme nommé MUT, il permet des discussions instantanées en groupe via des canaux ou entre deux personnes. Il a été initialement décrit dans la RFC 1459.",
  },
  {
    year: "1989",
    title: "World Wide Web",
    description:
      "Le 13 mars 1989, Tim Berners-Lee, alors informaticien au CERN, a proposé de développer un système hypertexte pour améliorer la diffusion des informations. Cette proposition a mené à la création des trois technologies de base du web : URL, HTML et HTTP. La première page web a été mise en ligne en 1990.",
  },
  {
    year: "1993",
    title: "Severe Tire Damage",
    description:
      "Le 24 juin 1993, ce groupe de rock amateur est devenu le premier à se produire en direct sur Internet. Alors que des scientifiques de Xerox PARC testaient la nouvelle technologie de diffusion en direct (MBone), ils ont retransmis la performance du groupe, qui a été visible jusqu'en Australie.",
  },
  {
    year: "1994",
    title: "Yahoo!",
    description:
      "Créé en janvier 1994 par les étudiants Jerry Yang et David Filo, Yahoo! était à l'origine un annuaire de sites web nommé Jerry and David's Guide to the World Wide Web. Face à sa popularité croissante, l'entreprise a été officiellement fondée en mars 1995 et est devenue un portail offrant de multiples services.",
  },
  {
    year: "1996",
    title: "AOL",
    description:
      "Faisant partie des premiers fournisseurs d'accès à Internet (FAI) en France avec CompuServe et Club Internet, la filiale française d'AOL a été lancée en 1996. Elle proposait la connexion à Internet, la messagerie électronique et des contenus exclusifs via un logiciel propriétaire, souvent distribué gratuitement sur des CD. En 2000, elle a popularisé l'accès bas débit illimité avec une offre à 99 FRF.",
  },
  {
    year: "1998",
    title: "Google",
    description:
      "L'entreprise a été fondée le 4 septembre 1998 par Larry Page et Sergey Brin dans un garage à Menlo Park, en Californie. Les deux étudiants de Stanford avaient commencé à travailler dès 1996 sur un moteur de recherche, initialement nommé BackRub, basé sur l'algorithme de classement PageRank qu'ils avaient développé.",
  },
  {
    year: "1999",
    title: "Napster",
    description:
      "Lancé en juin 1999 par Shawn Fanning, John Fanning et Sean Parker, Napster a été un service pionnier du partage de fichiers musicaux en pair-à-pair. Son interface conviviale a permis à des millions d'utilisateurs d'échanger facilement des chansons au format MP3, ce qui a conduit à des poursuites judiciaires et à sa fermeture en juillet 2001.",
  },
  {
    year: "2001",
    title: "Wikipédia",
    description:
      "L'encyclopédie en ligne a été lancée le 15 janvier 2001 par Jimmy Wales et Larry Sanger. Le projet a été créé pour compléter plus rapidement l'encyclopédie Nupedia, grâce au concept du wiki qui permet à tous les internautes d'écrire et de modifier des articles de manière collaborative.",
  },
  {
    year: "2002",
    title: "Friendster",
    description:
      "Fondé en mars 2002 par Jonathan Abrams, Friendster est considéré comme l'un des ancêtres des réseaux sociaux. Il était basé sur la mise en relation de personnes via leurs cercles d'amis et a été le leader des réseaux sociaux en ligne jusqu'en 2004, avant d'être dépassé par MySpace.",
  },
  {
    year: "2004",
    title: "Facebook",
    description:
      "Lancé le 4 février 2004 par Mark Zuckerberg et ses camarades, le réseau, d'abord nommé « The Facebook », était initialement réservé aux étudiants de l'université Harvard. Il s'est progressivement étendu à d'autres universités avant de devenir accessible à tous en septembre 2006.",
  },
  {
    year: "2005",
    title: "YouTube",
    description:
      "Le site a été créé en février 2005 par Steve Chen, Chad Hurley et Jawed Karim, trois anciens employés de PayPal. L'idée serait venue de la difficulté à trouver et partager des vidéos en ligne après des événements médiatiques. La plateforme a été rachetée par Google en octobre 2006 pour 1,65 milliard de dollars.",
  },
  {
    year: "2006",
    title: "X (Twitter)",
    description:
      "Créé le 21 mars 2006 par Jack Dorsey, Evan Williams, Biz Stone et Noah Glass, le service permettait d'envoyer de courts messages appelés tweets. Connu sous le nom de Twitter jusqu'en juillet 2023, il a été racheté par Elon Musk en octobre 2022 et transformé en « X ».",
  },
]

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Link>
          </Button>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
            Timeline
          </h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            L'Histoire d'Internet
          </h2>
          <p className="text-xl text-muted-foreground">
            De 1969 à aujourd'hui : les moments clés qui ont façonné le Web
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-500" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                {/* Year badge */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                  {event.year}
                </div>

                {/* Event card */}
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedEvent === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-base leading-relaxed ${selectedEvent === index ? "" : "line-clamp-2"}`}
                    >
                      {event.description}
                    </CardDescription>
                    {selectedEvent !== index && (
                      <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                        Lire plus →
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}
