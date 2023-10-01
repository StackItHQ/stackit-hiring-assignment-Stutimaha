// Function to create a web app interface using HTMLService and serve the 'dropZone' HTML file
function doGet() {
  return HtmlService.createHtmlOutputFromFile('dropZone');
}

// Function to handle the CSV import based on the provided data
function importCSV(data) {
  try {
    // Get the active spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Extract necessary information from the provided data
    var sheetName = data.sheetName;
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    var csv = data.csv;
    var array = Utilities.parseCsv(csv);
    var columns = data.columns;
    var filters = data.filters;

    // Extract the header row and map selected column indexes to integers
    var headerRow = array[0];
    var headerIndexes = columns.map(function (col) {
      return parseInt(col);
    });

    // Apply filters to the array
    var filteredArray = array.filter(function (row) {
      return filters.every(function (filter) {
        var columnIndex = headerIndexes.indexOf(parseInt(filter.column));
        if (columnIndex !== -1) {
          var cellValue = row[columnIndex];

          // Perform filtering based on filter type
          switch (filter.type) {
            case 'equals':
              return cellValue === filter.value;
            case 'contains':
              return cellValue.includes(filter.value);
            case 'startsWith':
              return cellValue.startsWith(filter.value);
            case 'endsWith':
              return cellValue.endsWith(filter.value);
            case 'notEqual':
              return cellValue !== filter.value;
            case 'greaterThan':
              return parseFloat(cellValue) > parseFloat(filter.value);
            case 'lessThan':
              return parseFloat(cellValue) < parseFloat(filter.value);
            case 'isNull':
              return cellValue === '';
            case 'isNotNull':
              return cellValue !== '';
            default:
              return true; // Default to true if filter type is not recognized
          }
        }
        return false; // Return false if the column index is not found
      });
    });

    // Append the header row to the filtered array
    filteredArray.unshift(headerRow);

    // Clear existing data on the sheet and set the values of the filtered array
    sheet.clear();
    sheet.getRange(1, 1, filteredArray.length, headerRow.length).setValues(filteredArray);

    return 'CSV imported successfully!';
  } catch (error) {
    // Handle and return an error message in case of an exception
    return 'Error: ' + error.message;
  }
}
