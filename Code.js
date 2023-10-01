// This function runs when the web app is loaded
function doGet() {
  // Return the HTML file as the web app content
  return HtmlService.createHtmlOutputFromFile('dropZone');
}

// This function runs when the user submits the form with the selected columns and filters
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

    // Get filter data from the form data
    var filterColumn = data.filterColumn;
    var filterType = data.filterType;
    var filterValue = data.filterValue;

    // Apply filters to the array
    var filteredArray = array.filter(function (row) {
      var cellValue = row[filterColumn];

      // Apply the selected filter type
      switch (filterType) {
        case 'equals':
          return cellValue == filterValue;
        case 'contains':
          return cellValue.includes(filterValue);
        case 'startsWith':
          return cellValue.startsWith(filterValue);
        case 'endsWith':
          return cellValue.endsWith(filterValue);
        case 'notEqual':
          return cellValue != filterValue;
        case 'greaterThan':
          return cellValue > filterValue;
        case 'lessThan':
          return cellValue < filterValue;
        case 'isNull':
          return cellValue === null || cellValue === '';
        case 'isNotNull':
          return cellValue !== null && cellValue !== '';
        default:
          return true; // No filter
      }
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
