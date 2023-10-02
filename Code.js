// Function to create a web app interface using HTMLService and serve the 'dropZone' HTML file
function doGet() {
  return HtmlService.createHtmlOutputFromFile('dropZone');
}

/// Function to handle the CSV import based on the provided data
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

    // Prepare the data to be inserted
    var selectedData = array.map(function (row) {
      return headerIndexes.map(function (index) {
        return row[index];
      });
    });

    // Apply filters to the data
    if (filters.length > 0) {
      selectedData = selectedData.filter(function (row) {
        return filters.every(function (filter) {
          var columnIndex = filter.column;
          var cellValue = row[columnIndex];

          // Perform filtering based on filter type
          switch (filter.type) {
            case 'equals':
              return cellValue === filter.value;
            case 'contains':
              return cellValue.toString().toLowerCase().includes(filter.value.toString().toLowerCase());
            case 'startsWith':
              return cellValue.toString().toLowerCase().startsWith(filter.value.toString().toLowerCase());
            case 'endsWith':
              return cellValue.toString().toLowerCase().endsWith(filter.value.toString().toLowerCase());
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
        });
      });
    }

    // Extract only selected columns
    var selectedColumns = headerIndexes.map(function (index) {
      return headerRow[index];
    });

    // Insert the header row and set the values of the filtered array
    sheet.clear();
    sheet.getRange(1, 1, 1, selectedColumns.length).setValues([selectedColumns]);
    sheet.getRange(2, 1, selectedData.length, selectedColumns.length).setValues(selectedData);

    return 'CSV imported successfully!';
  } catch (error) {
    // Handle and return an error message in case of an exception
    return 'Error: ' + error.message;
  }
}
