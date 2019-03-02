function CoveringCmChanged() {

    Loadcasenumbers();
    RefreshGrid();
    //var coveringcmid = $("#coveringcm").dxSelectBox('instance').option('value');
}


function cmChanged() {

    //var coveringcmid = $("#coveringcm").dxSelectBox('instance').option('value');
    Loadcasenumbers();
    //Loadcasenumbers1();
    RefreshGrid();
}

function GetselectedUserId() {
    var data = $("#userSelect").dxSelectBox('instance');
    if (typeof data !== 'undefined') {
        var t = $("#userSelect").dxSelectBox('instance').option('value');
    } else t = null;
    return t;
}

function RefreshGrid() {
    var gridname = $('#activebuckets').val();
    var dataGrid = $(gridname).dxDataGrid('instance');
    if (typeof dataGrid !== 'undefined') {
        dataGrid.refresh();
    }
}

//function RefreshGridFromBucket() {
//    debugger;
//    var gridname = $('#activebuckets').val();
//    var dataGrid = $(gridname).dxDataGrid('instance');
//    if (typeof dataGrid !== 'undefined') {
//        dataGrid.refresh();
//    }
//}


function GetSelectedDate() {
    var data = $("#caseUpdatedDate").dxDateBox('instance'); //.option('value');
    if (data != null && typeof data !== 'undefined' && data.option('value') != null) {
        return data.option('value').toISOString();
    } else return null;
}

function GetSelectedCoveringCmId() {
    //Loggedinuser if null//
    //If selected then value of selected covering cm//

    var data = $("#coveringcm").dxSelectBox('instance');
    if (typeof data !== 'undefined') {
        var coveringcm = $("#coveringcm").dxSelectBox('instance').option('value');
    } else coveringcm = null;
    return coveringcm;
}


function changeSendMailColor(item, row) {
    //if (row.data.report_id == '1432') {
    //    debugger;
    //}
    var actionHTML = '<a title="Send Email" href="#" onclick="SendInvoice(' +
        '\'' +
        row.data.report_id +
        '\',\'' +
        row.data.casemanager +
        '\',\'' +
        row.data.claimno +
        '\',\'' +
        row.data.account +
        '\',\'' +
        row.data.ref_id +
        '\',\'' +
        row.data.client +
        '\',\'' +
        row.data.report_type_desc +
        '\',\'' +
        row.data.account_id +
        '\');">';
    if (row.data.send_invoice == true) {
        actionHTML += '<i class="fa fa-paper-plane fa-1x" style="color:#38ef38"></i></a>';
    } else
        actionHTML += '<i class="fa fa-paper-plane fa-1x"></i></a>';

    actionHTML += '<a title="Email Log" href="#" onclick="invoiceLog(' +
        "'" +
        row.data.report_id +
        "'" +
        ')" style="padding-left: 7px;"><i class="fa fa-list" style="color:#2717b6"></i></a>';
    item[0].innerHTML = actionHTML;
}

function invoiceLog(reportId) {
    var url = '/Report/_ViewEmailLog?reportId=' + reportId;
    showModalPopup(url, '555', '800', 'Email Log');
}

function SendInvoice(report_id, casemanager, claimno, company, ref_id, client, report_type, account_id) {
    //alert(report_id);
    //alert(casemanager);
    //alert(claimno);
    //alert(company);
    var url = '/Report/_SendEmail?report_id=' +
        encodeURIComponent(report_id) +
        '&casemanager=' +
        encodeURIComponent(casemanager) +
        '&claimno=' +
        encodeURIComponent(claimno) +
        '&company=' +
        encodeURIComponent(company) +
        '&ref_id=' +
        encodeURIComponent(ref_id) +
        '&client=' +
        encodeURIComponent(client) +
        '&account_id=' +
        encodeURIComponent(account_id) +
        '&report_type=' +
        encodeURIComponent(report_type);
    showModalPopup(url, '550', '800', 'Send Email');
    //$.ajax({
    //    type: 'POST',
    //    url: '/Report/SendEmail',
    //    dataType: 'json',
    //    data: { report_id: report_id, casemanager: casemanager, claimno: claimno, company: company },
    //    success: function (data) {
    //        var popup = $("#universalPopup").dxPopup("instance");
    //        popup.hide();
    //        showNotification("Invoice sent successfully.", "success");
    //        setTimeout(function () {
    //            window.location.reload();
    //        }, 2000);
    //        //RefreshReportGrid();
    //    },
    //    error: function () {
    //        showNotification("Failed to Sent Invoice.", "warning");
    //    }
    //});

    //$.ajax({
    //    type: 'POST',
    //    url: '/Report/SendInvoice',
    //    dataType: 'json',
    //    data: { report_id: report_id },
    //    success: function (data) {
    //        var popup = $("#universalPopup").dxPopup("instance");
    //        popup.hide();
    //        showNotification("Invoice sent successfully.", "success");
    //        setTimeout(function () {
    //            window.location.reload();
    //        }, 2000);
    //        //RefreshReportGrid();
    //    },
    //    error: function () {
    //        showNotification("Failed to Sent Invoice.", "warning");
    //    }
    //});

}

