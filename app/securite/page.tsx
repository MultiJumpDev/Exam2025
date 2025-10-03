"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Mail, Bug, Database, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PageFooter } from "@/components/page-footer"

export default function SecuritePage() {
  const [activeTab, setActiveTab] = useState("brute-force")

  const threats = [
    {
      id: "brute-force",
      title: "Force Brute",
      icon: Lock,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Quand la Persévérance Devient une Arme",
      content: {
        mechanism:
          "L'attaque par force brute consiste à tester systématiquement toutes les combinaisons possibles pour deviner une information secrète, le plus souvent un mot de passe ou une clé de chiffrement.",
        techniques: [
          "Attaque par dictionnaire : exploitation des mots courants",
          "Observations statistiques : analyse des tendances récurrentes",
          "Tables arc-en-ciel : bases de données précalculées",
          "Botnets : réseaux de machines compromises",
        ],
        defenses: [
          "Utiliser des mots de passe robustes (longueur, complexité, imprévisibilité)",
          "Limiter les tentatives de connexion",
          "Augmenter le coût par tentative (CAPTCHA, hachage complexe)",
          "Appliquer le salage (salting) pour les mots de passe stockés",
        ],
      },
    },
    {
      id: "phishing",
      title: "Hameçonnage",
      icon: Mail,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "La Manipulation au Cœur de l'Attaque",
      content: {
        mechanism:
          "L'hameçonnage est une technique d'ingénierie sociale qui consiste à usurper l'identité d'une entité de confiance pour tromper une victime et lui voler des informations personnelles ou financières.",
        techniques: [
          "Le Leurre : message alarmant créant un sentiment d'urgence",
          "L'Appât : lien hypertexte vers un site falsifié",
          "Le Piège : copie quasi parfaite du site officiel",
          "La Capture : collecte des informations confidentielles",
        ],
        defenses: [
          "Analyser l'expéditeur et l'URL du lien",
          "Évaluer le ton et la qualité du message",
          "Vérifier la sécurité du site (HTTPS)",
          "Ne jamais cliquer sur les liens suspects",
          "Saisir manuellement les adresses URL",
        ],
      },
    },
    {
      id: "malware",
      title: "Logiciels Malveillants",
      icon: Bug,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "L'Arsenal des Cybercriminels",
      content: {
        mechanism:
          "Le malware désigne toute catégorie de programme ou de code informatique conçu spécifiquement pour nuire à un système informatique sans le consentement de l'utilisateur.",
        techniques: [
          "Virus : se réplique en s'insérant dans des programmes hôtes",
          "Vers : se propage sur les réseaux de manière autonome",
          "Chevaux de Troie : se déguise en application légitime",
          "Maldocs : documents bureautiques contenant du code nuisible",
        ],
        defenses: [
          "Utiliser un logiciel antivirus et anti-malware à jour",
          "Maintenir les systèmes et logiciels à jour",
          "Faire preuve de prudence avec les pièces jointes",
          "Utiliser des systèmes de détection d'intrusion (IDS)",
        ],
      },
    },
    {
      id: "scraping",
      title: "Moissonnage de Données",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Une Menace pour la Confidentialité",
      content: {
        mechanism:
          "Le web scraping est une technique d'extraction automatisée des informations contenues sur des pages web à l'aide de scripts ou de programmes.",
        techniques: [
          "Création de profils psychologiques et sociaux détaillés",
          "Espionnage et propagande ciblée",
          "Menace pour la vie privée (solitude, intimité, anonymat)",
          "Exploitation commerciale non autorisée",
        ],
        defenses: [
          "Marquage caché (filigrane numérique)",
          "Empoisonnement des données",
          "Respect du cadre légal (CNIL en France)",
          "Protection technique anti-robots",
        ],
      },
    },
  ]

  const currentThreat = threats.find((t) => t.id === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            Sécurité
          </h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Cybermenaces Courantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprendre et se défendre contre les menaces numériques
          </p>
        </div>

        {/* Threats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {threats.map((threat, index) => {
            const Icon = threat.icon
            return (
              <Card
                key={threat.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in ${
                  activeTab === threat.id ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveTab(threat.id)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 rounded-lg ${threat.bgColor} flex items-center justify-center mx-auto mb-2`}
                  >
                    <Icon className={`w-6 h-6 ${threat.color}`} />
                  </div>
                  <CardTitle className="text-lg">{threat.title}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Detailed Content */}
        {currentThreat && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-14 h-14 rounded-lg ${currentThreat.bgColor} flex items-center justify-center`}>
                    <currentThreat.icon className={`w-7 h-7 ${currentThreat.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
                      {currentThreat.title}
                    </CardTitle>
                    <CardDescription className="text-base">{currentThreat.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mechanism */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    Mécanisme
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{currentThreat.content.mechanism}</p>
                </div>

                {/* Techniques */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Techniques d'Attaque</h3>
                  <div className="space-y-2">
                    {currentThreat.content.techniques.map((technique, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <Badge variant="destructive" className="mt-1">
                          {index + 1}
                        </Badge>
                        <p className="text-base flex-1">{technique}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Defenses */}
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Stratégies de Défense
                  </h3>
                  <div className="space-y-2">
                    {currentThreat.content.defenses.map((defense, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <Badge className="mt-1 bg-emerald-600">✓</Badge>
                        <p className="text-base flex-1">{defense}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Conclusion */}
        <Card className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Vers une Culture de la Sécurité Numérique
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-4">
            <p>
              La protection efficace de nos informations et de nos systèmes ne repose pas sur une seule solution
              miracle. Elle est le fruit d'une synergie entre trois piliers essentiels :
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Technologie</h4>
                <p className="text-sm text-muted-foreground">
                  Outils de base : mots de passe robustes, antivirus, systèmes configurés
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Processus</h4>
                <p className="text-sm text-muted-foreground">
                  Structure des défenses : limitations, mises à jour, respect des cadres légaux
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Vigilance Humaine</h4>
                <p className="text-sm text-muted-foreground">
                  Capacité à reconnaître les menaces et adopter des comportements prudents
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <PageFooter />
    </div>
  )
}
