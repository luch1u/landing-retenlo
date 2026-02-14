import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-xl font-bold">Retenlo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Detecta señales de churn antes de que sea tarde.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#problema" className="hover:text-foreground transition-colors">
                  Problema
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-foreground transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#estado-riesgo" className="hover:text-foreground transition-colors">
                  Estado de riesgo
                </Link>
              </li>
              <li>
                <Link href="#ejemplo" className="hover:text-foreground transition-colors">
                  Ejemplo
                </Link>
              </li>
              <li>
                <Link href="#cuando-usar" className="hover:text-foreground transition-colors">
                  Cuándo usar
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Retenlo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
