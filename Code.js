// This function runs when the web app is loaded
function doGet() {
  // Return the HTML file as the web app content
  return HtmlService.createHtmlOutputFromFile('dropZone');
}

// This function runs when the user submits the form with the selected columns
function importCSV(data) {
  try {
    // Get the active spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // Get the sheet name from the form data
    var sheetName = data.sheetName;
    // Get the sheet by name or create a new one if it doesn't exist
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    // Get the CSV data from the form data
    var csv = data.csv;
    // Parse the CSV data into a 2D array
    var array = Utilities.parseCsv(csv);
    // Get the selected columns from the form data
    var columns = data.columns;
    // Filter the array to keep only the selected columns
    var filteredArray = array.map(function (row) {
      return columns.map(function (col) {
        return row[col];
      });
    });
    // Clear the sheet content
    sheet.clear();
    // Set the sheet values with the filtered array
    sheet.getRange(1, 1, filteredArray.length, filteredArray[0].length).setValues(filteredArray);
    return 'CSV imported successfully!';
  } catch (error) {
    return 'Error: ' + error.message;
  }
}