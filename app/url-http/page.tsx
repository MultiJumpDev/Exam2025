import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Link2, Server, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PageFooter } from "@/components/page-footer"

export default function UrlHttpPage() {
  const urlComponents = [
    { name: "Protocole", example: "http", description: "Indique le protocole de communication à utiliser" },
    { name: "Authentification", example: "Jojo:lApIn@", description: "Nom d'utilisateur et mot de passe (optionnel)" },
    { name: "Hôte", example: "www.example.com", description: "Serveur hébergeant la ressource" },
    { name: "Port", example: ":8888", description: "Numéro de port TCP/IP spécifique (optionnel)" },
    { name: "Chemin", example: "/chemin/d/accès.php", description: "Chemin vers la ressource sur le serveur" },
    { name: "Requête", example: "?q=req&q2=req2", description: "Paramètres transmis à la ressource (optionnel)" },
    { name: "Fragment", example: "#signet", description: "Section spécifique dans la ressource (optionnel)" },
  ]

  const statusCodes = [
    {
      range: "100-199",
      title: "Réponses informatives",
      color: "bg-blue-100 text-blue-800",
      examples: ["100 Continue", "101 Switching Protocols"],
    },
    {
      range: "200-299",
      title: "Réponses de succès",
      color: "bg-green-100 text-green-800",
      examples: ["200 OK", "201 Created", "204 No Content"],
    },
    {
      range: "300-399",
      title: "Messages de redirection",
      color: "bg-yellow-100 text-yellow-800",
      examples: ["301 Moved Permanently", "302 Found", "304 Not Modified"],
    },
    {
      range: "400-499",
      title: "Erreurs du client",
      color: "bg-orange-100 text-orange-800",
      examples: ["400 Bad Request", "401 Unauthorized", "404 Not Found"],
    },
    {
      range: "500-599",
      title: "Erreurs du serveur",
      color: "bg-red-100 text-red-800",
      examples: ["500 Internal Server Error", "502 Bad Gateway", "503 Service Unavailable"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
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
            URL et HTTP
          </h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-5xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            URL et HTTP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Structure des URL et Codes de Statut HTTP</p>
        </div>

        {/* URL Section */}
        <div className="mb-16">
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2" style={{ fontFamily: "var(--font-manrope)" }}>
                <Link2 className="w-7 h-7 text-primary" />
                L'Anatomie d'une URL
              </CardTitle>
              <CardDescription className="text-base">L'adresse fondamentale du Web</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm break-all">
                http://Jojo:lApIn@www.example.com:8888/chemin/d/accès.php?q=req&q2=req2#signet
              </div>
              <p className="text-base leading-relaxed mb-6">
                Une URL (Uniform Resource Locator) est une chaîne de caractères qui spécifie comment accéder à une
                ressource sur Internet. Chaque composant a une fonction spécifique :
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {urlComponents.map((component, index) => (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <Badge variant="secondary" className="font-mono">
                      {component.example}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* URL Types */}
          <Card className="mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">URL Absolues vs. Relatives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">URL Absolue</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Contient toutes les informations nécessaires pour localiser une ressource
                </p>
                <div className="bg-muted p-3 rounded font-mono text-sm">https://www.example.com/page.html</div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">URL Relative</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Ne contient qu'une partie des informations, le contexte est déduit
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      ./
                    </Badge>
                    <span className="text-sm">Dossier actuel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      ../
                    </Badge>
                    <span className="text-sm">Dossier parent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      /
                    </Badge>
                    <span className="text-sm">Dossier racine</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* HTTP Status Codes Section */}
        <div className="mb-16">
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2" style={{ fontFamily: "var(--font-manrope)" }}>
                <Server className="w-7 h-7 text-primary" />
                Codes de Statut HTTP
              </CardTitle>
              <CardDescription className="text-base">Le dialogue client-serveur</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Les codes de statut HTTP constituent le principal mécanisme de communication par lequel un serveur
                informe un client du résultat de sa requête. Chaque code à trois chiffres transmet une information
                concise sur le succès, l'échec ou l'état de la demande.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {statusCodes.map((category, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge className={category.color}>{category.range}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, exIndex) => (
                      <Badge key={exIndex} variant="outline" className="font-mono">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Redirections Comparison */}
        <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2" style={{ fontFamily: "var(--font-manrope)" }}>
              <ArrowRight className="w-6 h-6 text-primary" />
              Redirections : 301 vs 302
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">301 Moved Permanently</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Nature du changement</p>
                    <p className="text-muted-foreground">
                      Le déplacement de la ressource est <strong>permanent</strong>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Instruction pour le client</p>
                    <p className="text-muted-foreground">
                      Mettre à jour ses enregistrements et utiliser la <strong>nouvelle URL</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">302 Found</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Nature du changement</p>
                    <p className="text-muted-foreground">
                      Le déplacement de la ressource est <strong>temporaire</strong>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Instruction pour le client</p>
                    <p className="text-muted-foreground">
                      Continuer à utiliser l'<strong>URL d'origine</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <PageFooter />
    </div>
  )
}
