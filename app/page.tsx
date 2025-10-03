import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Globe, Link2, Network } from "lucide-react"

export default function HomePage() {
  const documents = [
    {
      title: "Timeline",
      description: "L'histoire d'Internet de 1969 à aujourd'hui",
      icon: Clock,
      href: "/timeline",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Standards du Web",
      description: "Les piliers de la cohérence numérique",
      icon: Globe,
      href: "/standards",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "Sécurité",
      description: "Comprendre et se défendre contre les cybermenaces",
      icon: Shield,
      href: "/securite",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "URL et HTTP",
      description: "Structure des URL et codes de statut HTTP",
      icon: Link2,
      href: "/url-http",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Noms de Domaine",
      description: "Comprendre le système DNS et les noms de domaine",
      icon: Network,
      href: "/ndd",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-balance" style={{ fontFamily: "var(--font-manrope)" }}>
              Technologies Web
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explorez l'histoire, les standards, la sécurité et les protocoles qui façonnent le Web moderne
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#documents">Commencer</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Documents Grid */}
      <section id="documents" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Documentation Interactive
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon
              return (
                <Link key={doc.href} href={doc.href}>
                  <Card
                    className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div
                        className={`w-14 h-14 rounded-lg ${doc.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-7 h-7 ${doc.color}`} />
                      </div>
                      <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-base">{doc.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group-hover:text-primary transition-colors">
                        Explorer →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Technologies Web - Documentation Interactive</p>
        </div>
      </footer>
    </div>
  )
}