function editcellclick(e) {
    if (e.rowType == 'data' && (e.column.dataField == "claimno")) {
        var id = e.data.ref_id;
        e.cellElement.css('color', '#0404B4');

        //e.cellElement.css("cursor", "pointer");
        window.open('/Referral/AddEdit/' + id, '_self');

    }
}

function btnCancelClick() {

    var popup = $("#universalPopup").dxPopup("instance");
    popup.hide();

}

function btnSendClick(report_id) {
    var reportId = report_id;
    var reason = $('#rejectEmail').val();

    RejectReport(reportId, reason);
}


function cellPrepared(e) {
    if (e.rowType == 'data' && (e.column.dataField == "claimno")) {
        e.cellElement.css("cursor", "pointer");
        e.cellElement.css('color', '#0404B4');
        e.cellElement.addClass('');
    } else if (e.rowType == 'data' && (e.column.dataField == "diarydate")) {
        console.log(e.data);
        if ($.trim(e.data.diarydatecolor) == "Red") {
            e.cellElement.css('color', '@ColorCode.Red');
        } else if ($.trim(e.data.diarydatecolor) == "Yellow") {
            e.cellElement.css('color', '@ColorCode.Orange');
        } else if ($.trim(e.data.diarydatecolor) == "Green") {
            e.cellElement.css('color', '@ColorCode.Green');
        }
    }
}

function DeleteCase(id) {
    var action = function() {

        $.ajax({
            type: "Get",
            url: "/Referral/Delete",
            data: { id: id },
            dataType: "json",
            success: function(data) {
                console.log(data);
                if (data.success) {
                    var popup = $("#universalPopup").dxPopup("instance");
                    popup.hide();
                    showNotification("Case Deleted Successfully.", "success");
                    setTimeout(function() {
                            window.location.reload();
                        },
                        2000);
                } else {
                    showNotification("Failed to delete case !!", "warning");
                }
            },
            error: function() {
                showNotification("Failed to delete case !!", "warning");
            }
        });

    }

    ConfirmAction(action, 'Are you sure to delete the case ?', 'Confirm Delete');

    return false;
}

function CloseCase(id) {
    var url = "/Referral/ReferralClosurePopup?id=" + id;
    showModalPopup(url, '550', '600', 'Close Case');
}

function cellClick(e) {
    if (e.rowType == 'data' && (e.column.dataField == "claimno")) {
        var id = e.data.ref_id;
        e.cellElement.css("cursor", "pointer");
        e.cellElement.css('color', '#0404B4');

        window.open('/Referral/AddEdit/' + id, '');

    }
}

function indexGridCellTemplate(item, row) {

    if (e.rowType == 'data' && (e.column.dataField == "claimno")) {
        e.cellElement.css("cursor", "pointer");
        e.cellElement.css('color', '#0404B4');

        e.cellElement.addClass('gridPointerColor');
    }
    var t = '<span class="fa fa-bookmark" title=\"Master Case\"> </span> ';
    var is_master = row.data.is_master;
    if (is_master == '1') {
        item[0].innerHTML = t + row.data.claimno;
    } else {
        item[0].innerHTML = row.data.claimno;
    }
}

function DirectCloseCase(id) {
    var result = DevExpress.ui.dialog.confirm("Are you sure to close this case?", "Close Case");
    result.done(function(dialogResult) {
        if (dialogResult) {
            //DevExpress.ui.dialog.alert('Success', 'Close Case');
            $.ajax({
                type: 'POST',
                url: '/Referral/DirectCloseCase',
                dataType: 'json',
                data: { id: id },
                success: function(data) {
                    if (data.status) {
                        showNotification("Case Closed Successfully.", "success");
                        //var dataGrid = $('#CaseGrid').dxDataGrid('instance');
                        //dataGrid.refresh();
                        //setTimeout(function () {
                        window.location.reload();
                        //}, 20);
                    } else
                        showNotification("Failed !!", "warning");
                },
                error: function() {
                    showNotification("error !!", "warning");
                }
            });
        }
    });
}

function DirectOpenCase(id) {
    var result = DevExpress.ui.dialog.confirm("Are you sure to open this case?", "Open Case");
    result.done(function(dialogResult) {
        if (dialogResult) {
            //DevExpress.ui.dialog.alert('Success', 'Close Case');
            $.ajax({
                type: 'POST',
                url: '/Referral/DirectOpenCase',
                dataType: 'json',
                data: { id: id },
                success: function(data) {
                    if (data.status) {
                        showNotification("Case Opened Successfully.", "success");
                        Loadreportnumbers();
                        var dataGrid = $('#closedcasegrid').dxDataGrid('instance');
                        dataGrid.refresh();


                        setTimeout(function() {
                                window.location.reload();
                            },
                            20);
                    } else
                        showNotification("Failed !!", "warning");
                },
                error: function() {
                    showNotification("error !!", "warning");
                }
            });
        }
    });
}
