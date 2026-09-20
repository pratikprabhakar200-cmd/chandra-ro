function doPost(e) {

  try {

    // Google Sheet open karo
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Sheet1");


    // Sheet check
    if (!sheet) {
      throw new Error("Sheet1 nahi mili");
    }


    // Website se aaya hua JSON data read karo
    var data = JSON.parse(e.postData.contents);


    // Google Sheet mein new row add karo
    sheet.appendRow([

      // Column A
      new Date(),

      // Column B - CUSTOMER NAME
      data.name || "",

      // Column C - MOBILE NO
      data.phone || "",

      // Column D - ADDRESS
      data.address || "",

      // Column E - SERVICE TYPE
      data.service || "",

      // Column F - REQUIREMENTS
      data.message || ""

    ]);


    // Success response
    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true,
          message: "Booking successfully saved"
        })
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );


  } catch (error) {

    // Error response
    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          error: error.message
        })
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );

  }

}
