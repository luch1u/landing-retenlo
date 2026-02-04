import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | Retenlo",
  description: "Términos de Servicio de Retenlo. Conoce las condiciones de uso de nuestra plataforma.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Términos de Servicio</h1>
            <p className="text-muted-foreground mb-8">
              Última actualización: 4 de febrero de 2026
            </p>

            <Separator className="my-8" />

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos de Servicio (&quot;Términos&quot;) constituyen un acuerdo legal vinculante
                  entre tú (&quot;Usuario&quot;, &quot;tú&quot; o &quot;tu&quot;) y Retenlo (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la
                  Empresa&quot;) con respecto al uso de nuestra plataforma de gestión de conocimiento
                  para Customer Success, incluyendo nuestro sitio web, aplicaciones y servicios
                  relacionados (colectivamente, el &quot;Servicio&quot;).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Al acceder o usar el Servicio, aceptas estar sujeto a estos Términos. Si no estás
                  de acuerdo con alguna parte de estos Términos, no debes usar el Servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Retenlo es una plataforma que ayuda a equipos de Customer Success a capturar,
                  organizar y retener el conocimiento de clientes. El Servicio incluye:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Integración con cuentas de correo electrónico (Gmail) para extraer información relevante</li>
                  <li>Análisis automático de conversaciones usando inteligencia artificial</li>
                  <li>Base de conocimiento centralizada de clientes</li>
                  <li>Alertas y notificaciones proactivas</li>
                  <li>Herramientas de búsqueda y reportes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Registro y Cuenta</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">3.1 Elegibilidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Para usar el Servicio, debes tener al menos 18 años y la capacidad legal para
                  celebrar contratos vinculantes. Si usas el Servicio en nombre de una organización,
                  declaras que tienes autoridad para vincular a dicha organización a estos Términos.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">3.2 Información de la Cuenta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Al registrarte, aceptas proporcionar información precisa, actual y completa. Eres
                  responsable de mantener la confidencialidad de tus credenciales de acceso y de
                  todas las actividades que ocurran bajo tu cuenta.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">3.3 Seguridad de la Cuenta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Debes notificarnos inmediatamente si sospechas de cualquier uso no autorizado de
                  tu cuenta o cualquier otra violación de seguridad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Acceso a Gmail y Datos de Google</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">4.1 Autorización</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Para utilizar las funciones principales del Servicio, deberás autorizar a Retenlo
                  a acceder a tu cuenta de Gmail mediante OAuth 2.0. Esta autorización te permite
                  controlar qué permisos otorgas y revocarlos en cualquier momento.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.2 Alcance del Acceso</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solo accedemos a los correos electrónicos de los dominios de clientes que tú
                  configures explícitamente en la plataforma. No accedemos a correos personales ni
                  a comunicaciones no relacionadas con los clientes que hayas especificado.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.3 Uso de Datos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El uso de los datos de Gmail cumple con la Política de Datos de Usuario de los
                  Servicios API de Google. Los datos se utilizan exclusivamente para proporcionar
                  las funciones del Servicio que solicitas.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.4 Revocación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes revocar el acceso de Retenlo a tu cuenta de Gmail en cualquier momento
                  desde la configuración de seguridad de tu cuenta de Google o desde la
                  configuración de tu cuenta en Retenlo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Uso Aceptable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al usar el Servicio, aceptas no:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Violar cualquier ley o regulación aplicable</li>
                  <li>Infringir los derechos de propiedad intelectual de terceros</li>
                  <li>Transmitir malware, virus u otro código malicioso</li>
                  <li>Intentar acceder a sistemas o datos sin autorización</li>
                  <li>Usar el Servicio para enviar spam o comunicaciones no solicitadas</li>
                  <li>Interferir con el funcionamiento del Servicio o sus infraestructuras</li>
                  <li>Revender, sublicenciar o redistribuir el Servicio sin autorización</li>
                  <li>Usar el Servicio para actividades fraudulentas o engañosas</li>
                  <li>Recopilar información de otros usuarios sin su consentimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contenido del Usuario</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">6.1 Propiedad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Retienes todos los derechos sobre el contenido que subas o proceses a través del
                  Servicio (&quot;Contenido del Usuario&quot;), incluyendo correos electrónicos, notas y
                  cualquier otra información.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">6.2 Licencia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nos otorgas una licencia mundial, no exclusiva y libre de regalías para usar,
                  procesar, almacenar y mostrar tu Contenido del Usuario con el único propósito de
                  proporcionarte el Servicio.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">6.3 Responsabilidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eres responsable de asegurar que tienes los derechos necesarios sobre el
                  Contenido del Usuario y que su uso no viola derechos de terceros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Propiedad Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El Servicio y su contenido original, características y funcionalidad son
                  propiedad de Retenlo y están protegidos por derechos de autor, marcas registradas
                  y otras leyes de propiedad intelectual. No puedes copiar, modificar, distribuir,
                  vender o arrendar ninguna parte del Servicio sin nuestro consentimiento previo
                  por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Planes y Pagos</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">8.1 Planes de Suscripción</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecemos diferentes planes de suscripción con distintas características y
                  precios. Los detalles de cada plan están disponibles en nuestra página de precios.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">8.2 Facturación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los planes de pago se facturan por adelantado de forma mensual o anual según tu
                  elección. Los pagos no son reembolsables excepto cuando lo requiera la ley.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">8.3 Cambios de Precio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar los precios. Te notificaremos con al menos
                  30 días de anticipación antes de que cualquier cambio de precio entre en vigor.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">8.4 Cancelación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes cancelar tu suscripción en cualquier momento. La cancelación será efectiva
                  al final del período de facturación actual. Seguirás teniendo acceso al Servicio
                  hasta esa fecha.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Disponibilidad del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos esforzamos por mantener el Servicio disponible 24/7, pero no garantizamos
                  disponibilidad ininterrumpida. El Servicio puede estar temporalmente no
                  disponible por mantenimiento, actualizaciones o circunstancias fuera de nuestro
                  control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En la máxima medida permitida por la ley:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>
                    El Servicio se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot; sin garantías
                    de ningún tipo, expresas o implícitas.
                  </li>
                  <li>
                    No seremos responsables por daños indirectos, incidentales, especiales,
                    consecuentes o punitivos.
                  </li>
                  <li>
                    Nuestra responsabilidad total no excederá el monto que hayas pagado por el
                    Servicio en los 12 meses anteriores al evento que dio origen a la
                    responsabilidad.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Indemnización</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aceptas indemnizar y mantener indemne a Retenlo, sus directores, empleados y
                  agentes de cualquier reclamación, daño, pérdida o gasto (incluyendo honorarios
                  legales razonables) que surjan de tu uso del Servicio o violación de estos
                  Términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Terminación</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">12.1 Por el Usuario</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes terminar tu cuenta en cualquier momento eliminándola desde la
                  configuración o contactándonos.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">12.2 Por Retenlo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos suspender o terminar tu acceso al Servicio inmediatamente, sin previo
                  aviso, si violas estos Términos o si consideramos que tu conducta es perjudicial
                  para otros usuarios o para nosotros.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">12.3 Efectos de la Terminación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tras la terminación, tu derecho a usar el Servicio cesará inmediatamente. Podemos
                  eliminar tu cuenta y Contenido del Usuario de acuerdo con nuestra Política de
                  Privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Modificaciones a los Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te
                  notificaremos sobre cambios materiales por correo electrónico o mediante un aviso
                  destacado en el Servicio con al menos 30 días de anticipación. El uso continuado
                  del Servicio después de que los cambios entren en vigor constituye tu aceptación
                  de los nuevos Términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. Ley Aplicable y Jurisdicción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables,
                  sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier
                  disputa que surja de estos Términos estará sujeta a la jurisdicción exclusiva de
                  los tribunales competentes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">15. Disposiciones Generales</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">15.1 Acuerdo Completo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo
                  completo entre tú y Retenlo con respecto al Servicio.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">15.2 Divisibilidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si alguna disposición de estos Términos se considera inválida o inaplicable, las
                  disposiciones restantes permanecerán en pleno vigor y efecto.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">15.3 Renuncia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestra falta de ejercicio de cualquier derecho bajo estos Términos no
                  constituirá una renuncia a dicho derecho.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">15.4 Cesión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No puedes ceder estos Términos sin nuestro consentimiento previo por escrito.
                  Podemos ceder estos Términos sin restricción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">16. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre estos Términos de Servicio, contáctanos:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Retenlo</p>
                  <p className="text-muted-foreground">Email: legal@retenlo.com</p>
                  <p className="text-muted-foreground">Soporte: support@retenlo.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
