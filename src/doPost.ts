function doPost(event: GoogleAppsScript.Events.DoPost) {
  if (
    event == null ||
    event.postData == null ||
    event.postData.type !== 'application/json' ||
    event.postData.contents == null
  ) {
    return;
  }
  const { type = '', text = '', link = '', score, priority } = JSON.parse(
    event.postData.contents,
  );

  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();

  const date = new Date();
  const row = [date, type, text, link, score, priority];

  sheet.appendRow(row);
}
