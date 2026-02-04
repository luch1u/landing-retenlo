import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Mail,
  Brain,
  Users,
  Shield,
  Zap,
  Search,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Integración con Gmail
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Guarda lo que los CSM saben,{" "}
                <span className="text-primary">pero nunca registran</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Retenlo captura y organiza automáticamente el conocimiento de tus Customer Success
                Managers. Centraliza conversaciones, notas y contexto de clientes en un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Comenzar gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">Ver cómo funciona</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sin tarjeta de crédito requerida · Setup en 2 minutos
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                El conocimiento crítico se pierde todos los días
              </h2>
              <p className="text-lg text-muted-foreground">
                Tus CSMs tienen conversaciones valiosas, detectan señales de churn y construyen
                relaciones únicas. Pero cuando cambian de rol o se van, ese conocimiento desaparece.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <Clock className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Tiempo perdido</CardTitle>
                  <CardDescription>
                    Los CSMs pasan 30% de su tiempo buscando contexto de clientes en emails y notas
                    dispersas.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <Users className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Rotación de equipo</CardTitle>
                  <CardDescription>
                    Cuando un CSM se va, el nuevo tarda meses en reconstruir las relaciones y
                    entender el historial.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Churn evitable</CardTitle>
                  <CardDescription>
                    Señales de alerta se pierden en bandejas de entrada, causando cancelaciones que
                    pudieron prevenirse.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Características
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todo lo que necesitas para retener conocimiento
              </h2>
              <p className="text-lg text-muted-foreground">
                Retenlo se integra con las herramientas que ya usas y captura información sin
                interrumpir tu flujo de trabajo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Integración con Gmail</CardTitle>
                  <CardDescription>
                    Conecta tu cuenta de Gmail y automáticamente extrae contexto relevante de tus
                    conversaciones con clientes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>IA que entiende contexto</CardTitle>
                  <CardDescription>
                    Nuestra IA identifica temas importantes, sentimiento del cliente y señales de
                    riesgo automáticamente.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Búsqueda inteligente</CardTitle>
                  <CardDescription>
                    Encuentra cualquier información de cliente en segundos con búsqueda semántica
                    que entiende lo que buscas.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Perfiles de cliente</CardTitle>
                  <CardDescription>
                    Vista 360° de cada cliente con historial completo, notas del equipo y métricas
                    clave en un solo lugar.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Alertas proactivas</CardTitle>
                  <CardDescription>
                    Recibe notificaciones cuando detectamos señales de churn o oportunidades de
                    upsell en tus conversaciones.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Seguridad enterprise</CardTitle>
                  <CardDescription>
                    Tus datos están encriptados en tránsito y en reposo. Cumplimos con GDPR y SOC 2
                    Type II.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Cómo funciona
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empieza a retener conocimiento en minutos
              </h2>
              <p className="text-lg text-muted-foreground">
                Tres pasos simples para transformar cómo tu equipo gestiona el conocimiento de
                clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Conecta tu Gmail</h3>
                <p className="text-muted-foreground">
                  Autoriza Retenlo con OAuth seguro. Solo accedemos a emails de dominios de clientes
                  que tú configures.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Configura tus clientes</h3>
                <p className="text-muted-foreground">
                  Importa tu lista de clientes o conéctate con tu CRM. Retenlo asociará
                  automáticamente las conversaciones.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">El conocimiento se captura solo</h3>
                <p className="text-muted-foreground">
                  Retenlo analiza tus conversaciones en segundo plano y construye una base de
                  conocimiento rica y buscable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Precios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Precios simples y transparentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Empieza gratis y escala cuando estés listo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free */}
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Para equipos pequeños empezando</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Hasta 3 usuarios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">50 clientes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Integración Gmail</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Búsqueda básica</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <Link href="/signup">Comenzar gratis</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Más popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Para equipos en crecimiento</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/usuario/mes</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Usuarios ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Clientes ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">IA avanzada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Alertas de churn</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Integraciones CRM</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/signup">Comenzar prueba gratis</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Para grandes organizaciones</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Todo en Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">SSO / SAML</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">SLA garantizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Soporte dedicado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Deployment on-premise</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <Link href="/contact">Contactar ventas</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empieza a retener el conocimiento de tu equipo hoy
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Únete a cientos de equipos de Customer Success que ya usan Retenlo para centralizar
                su conocimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Comenzar gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/demo">Solicitar demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
