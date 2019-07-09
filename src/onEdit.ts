function onEdit(event: GoogleAppsScript.Events.SheetsOnEdit) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const dateString = sheet.getActiveCell().getValue();
  const date = new Date(dateString);
  const result = getTodaysEvents(date);
  console.log({ date, result });
  sheet.getRange('B1').setValue(result);
}

function getTodaysEvents(today: Date): string {
  const calendar = CalendarApp.getDefaultCalendar();
  const events = calendar.getEventsForDay(today);
  return events
    .map(event => {
      const title = event.getTitle();
      const startTime = event.getStartTime();
      const endTime = event.getEndTime();
      const text = renderText(title, startTime, endTime);
      return text;
    })
    .join('\n');
}

function renderText(title: string, startTime: Date, endTime: Date) {
  const startHour = startTime.getHours();
  const startMinute = startTime.getMinutes();
  const endHour = endTime.getHours();
  const endMinute = endTime.getMinutes();
  return `${title} ${pad(startHour)}:${pad(startMinute)}~${pad(endHour)}:${pad(
    endMinute,
  )}`;
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
