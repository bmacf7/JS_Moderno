function getCalendarEvents() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet(); // Conectarse al libro activo de Google Sheets y seleccionar la hoja de cálculos activa.
  const calendars = CalendarApp.getAllOwnedCalendars();
  calendars.forEach((calendar) => {
    Logger.log(calendar.getId());
    Logger.log(calendar.getName());
  });

  // const calendarId = // valor retornado por calendar.getId()
  const calendar = CalendarApp.getCalendarById(calendarId);
  const events = calendar.getEvents(
    new Date(2013, 0, 1),
    new Date(2024, 0, 19)
  ); // JS maneja los meses como un array index 0

  events.forEach((event) => {
    Logger.log(event.getId());
    // Seleccionar la informacion de cada evento a traves de sus métodos get
    sheet.appendRow([
      nombre,
      inicio,
      fin,
      repite,
      ubicacion,
      recordatorio,
      detalles,
    ]); // Recibe un arreglo con la info de los eventos (se deben crear en orden dichos valores en la hoja de cáculos)
  });
}
