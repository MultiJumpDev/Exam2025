import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Globe, Code, Shield, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageFooter } from "@/components/page-footer"

export default function StandardsPage() {
  const technologies = [
    {
      category: "Socle Fondamental",
      items: [
        { name: "HTML et XHTML", description: "Langages de balisage pour structurer le contenu de manière sémantique" },
        { name: "CSS", description: "Feuilles de style en cascade pour la présentation et la mise en forme visuelle" },
        { name: "DOM et JavaScript", description: "Représentation structurée du document et manipulation dynamique" },
      ],
    },
    {
      category: "Communication et Données",
      items: [
        { name: "HTTP", description: "Protocole de communication fondamental du Web" },
        { name: "URI", description: "Système d'adressage pour identifier les ressources" },
        { name: "XML", description: "Langage de balisage pour structurer et échanger des données" },
        { name: "AJAX", description: "Technique pour créer des applications Web dynamiques" },
        { name: "RDF", description: "Modèle pour décrire les ressources et les métadonnées" },
      ],
    },
    {
      category: "Médias et Graphisme",
      items: [
        { name: "PNG", description: "Format d'image matricielle standardisé" },
        { name: "SVG", description: "Format basé sur XML pour les graphiques vectoriels" },
        { name: "SMIL", description: "Langage pour la synchronisation de contenus multimédias" },
      ],
    },
  ]

  const organizations = [
    { name: "IETF", role: "Protocoles", description: "Internet Engineering Task Force" },
    {
      name: "W3C",
      role: "Langages de balisage, présentation, accessibilité",
      description: "World Wide Web Consortium",
    },
    { name: "ISO & Unicode", role: "Codages de caractères", description: "Standards internationaux" },
    { name: "Ecma International", role: "JavaScript", description: "Standardisation ECMAScript" },
    { name: "IANA", role: "Noms de domaine, types MIME", description: "Internet Assigned Numbers Authority" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
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
            Standards du Web
          </h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-5xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Les Standards du Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Le Pilier de la Cohérence Numérique</p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 animate-fade-in animation-delay-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2" style={{ fontFamily: "var(--font-manrope)" }}>
              <Globe className="w-6 h-6 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <p>
              Les standards du Web constituent un ensemble de technologies et de protocoles formels qui régissent le
              fonctionnement du World Wide Web. Loin d'être de simples contraintes techniques, ils représentent le
              fondement stratégique d'un Web interopérable, cohérent et accessible à tous.
            </p>
            <p>
              Sans ces règles communes, l'écosystème numérique serait rapidement fragmenté, chaque navigateur et chaque
              technologie imposant ses propres règles, créant ainsi un chaos incompatible et inefficace.
            </p>
          </CardContent>
        </Card>

        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
            L'Écosystème Technologique
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {technologies.map((tech, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                  {tech.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-3">
                        <Code className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Organizations */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
            Les Gardiens de la Standardisation
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {organizations.map((org, index) => (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {org.name}
                  </CardTitle>
                  <CardDescription className="text-sm">{org.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-muted-foreground">
                    <span className="text-foreground">Responsabilité :</span> {org.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2" style={{ fontFamily: "var(--font-manrope)" }}>
              <Shield className="w-6 h-6 text-primary" />
              Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <p>
              Les standards du Web sont bien plus que de simples directives techniques. Ils incarnent une vision
              collaborative et structurée du Web, assurant que celui-ci reste une plateforme universelle, fonctionnelle
              et accessible pour tous. C'est grâce à cette gouvernance partagée que le Web peut continuer à évoluer de
              manière cohérente, fiable et ouverte.
            </p>
          </CardContent>
        </Card>
      </main>

      <PageFooter />
    </div>
  )
}
