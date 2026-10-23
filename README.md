8# Calculadora-Netsky

Cotizador Netsky instalable en teléfonos Android y iPhone.

## Uso local

Inicia un servidor desde esta carpeta:

```sh
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. Para instalar en un teléfono, la app debe servirse por HTTPS: abre el enlace HTTPS del Codespace, luego usa **Instalar aplicación** en Chrome/Android o **Compartir > Agregar a pantalla de inicio** en Safari/iPhone.

La cotización se calcula en el navegador. WhatsApp abre el enlace de envío con el texto preparado.

## Publicar en evaluaciones.netsky.cl

La publicación en GitHub Pages está preparada con el workflow [deploy-pages.yml](./.github/workflows/deploy-pages.yml) y el archivo [`CNAME`](./CNAME). Para activarla:

1. En GitHub, abre el repositorio **Calculadora-Netsky → Settings → Pages**. Selecciona **GitHub Actions** como método de publicación.
2. En el panel DNS del dominio `netsky.cl`, crea un registro **CNAME**:
   - **Nombre/Host:** `evaluaciones`
   - **Destino/Target:** `carlosponce19-ux.github.io`
   - **TTL:** automático o predeterminado.
3. Guarda y espera la propagación DNS. En **Settings → Pages → Custom domain**, escribe `evaluaciones.netsky.cl` si GitHub aún no lo detectó; espera a que valide el dominio y habilita **Enforce HTTPS**.
4. Publica los cambios en la rama `main`. El workflow desplegará los archivos estáticos y mostrará el resultado en **Actions**.
5. En Supabase, cambia **Authentication → URL Configuration → Site URL** a `https://evaluaciones.netsky.cl`, agrega `https://evaluaciones.netsky.cl` a **Redirect URLs** y configura el secreto `ALLOWED_ORIGIN` de las Edge Functions con ese origen exacto.

No ingreses credenciales en el repositorio ni compartas contraseñas. El dominio solo funcionará después de configurar el DNS y completar la primera publicación satisfactoriamente.

## Encuestas de instalación

La portada tiene **Cotizar servicio** y **Evaluar al técnico**. La encuesta usa notas del 1 al 7 en las seis preguntas y permite elegir entre Juan Carlos Troncoso, Felipe Ojeda Lobos y Rodrigo Caro Obando. Cada respuesta se guarda en Supabase y se envía a `ventas01netsky@gmail.com`; el resumen por técnico se envía mensualmente. Las estadísticas del cotizador requieren iniciar sesión con esa cuenta corporativa y la base de datos aplica control de acceso con RLS.

### Activar recepción de evaluaciones y estadísticas

El proyecto Supabase y la cuenta de Resend deben crearse y configurarse antes de que el envío automático quede operativo.

1. Crea un proyecto Supabase y ejecuta [`supabase/schema.sql`](./supabase/schema.sql) desde el SQL Editor.
2. En **Authentication → Users**, invita o crea `ventas01netsky@gmail.com`. En **Authentication → URL Configuration**, configura la URL pública HTTPS de esta app como Site URL y Redirect URL.
3. Crea una cuenta Resend, verifica el dominio remitente y define la dirección remitente permitida por Resend.
4. En **Project Settings → API**, copia el Project URL y la clave `anon`/publishable a `supabase-config.js`. Esos dos valores son públicos para el navegador. **Nunca pongas `service_role`, `RESEND_API_KEY` ni otra clave secreta en este archivo o en el frontend.**
5. En **Edge Functions → Secrets**, configura:
   - `ALLOWED_ORIGIN`: origen HTTPS exacto de la app, sin ruta (por ejemplo `https://netsky.example.cl`).
   - `RESEND_API_KEY`: clave secreta de Resend.
   - `RESEND_FROM_EMAIL`: remitente verificado de Resend (por ejemplo `Netsky <encuestas@tu-dominio.cl>`).
   - `MONTHLY_REPORT_CRON_SECRET`: secreto aleatorio largo para autorizar el proceso mensual. No lo guardes en Git.
   - `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` deben estar disponibles para las Edge Functions; Supabase suele proporcionarlas automáticamente.
6. Instala y autentica Supabase CLI, enlaza el directorio al proyecto y despliega:

   ```sh
   supabase login
   supabase link --project-ref <project-ref>
   supabase functions deploy submit-evaluation
   supabase functions deploy monthly-report
   ```

7. En **Vault → Secrets**, guarda `netsky_monthly_report_url` con el URL `https://<project-ref>.supabase.co/functions/v1/monthly-report` y `netsky_monthly_report_secret` con el mismo valor configurado en `MONTHLY_REPORT_CRON_SECRET`.
8. Ejecuta [`supabase/monthly-report-cron.sql`](./supabase/monthly-report-cron.sql) una vez en el SQL Editor. El resumen del mes anterior se enviará el primer día de cada mes a las 12:00 UTC.
9. Publica la app en HTTPS y prueba un envío. Cada respuesta se guarda en la base de datos y se notifica por correo; el dashboard de promedios queda disponible solo para la cuenta autorizada.

Las evaluaciones ingresadas previamente en el almacenamiento local de un navegador no se migran automáticamente a Supabase.

La función pública limita a cinco envíos por dirección IP cada 15 minutos; solo conserva un hash de la IP para aplicar ese límite. Para ejecutar pruebas de desarrollo, las solicitudes desde `localhost` están permitidas por CORS.