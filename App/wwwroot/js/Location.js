$(document).ready(function () {

    $(".zip-mask").mask("99999");
    $('.phone-mask').mask("(999) 999-9999");

    $('.custompop .close').click(function () {
        $('.custompop').fadeOut("1000");
    });
    $('.eyeshow').click(function () {
        $('.custompop').fadeIn("1000");
    });
});

































$(document).ready(function () {
	
	
 
});
doctorlocationLength = [];
dbData = [];
//function LoadDoctorLocations(doc_ID) {
//	debugger;
//	$.ajax({
//		type: 'POST',
//		dataType: 'json',
//		url: '/Doctor/LoadDoctorLocations',
//		success: function (Data) {
//			dbData = Data;
//			AssignedIDData = $('#dbAssignedLocationJson').val();
//			if (AssignedIDData != "") {
//				AssignedIDDataObj = JSON.parse(AssignedIDData);
//				for (var i = 0; i < dbData.length; i++) {
//					for (var j = 0; j < AssignedIDDataObj.length; j++) {
//						//if (dbData[i].LocationId === AssignedIDDataObj[j].LocationId) {
//						   doctorlocationLength.push(dbData[i]);
//							dbData[i].id = AssignedIDDataObj[j].id;
//						//}
//					}

//				}

//				var dataGrid = $('#DoctorLocationsGrid').data('dxDataGrid');
//				if (typeof dataGrid !== 'undefined') {
//					dataGrid.refresh();
//				}
//			}

//		},
//		error: function (XMLHttpRequest, textStatus, errorThrown) {
//			//alert("error");
//		}
//	});
//	var a = doctorlocationLength;
//}

function addDoctorLocation(id) {
	debugger;
    //var x = $("#DoctorLocationsGrid").dxDropDownBox('instance').option('value');
    //for (var i = 0; i < dbData.length; i++) {
        //if (dbData[i].LocationId == x) {
	doctorlocationLength.push(dbData[i]);
	$("#dbAssignedLocationJson").val(JSON.stringify(doctorlocationLength));
		//}
	//}
	var dataGrid = $('#gridContainerPhy').dxDataGrid('instance');
	dataGrid.refresh();
}


function RemoveLocation(id) {
	debugger;
	for (var i = 00; i < doctorlocationLength.length; i++) {
		if (doctorlocationLength[i].LocationId == id) {
			doctorlocationLength.splice(i, 1);
			$("#LocationJsonRMV").val(JSON.stringify(doctorlocationLength));
		}
	}

	var dataGrid = $('#DoctorLocationsGrid').dxDataGrid('instance');
	dataGrid.refresh();
}

function callFunction(fname, lname, add) {
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: '/Referral/GetLatestPhysician',
		success: function (Data) {
			if (Data.firstname == fname || null && Data.lastname == lname || null && Data.address == add || null) {
				doctorlocationLength.push(Data);
				$("#PhysicianJson").val(JSON.stringify(doctorlocationLength));
				var dataGrid = $('#gridContainerPhy').dxDataGrid('instance');
				dataGrid.refresh();

			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("error");
		}
	});
}




//function onLocationCellClick(e) {
//    debugger;
//    if (e.rowType == 'data' && e.columnIndex == 7) {
//        debugger;
//        if (typeof e.data.Id == 'undefined') {
//            debugger;
//            var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
//            result.done(function (dialogResult) {
//                if (dialogResult) {
//                    var dataGrid = $('#DoctorLocationsGrid').dxDataGrid('instance');
//                    $('#DoctorLocationsGrid').dxDataGrid('instance').deleteRow(e.row.rowIndex);
//                }
//            });
//        }
//        else {
//            var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
//            result.done(function (dialogResult) {
//                debugger;
//                if (dialogResult == true) {
//                    debugger;
//                    $.ajax({

//                        type: 'POST',
//                        dataType: 'json',
//                        async: false,
//                        url: '/Doctor/DeleteDoctorLocation',
//                        data: { ID: e.data.Id },
//                        success: function (m) {
//                            showNotification("Doctor Location Delete Successfully.", "success");
//                            var dataGrid = $('#DoctorLocationsGrid').dxDataGrid('instance');
//                            dataGrid.refresh();
//                        },
//                        error: function () {
//                            showNotification("Failed to delete.", "warning");
//                        }
//                    });
//                }
//                else {
//                    debugger;
//                    result.hide();
//                }

//            });

//        }
//    }
//}









function onCellClick(e) {
    debugger;
    if (e.rowType == 'data' && e.columnIndex == 7) {
        debugger;
        if (typeof e.data.Id == 'undefined') {
            debugger;
			var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
			result.done(function (dialogResult) {
				if (dialogResult) {
					var dataGrid = $('#DoctorLocationsGrid').dxDataGrid('instance');
					$('#DoctorLocationsGrid').dxDataGrid('instance').deleteRow(e.row.rowIndex);
				}
			});
		}
		else {
			var result = DevExpress.ui.dialog.confirm("Are you sure to delete the activity?", "Confirm Delete");
            result.done(function (dialogResult) {
                debugger;
                if (dialogResult == true) {
                    debugger;
                    $.ajax({
                        
                        type: 'POST',
                        dataType: 'json',
                        async: false,
                        url: '/Doctor/DeleteDoctorLocation',
                        data: { ID: e.data.Id },
                        success: function (m) {
                            showNotification("Doctor Location Delete Successfully.", "success");
                            var dataGrid = $('#DoctorLocationsGrid').dxDataGrid('instance');
                            dataGrid.refresh();
                        },
                        error: function () {
                            showNotification("Failed to delete.", "warning");
                        }
                    });
                }
                else {
                    debugger;
                    result.hide();
                }
				
			});
			
		}
	}
}
