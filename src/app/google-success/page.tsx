import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle, MessageSquare, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conexión exitosa | Retenlo",
  description: "Has conectado tu cuenta de Google con Retenlo. Recibirás tu próxima reunión a través de Slack.",
};

export default function GoogleSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                ¡Gracias por conectar con Google!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Tu cuenta se ha vinculado correctamente. A partir de ahora,{" "}
                <span className="font-medium text-foreground">
                  tu próxima reunión la podrás recibir a través del canal de Slack
                </span>
                .
              </p>
              <div className="flex items-center justify-center gap-2 rounded-lg bg-muted/50 px-4 py-3 text-muted-foreground mb-10">
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span className="text-sm">
                  Revisa el canal de Slack configurado para ver el resumen de tus reuniones.
                </span>
              </div>
              <Button size="lg" asChild>
                <Link href="/">
                  Volver al inicio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
