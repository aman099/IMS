 
function onOfficeCellClick(e) {
	debugger;
    if (e.rowType == 'data' && e.columnIndex == 3) {
        debugger
        if (typeof e.data.Id == 'undefined') {
            debugger;
			var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
			result.done(function (dialogResult) {
				if (dialogResult) {
					var dataGrid = $('#DoctorOfficeGrid').dxDataGrid('instance');
					$('#DoctorOfficeGrid').dxDataGrid('instance').deleteRow(e.row.rowIndex);
				}
			});
		}
		else {
			var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
            result.done(function (dialogResult) {
                debugger
                if (dialogResult == true) {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        async: false,
                        url: '/Doctor/DeleteDoctorOffice',
                        data: { ID: e.data.Id },
                        success: function (m) {
                            showNotification("Doctor Office Delete Successfully.", "success");
                            var dataGrid = $('#DoctorOfficeGrid').dxDataGrid('instance');
                            dataGrid.refresh();
                        },
                        error: function () {
                            showNotification("Failed to delete.", "warning");
                        }
                    });
                }
                else {
                    debugger;

                    return false;
                }
            });
           
			
		}
	}
}











