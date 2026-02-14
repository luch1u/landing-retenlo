import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  RefreshCcw,
  UserPlus,
  MailX,
  MessageSquareWarning,
  Layers,
  Activity,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Early access
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Evita perder cuentas por señales que viste{" "}
                <span className="text-primary">demasiado tarde.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
                Retenlo analiza tus reuniones de CS y te entrega un resumen con
                estado de la cuenta, señales detectadas y seguimiento recomendado.
              </p>
              <p className="text-sm text-muted-foreground mb-8 max-w-xl">
                <span className="font-medium text-foreground">Disponible hoy:</span> reuniones grabadas.{" "}
                <span className="font-medium text-foreground">En roadmap:</span> análisis de correos.
              </p>
              <Button size="lg" asChild>
                <Link href="#acceso">
                  Agendar demo de 15 min
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </section>

        {/* Problem Section */}
        <section id="problema" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las señales están ahí. Pero se pierden.
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada semana pasan cosas en tus cuentas que deberían activar una
                acción. Pero quedan enterradas entre reuniones, correos y notas
                que nadie revisa a tiempo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <RefreshCcw className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle className="text-base">Problemas que se repiten</CardTitle>
                  <CardDescription>
                    Un cliente que dice{" "}
                    <span className="font-medium text-foreground">&quot;esto no está funcionando&quot;</span>{" "}
                    por tercera vez en un mes.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <UserPlus className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle className="text-base">Stakeholders nuevos</CardTitle>
                  <CardDescription>
                    Un stakeholder técnico que aparece en la reunión{" "}
                    <span className="font-medium text-foreground">sin contexto previo</span>{" "}
                    y hace preguntas básicas.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <MailX className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle className="text-base">Correos sin respuesta</CardTitle>
                  <CardDescription>
                    Un correo importante que lleva{" "}
                    <span className="font-medium text-foreground">8 días sin respuesta</span>{" "}
                    y nadie le da seguimiento.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <MessageSquareWarning className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle className="text-base">Cambios de tono</CardTitle>
                  <CardDescription>
                    Un tono que cambia de{" "}
                    <span className="font-medium text-foreground">colaborativo a defensivo</span>{" "}
                    de una reunión a otra.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cómo funciona
              </h2>
              <p className="text-lg text-muted-foreground">
                Sin configuración compleja. Sin cambiar tu flujo de trabajo.
                Retenlo trabaja en segundo plano sobre las interacciones que ya
                tienes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Conecta tus reuniones
                </h3>
                <p className="text-muted-foreground">
                  Retenlo se conecta a tus reuniones grabadas de CS.{" "}
                  <span className="font-medium text-foreground">Disponible hoy.</span>{" "}
                  Análisis de correos está en roadmap.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Analiza cada interacción
                </h3>
                <p className="text-muted-foreground">
                  Detecta señales específicas: problemas repetidos, cambios de
                  tono, menciones de urgencia, falta de respuesta y nuevos
                  stakeholders.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Recibes un resumen claro
                </h3>
                <p className="text-muted-foreground mb-3">
                  Después de cada interacción recibes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      Estado de la cuenta{" "}
                      <span className="font-medium text-foreground">
                        (Saludable / Atención / Riesgo) — disponible hoy
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      Señales detectadas con contexto
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      Resumen estructurado de la conversación
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      Próximos pasos sugeridos
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How we determine risk */}
        <section id="estado-riesgo" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cómo determinamos el estado de riesgo
              </h2>
              <p className="text-muted-foreground mb-4">
                Revisamos cada conversación y buscamos señales concretas: problemas
                que se repiten, cambios de tono, stakeholders nuevos sin contexto,
                menciones de urgencia o plazos, y falta de respuesta donde importaba.
              </p>
              <p className="text-muted-foreground">
                En función de qué señales aparecen y con qué frecuencia, asignamos
                a la cuenta un estado: <span className="font-medium text-foreground">Saludable</span>,{" "}
                <span className="font-medium text-foreground">Atención</span> o{" "}
                <span className="font-medium text-foreground">Riesgo</span>. No usamos
                cajas negras: el resumen que recibes incluye las señales detectadas
                y el contexto, para que puedas decidir con criterio.
              </p>
            </div>
          </div>
        </section>

        {/* Output Example Section */}
        <section id="ejemplo" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lo que recibes después de una reunión
              </h2>
              <p className="text-lg text-muted-foreground">
                Un resumen concreto con estado, señales y recomendaciones.
                Sin interpretación ambigua. Sin ruido.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Cuenta</p>
                      <CardTitle className="text-2xl">ACME Corp</CardTitle>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-100 text-sm px-3 py-1">
                      <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
                      Atención
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Señales detectadas */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Señales detectadas
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm">
                          Cliente mencionó <span className="font-semibold">retrasos en la implementación</span> 3 veces durante la reunión.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm">
                          <span className="font-semibold">Nuevo stakeholder técnico</span> presente con preguntas sobre capacidad del sistema.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm">
                          Cambio de tono del contacto principal: de colaborativo a <span className="font-semibold">frustración</span>.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Resumen */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Resumen
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      La reunión se centró en los retrasos acumulados del proyecto de
                      integración. El cliente expresó preocupación por los plazos
                      comprometidos. Se incorporó un nuevo ingeniero de su lado que
                      cuestionó la escalabilidad de la solución actual.
                    </p>
                  </div>

                  {/* Recomendación */}
                  <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-amber-800 dark:text-amber-400 mb-2">
                      Recomendación
                    </h4>
                    <p className="text-sm text-amber-900 dark:text-amber-300">
                      Revisar entregables pendientes y confirmar cronograma antes
                      de la próxima reunión. Considerar agendar una sesión técnica
                      con el nuevo stakeholder para resolver sus dudas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to use Retenlo */}
        <section id="cuando-usar" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cuándo usar Retenlo
              </h2>
              <p className="text-lg text-muted-foreground">
                Retenlo encaja mejor cuando necesitas visibilidad sobre cuentas
                sin revisar cada reunión o correo a mano.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <Layers className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Muchas cuentas, poco tiempo</CardTitle>
                  <CardDescription>
                    Gestionas varias cuentas y no puedes escuchar o leer todo.
                    Quieres saber dónde priorizar sin adivinar.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Las señales se pierden</CardTitle>
                  <CardDescription>
                    Lo importante queda enterrado entre reuniones, correos y
                    notas. Quieres un resumen después de cada interacción.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquareWarning className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Quieres actuar a tiempo</CardTitle>
                  <CardDescription>
                    Prefieres detectar riesgo o fricción cuando aún puedes
                    hacer algo, no cuando el cliente ya decidió irse.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="acceso" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Analizamos una de tus reuniones reales en 15 minutos.
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Te mostramos Retenlo en vivo con una reunión de ejemplo y
                resolvemos tus dudas. Sin compromiso. Estamos en early access
                con equipos de CS.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="mailto:lucas@retenlo.com?subject=Demo%2015%20min%20-%20Retenlo">
                  Agendar demo de 15 min
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
