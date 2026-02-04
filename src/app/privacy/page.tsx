import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Retenlo",
  description: "Política de Privacidad de Retenlo. Conoce cómo recopilamos, usamos y protegemos tu información.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-muted-foreground mb-8">
              Última actualización: 4 de febrero de 2026
            </p>

            <Separator className="my-8" />

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenido a Retenlo (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la Empresa&quot;). Nos comprometemos a proteger
                  tu privacidad y a ser transparentes sobre cómo recopilamos, usamos y compartimos
                  tu información personal. Esta Política de Privacidad explica nuestras prácticas
                  con respecto a la información que recopilamos cuando utilizas nuestro servicio de
                  gestión de conocimiento para Customer Success.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Al utilizar Retenlo, aceptas las prácticas descritas en esta Política de
                  Privacidad. Si no estás de acuerdo con esta política, por favor no uses nuestro
                  servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Información que Recopilamos</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">2.1 Información de la Cuenta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cuando te registras en Retenlo, recopilamos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Nombre de la empresa</li>
                  <li>Cargo o rol en la empresa</li>
                  <li>Información de facturación (procesada de forma segura por nuestro proveedor de pagos)</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">2.2 Datos de Gmail (Google OAuth)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Con tu consentimiento explícito, accedemos a ciertos datos de tu cuenta de Gmail
                  para proporcionar nuestro servicio. Específicamente:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>
                    <strong>Correos electrónicos:</strong> Leemos el contenido de tus correos
                    electrónicos únicamente de los dominios de clientes que tú configures
                    explícitamente en la plataforma.
                  </li>
                  <li>
                    <strong>Metadatos:</strong> Recopilamos información como remitente, destinatario,
                    fecha y asunto de los correos relevantes.
                  </li>
                  <li>
                    <strong>Perfil básico:</strong> Accedemos a tu nombre y dirección de correo
                    electrónico para identificar tu cuenta.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 p-4 bg-muted rounded-lg">
                  <strong>Importante:</strong> Nunca accedemos a correos personales, solo a aquellos
                  relacionados con los dominios de clientes que configures. Puedes revocar este
                  acceso en cualquier momento desde la configuración de tu cuenta de Google.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">2.3 Datos de Uso</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recopilamos información sobre cómo interactúas con nuestro servicio:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Páginas visitadas y funciones utilizadas</li>
                  <li>Tiempo de uso y frecuencia de acceso</li>
                  <li>Dispositivo, navegador y sistema operativo</li>
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Cómo Usamos tu Información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Proporcionar, mantener y mejorar nuestro servicio</li>
                  <li>Procesar y analizar correos electrónicos para extraer información relevante de clientes</li>
                  <li>Generar resúmenes, alertas y análisis de sentimiento usando inteligencia artificial</li>
                  <li>Personalizar tu experiencia en la plataforma</li>
                  <li>Comunicarnos contigo sobre actualizaciones, soporte y promociones</li>
                  <li>Detectar y prevenir fraude o uso indebido</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Uso de Google User Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El uso de la información recibida de las APIs de Google cumple con la{" "}
                  <a 
                    href="https://developers.google.com/terms/api-services-user-data-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Política de Datos de Usuario de los Servicios API de Google
                  </a>
                  , incluyendo los requisitos de Uso Limitado.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Específicamente, nos comprometemos a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>
                    Usar los datos de Gmail solo para proporcionar las funciones que el usuario
                    solicita explícitamente
                  </li>
                  <li>No transferir datos a terceros excepto cuando sea necesario para proporcionar el servicio</li>
                  <li>No usar datos para publicidad</li>
                  <li>No permitir que humanos lean los datos a menos que sea necesario por seguridad, cumplimiento legal, o con tu consentimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cómo Compartimos tu Información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos tu información personal. Podemos compartir información en las
                  siguientes circunstancias:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>
                    <strong>Con tu equipo:</strong> Los datos de clientes son visibles para otros
                    miembros de tu organización en Retenlo según los permisos configurados.
                  </li>
                  <li>
                    <strong>Proveedores de servicios:</strong> Compartimos información con terceros
                    que nos ayudan a operar el servicio (hosting, procesamiento de pagos, análisis).
                  </li>
                  <li>
                    <strong>Cumplimiento legal:</strong> Podemos divulgar información cuando sea
                    requerido por ley o para proteger derechos legales.
                  </li>
                  <li>
                    <strong>Transferencias de negocio:</strong> En caso de fusión, adquisición o
                    venta de activos, tu información puede ser transferida.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Seguridad de los Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu
                  información:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Encriptación de datos en tránsito (TLS 1.3) y en reposo (AES-256)</li>
                  <li>Autenticación de dos factores disponible para todas las cuentas</li>
                  <li>Auditorías de seguridad regulares y pruebas de penetración</li>
                  <li>Acceso restringido a datos basado en el principio de mínimo privilegio</li>
                  <li>Monitoreo continuo de amenazas y anomalías</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Retenemos tu información mientras tu cuenta esté activa o según sea necesario
                  para proporcionarte el servicio. Puedes solicitar la eliminación de tu cuenta y
                  datos asociados en cualquier momento. Algunos datos pueden retenerse por períodos
                  más largos cuando sea requerido por ley o para fines legítimos de negocio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Tus Derechos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dependiendo de tu ubicación, puedes tener los siguientes derechos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>
                    <strong>Acceso:</strong> Solicitar una copia de tus datos personales.
                  </li>
                  <li>
                    <strong>Rectificación:</strong> Corregir datos inexactos o incompletos.
                  </li>
                  <li>
                    <strong>Eliminación:</strong> Solicitar que eliminemos tus datos.
                  </li>
                  <li>
                    <strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.
                  </li>
                  <li>
                    <strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos
                    fines.
                  </li>
                  <li>
                    <strong>Revocar consentimiento:</strong> Retirar el acceso a tu cuenta de Gmail
                    en cualquier momento.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para ejercer estos derechos, contáctanos en{" "}
                  <a href="mailto:privacy@retenlo.com" className="text-primary hover:underline">
                    privacy@retenlo.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Transferencias Internacionales</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tus datos pueden ser transferidos y procesados en servidores ubicados fuera de tu
                  país de residencia. Cuando transferimos datos fuera del Espacio Económico Europeo,
                  implementamos salvaguardias apropiadas como Cláusulas Contractuales Estándar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Cookies y Tecnologías Similares</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar
                  el uso del servicio y personalizar contenido. Puedes controlar las cookies a
                  través de la configuración de tu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Menores de Edad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro servicio no está dirigido a personas menores de 18 años. No recopilamos
                  intencionalmente información de menores. Si descubrimos que hemos recopilado datos
                  de un menor, los eliminaremos inmediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Cambios a esta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos
                  sobre cambios significativos por correo electrónico o mediante un aviso destacado
                  en nuestro servicio. Te recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus
                  datos, contáctanos:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Retenlo</p>
                  <p className="text-muted-foreground">Email: privacy@retenlo.com</p>
                  <p className="text-muted-foreground">
                    Responsable de Protección de Datos: dpo@retenlo.com
                  </p>
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
