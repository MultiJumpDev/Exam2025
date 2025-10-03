"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Network, Server, Users, RefreshCw, DollarSign } from "lucide-react"
import { PageFooter } from "@/components/page-footer"

export default function NDDPage() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)

  const domainExample = "tour-eiffel.paris.fr"
  const domainParts = [
    { label: "tour-eiffel", type: "Sous-domaine", color: "bg-purple-100 text-purple-700" },
    { label: "paris", type: "Domaine 2e niveau", color: "bg-blue-100 text-blue-700" },
    { label: "fr", type: "TLD (ccTLD)", color: "bg-emerald-100 text-emerald-700" },
  ]

  const tldTypes = [
    {
      name: "ccTLD",
      description: "Domaines nationaux",
      examples: [".fr", ".be", ".uk", ".de"],
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      name: "gTLD",
      description: "Domaines génériques",
      examples: [".com", ".org", ".net"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "new gTLD",
      description: "Nouvelles extensions",
      examples: [".sport", ".paris", ".bzh"],
      color: "bg-purple-50 border-purple-200",
    },
  ]

  const actors = [
    {
      name: "ICANN",
      role: "Autorité mondiale",
      description: "Régule les noms de domaine et autorise les nouvelles extensions",
      icon: Network,
      color: "text-emerald-600",
    },
    {
      name: "Registres",
      role: "Gestionnaires de TLD",
      description: "Gèrent les domaines de premier niveau (ex: Afnic pour .fr)",
      icon: Server,
      color: "text-blue-600",
    },
    {
      name: "Registrars",
      role: "Bureaux d'enregistrement",
      description: "Intermédiaires commerciaux pour louer des noms de domaine",
      icon: Users,
      color: "text-purple-600",
    },
  ]

  const dnsSteps = [
    { step: 1, action: "Requête DNS", description: "Le navigateur demande l'IP de wikipedia.org" },
    { step: 2, action: "Serveur DNS", description: "Le serveur DNS recherche l'adresse IP" },
    { step: 3, action: "Réponse", description: "Retourne l'IP: 208.80.154.224" },
    { step: 4, action: "Connexion", description: "Le navigateur se connecte au serveur" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Link>
          </Button>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
            Noms de Domaine
          </h1>
          <div className="w-24" />
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
        {/* Introduction */}
        <section className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
            <Network className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
            Système de Noms de Domaine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprendre le fonctionnement, la structure et les acteurs du système DNS
          </p>
        </section>

        {/* Interactive Domain Structure */}
        <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5" />
                Structure Hiérarchique
              </CardTitle>
              <CardDescription>Cliquez sur chaque partie du nom de domaine pour comprendre sa fonction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-2 text-2xl font-mono">
                {domainParts.map((part, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDomain(part.label)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedDomain === part.label
                          ? "scale-110 shadow-lg " + part.color
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {part.label}
                    </button>
                    {index < domainParts.length - 1 && <span className="text-muted-foreground">.</span>}
                  </div>
                ))}
              </div>

              {selectedDomain && (
                <div className="p-4 rounded-lg bg-muted/50 animate-fade-in">
                  <p className="font-semibold">{domainParts.find((p) => p.label === selectedDomain)?.type}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedDomain === "tour-eiffel" &&
                      "Le sous-domaine identifie un service ou une section spécifique"}
                    {selectedDomain === "paris" &&
                      "Le domaine de deuxième niveau représente l'organisation ou l'entité"}
                    {selectedDomain === "fr" && "Le TLD (Top-Level Domain) indique le pays ou le type de domaine"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* TLD Types */}
        <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
            Types de Domaines de Premier Niveau
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tldTypes.map((tld, index) => (
              <Card key={index} className={`border-2 ${tld.color} transition-all hover:shadow-lg`}>
                <CardHeader>
                  <CardTitle className="text-xl">{tld.name}</CardTitle>
                  <CardDescription>{tld.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tld.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="font-mono">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Accordion */}
        <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Card>
            <CardHeader>
              <CardTitle>Documentation Complète</CardTitle>
              <CardDescription>Explorez chaque aspect des noms de domaine</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="principe">
                  <AccordionTrigger className="text-lg font-semibold">1. Principe</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed">
                    <p>
                      Un <strong>nom de domaine</strong> (NDD ou DN en anglais) est un identifiant unique utilisé sur
                      Internet pour faciliter la mémorisation et la communication de l'adresse d'un ensemble de serveurs
                      (pour un site web, des emails, etc.). Il sert à traduire une adresse IP numérique complexe (comme
                      208.80.154.224) en un format textuel simple et facile à retenir (comme wikipedia.org).
                    </p>
                    <p>
                      La structure d'un nom de domaine est <strong>hiérarchique</strong>. Il est composé de plusieurs
                      parties, appelées "labels", séparées par des points. La partie la plus à droite est le{" "}
                      <strong>domaine de premier niveau</strong> (TLD), qui est suivi par le{" "}
                      <strong>domaine de deuxième niveau</strong>, puis éventuellement par des sous-domaines.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="depot">
                  <AccordionTrigger className="text-lg font-semibold">2. Dépôt et Réservation</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed">
                    <p>
                      Le choix d'un nom de domaine est libre, mais il ne peut être acheté de manière définitive. Il
                      s'agit en réalité d'une <strong>location pour une période déterminée</strong>, allant de 6 mois à
                      10 ans, renouvelable. Cette réservation se fait auprès d'un{" "}
                      <strong>bureau d'enregistrement</strong> (registrar) ou directement auprès du registre qui gère
                      l'extension.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Cybersquattage</p>
                      <p className="text-amber-800">
                        La réservation d'un nom de domaine peut entraîner des conflits juridiques, notamment lorsqu'il
                        correspond à une marque déposée. Le cybersquattage consiste à enregistrer des noms de domaine
                        correspondant à des marques notoires dans le but de les revendre ou de nuire.
                      </p>
                    </div>
                    <p>
                      Pour se protéger, il est conseillé aux entreprises d'enregistrer leur nom de domaine dans
                      plusieurs extensions (.com, .net, etc.) et sous différentes variantes (pluriel, avec tiret, etc.).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="acteurs">
                  <AccordionTrigger className="text-lg font-semibold">3. Acteurs</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed">
                    <p>Le système des noms de domaine implique plusieurs acteurs clés :</p>
                    <div className="space-y-3">
                      {actors.map((actor, index) => {
                        const Icon = actor.icon
                        return (
                          <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center">
                                <Icon className={`w-6 h-6 ${actor.color}`} />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{actor.name}</h4>
                              <p className="text-sm text-muted-foreground mb-1">{actor.role}</p>
                              <p className="text-sm">{actor.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <p>
                      <strong>Dépositaire / Titulaire :</strong> La personne ou l'organisation qui loue et utilise le
                      nom de domaine. C'est à elle de s'assurer que le nom choisi ne porte pas atteinte aux droits d'une
                      marque.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cycle">
                  <AccordionTrigger className="text-lg font-semibold">4. Cycle de Vie et Utilisation</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed">
                    <p>Un nom de domaine est actif tant que sa location est renouvelée par son titulaire.</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            Parking de Domaine
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Redirection vers une page de liens publicitaires pour générer des revenus et amortir les
                            frais de location. Modèle économique basé sur la rémunération au clic (PPC).
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <RefreshCw className="w-5 h-5 text-blue-600" />
                            Second Marché
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Les noms de domaine peuvent être achetés et vendus, souvent à des prix élevés en fonction de
                            leur valeur potentielle et de leur attractivité commerciale.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dns">
                  <AccordionTrigger className="text-lg font-semibold">5. DNS (Domain Name System)</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed">
                    <p>
                      Le <strong>DNS (Système de Noms de Domaine)</strong> est le système qui permet de faire le lien
                      entre un nom de domaine (comme <code className="font-mono">wikipedia.org</code>) et l'adresse IP
                      numérique du serveur correspondant. C'est une infrastructure essentielle d'Internet.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-center">Processus de Résolution DNS</h4>
                      <div className="space-y-3">
                        {dnsSteps.map((step, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold">{step.action}</p>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="font-semibold text-emerald-900 mb-2">✓ Redondance</p>
                      <p className="text-emerald-800">
                        Chaque nom de domaine doit être configuré sur au moins <strong>deux serveurs DNS</strong> pour
                        garantir la disponibilité et la fiabilité du service.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Key Takeaways */}
        <section className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
            <CardHeader>
              <CardTitle>Points Clés à Retenir</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    Les noms de domaine sont <strong>loués</strong>, pas achetés (6 mois à 10 ans)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Structure hiérarchique : sous-domaine.domaine.TLD (ex: tour-eiffel.paris.fr)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Le DNS traduit les noms de domaine en adresses IP pour la navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Attention au cybersquattage : protégez vos marques avec plusieurs extensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Minimum 2 serveurs DNS requis pour chaque nom de domaine</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PageFooter />
    </div>
  )
}
