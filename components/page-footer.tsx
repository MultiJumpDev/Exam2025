import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home } from "lucide-react"

export function PageFooter() {
  const sections = [
    { name: "Timeline", href: "/timeline" },
    { name: "Standards", href: "/standards" },
    { name: "Sécurité", href: "/securite" },
    { name: "URL/HTTP", href: "/url-http" },
    { name: "Noms de Domaine", href: "/ndd" },
  ]

  return (
    <footer className="mt-16 border-t bg-muted/30">
      {/* Wikipedia Source */}
      <div className="container mx-auto max-w-4xl px-4 pt-8">
        <Card className="border-t-2 border-primary/20 bg-background/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Source :</strong> Contenu adapté de{" "}
              <a
                href="https://fr.wikipedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Wikipédia
              </a>
              , l'encyclopédie libre
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {section.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">© 2025 Technologies Web - Documentation Interactive</p>
        </div>
      </div>
    </footer>
  )
}
