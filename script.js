function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.mobile,
    e.parameter.address,
    e.parameter.service,
    e.parameter.requirement
  ]);

  return ContentService
    .createTextOutput("Booking received successfully");
}
