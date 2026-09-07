# Castle — E-mail Signature Generator

Generador de firmas de email con el diseño de marca de Castle: formulario, recorte de foto y botón para copiar la firma lista para pegar en Gmail.

## Uso
Abrí `index.html` (o el link de GitHub Pages de este repo) y completá tus datos.

## Registro de equipo (opcional)
Para guardar cada firma cargada en una Google Sheet:
1. Creá una Google Sheet con la fila de encabezado: `Fecha | Nombre | Cargo | Email`.
2. Extensiones → Apps Script, pegá el contenido de `apps-script.gs`.
3. Implementar → Nueva implementación → Aplicación web. Ejecutar como "Yo", acceso "Cualquier usuario".
4. Copiá la URL (termina en `/exec`) y pegala en `index.html`, en la constante `SHEET_WEBHOOK_URL`.
