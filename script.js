function doPost(e) {

  try {

    // Google Sheet
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Sheet1");


    // Check Sheet1
    if (!sheet) {

      throw new Error(
        "Sheet1 nahi mili. Sheet ka naam exactly Sheet1 hona chahiye."
      );

    }


    // Receive JSON data
    var data =
      JSON.parse(e.postData.contents);


    // Add new row
    sheet.appendRow([

      new Date(),          // A - DATE

      data.name || "",     // B - CUSTOMER NAME

      data.phone || "",    // C - MOBILE NO

      data.address || "",  // D - ADDRESS

      data.service || "",  // E - SERVICE TYPE

      data.message || ""   // F - REQUIREMENTS

    ]);


    // Success response
    return ContentService

      .createTextOutput(

        JSON.stringify({

          success: true,

          message:
            "Booking saved successfully"

        })

      )

      .setMimeType(
        ContentService.MimeType.JSON
      );


  }


  catch (error) {


    // Error response
    return ContentService

      .createTextOutput(

        JSON.stringify({

          success: false,

          error:
            error.message

        })

      )

      .setMimeType(
        ContentService.MimeType.JSON
      );

  }

}
