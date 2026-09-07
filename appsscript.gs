// Pegar este código en Extensiones → Apps Script de tu Google Sheet.
// La hoja debe tener esta fila de encabezado en la fila 1:
//   Fecha | Nombre | Cargo | Email

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.date || new Date().toLocaleString('es-AR'),
    data.name || '',
    data.title || '',
    data.email || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
