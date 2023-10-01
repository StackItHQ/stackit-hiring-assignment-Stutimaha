function doGet() {
  return HtmlService.createHtmlOutputFromFile('dropZone');
}

function importCSV(data) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = data.sheetName;
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    var csv = data.csv;
    var array = Utilities.parseCsv(csv);
    var columns = data.columns;
    var filters = data.filters;

    var headerRow = array[0];
    var headerIndexes = columns.map(function (col) {
      return parseInt(col);
    });

    var filteredArray = array.filter(function (row) {
      return filters.every(function (filter) {
        var columnIndex = headerIndexes.indexOf(parseInt(filter.column));
        if (columnIndex !== -1) {
          var cellValue = row[columnIndex];
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

    // Append header row
    filteredArray.unshift(headerRow);

    sheet.clear();
    sheet.getRange(1, 1, filteredArray.length, headerRow.length).setValues(filteredArray);

    return 'CSV imported successfully!';
  } catch (error) {
    return 'Error: ' + error.message;
  }
}
