$(document).ready(function () {

    $('.custompop .close').click(function () {
        $('.custompop').fadeOut("1000");
    });
    $('.eyeshow').click(function () {
        $('.custompop').fadeIn("1000");
    });



    //var research = $('#Research').val();
    //var intakeuser = $('#IsIntakeVerify').val();
    //var CMType = $('#caseType').val();
    //if ((typeof research == 'undefined') && CMType == 1) {
    //    $('#VerifyIntake').html('Intake Verify');
    //}

    //if (intakeuser > 0 && CMType == 1) {
    //    $('#VerifyIntake').html('Research Verify');
    //}
    //to make equal height 
    CalcdivHeight();


    $('#dvSubService').hide();
    $('#dvAtt').hide();
    $('#dvdAtt').hide();
    //$('#Promos').hide();
    $('#Adjustment').hide();
    //$('#PromosHours').hide();
    $('#AdjustmentHours').hide();
    $('#ddlService').on('change', function () {
        debugger;
        if ($('#ddlService :selected').val() === 1) {
          
            $('#dvSubService').hide();
            $('#CaseNumber').val('SUR' + '-' + $('#MaxCaseID').val());
            //$('#CaseNumber1').val('SUR' + '-' + $('#MaxCaseID').val());

        }
        else if ($('#ddlService :selected').val() == 2) {
            $('#dvSubService').show();
            $('#CaseNumber').val('SUI' + '-' + $('#MaxCaseID').val());
           // $('#CaseNumber1').val('SUI' + '-' + $('#MaxCaseID').val());

        }
        else if ($('#ddlService :selected').val() == 3) {
            $('#dvSubService').hide();
            $('#CaseNumber').val('SOM' + '-' + $('#MaxCaseID').val());
            //$('#CaseNumber1').val('SOM' + '-' + $('#MaxCaseID').val());
        }
    });
    $('#drpCode').on('change', function () {
        if ($('#drpCode :selected').val() == "") {
            $('#Promos').hide();
            $('#Adjustment').hide();
            //$('#Adjustment').val('');
            //$('#Promos').val('');

        }
        else if ($('#drpCode :selected').val() == 1) {
            $('#Promos').show();
            $('#Adjustment').hide();
            //$('#Adjustment').val('');
        }
        else if ($('#drpCode :selected').val() == 2) {
            $('#Promos').hide();
            $('#Adjustment').show();
            //$('#Promos').val('');
        }
    });
    $('#drpCodeHours').on('change', function () {
        if ($('#drpCodeHours :selected').val() == "") {
            $('#PromosHours').hide();
            $('#AdjustmentHours').hide();
            //$('#AdjustmentHours').val('');
            //$('#PromosHours').val('');

        }
        else if ($('#drpCodeHours :selected').val() == 1) {
            $('#PromosHours').show();
            $('#AdjustmentHours').hide();
            //$('#AdjustmentHours').val('');
        }
        else if ($('#drpCodeHours :selected').val() == 2) {
            $('#PromosHours').hide();
            $('#AdjustmentHours').show();
            //$('#PromosHours').val('');
        }
    });
    $('#attCheck').on('click', function () {
        if ($('#attCheck').prop('checked') == true) {
            $('#dvAtt').show();
        }
        else {
            $('#dvAtt').hide();
        }
    });
    $('#dattCheck').on('click', function () {
        if ($('#dattCheck').prop('checked') == true) {
            $('#dvdAtt').show();
        }
        else {
            $('#dvdAtt').hide();
        }
    });

    //$(document).on('change', '#ClaimantInfoDetails_CaseManagerType', function () {
    //    LoadMapData();
    //});

    $("#cmdiv").dxSelectBox({
        dataSource: [

        ],
        placeholder: "Select a Case Manager",
        width: "94%",
        value: null
    });

    //LoadMapData();

    //$('#ClaimantInfoDetails_CaseManagerType').on('Change',function() {
    //    alert('cdld');
    //    LoadMapData();
    //});
    //$('.excellentresultcheckbox').on('switchChange.bootstrapSwitch', function (event, state) {
    //    var is_excellent = 0;
    //    if (state == true) { is_excellent = 1; }
    //    var case_id = $(this).data('for');      
    //    SaveExcellentResult(case_id, is_excellent)
    //});


});
function  SaveExcellentResult(case_id, is_excellent)
{
    alert(case_id);
    alert(is_excellent);
    $.ajax({
        type: "POST",
        url: "/Referral/UpdateInvestigationResulatStatus/",
        data: { caseid: case_id, resultstatus: is_excellent },
        dataType: "json",
        success: function (data) {
            if (data.success) {
                showNotification("Investigation Result Status Changed Successfully", "success");
                return true;
            } else {
                return false;
                showNotification("Could not perform request", "warning");
            }
        },
        error: function () {
            return false;
            showNotification("Failed", "warning");
        }
    });
}

var casemanagerCount = 1;
function addLink() {
    $('#gridMgr').dxDataGrid("instance").insertRow();
    //var anchor = $('<div class="col-sm-14" id="casemanagerdiv' + casemanagerCount + '"><div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"><select name="account" class="form-control m-b"><option disabled selected>Services</option><option></option><option></option><option></option></select></div><div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"><input class="form-control m-b" placeholder="Case Managers" type="text"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12"><div class="btn-group " onclick="deleteLink(' + casemanagerCount + ')"><a href="#" class="btn btn-sm btn-danger btn-transparent"><i class="fa fa-trash-o "></i></a></div></div></div>');
    //$('#addCaseManager').after(anchor);
    //casemanagerCount++;
    //$('#casemanagerdiv').attr('casemanagerdiv', num);

}

function deleteLink(casemanagerId) {
    console.log(casemanagerId);
    $('#casemanagerdiv' + casemanagerId).remove();
    casemnagerCount--;
    //$(this).closest("#casemanagerdiv").remove();
    //$(this).closest("div").remove();
}

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

}

function yesnoCheck1() {
    if (document.getElementById('yesCheck1').checked) {
        document.getElementById('ifYes1').style.visibility = 'visible';
    }
    else document.getElementById('ifYes1').style.visibility = 'hidden';

}

function syncTreeViewSelection(treeView, value) {
    if (!value) {
        treeView.unselectAll();
        return;
    }
    //treeView.selectItem(value);
    value.forEach(function (key) {
        treeView.selectItem(key);
    });
}


var idTextMap = [{ id: "1", text: "SUR" }, { id: "3", text: "SIU" }, { id: "2", text: "SOM" }];

var testsiu = [393,12, 13, 14, 15, 16, 17, 22, 42, 48, 51, 53, 54, 357, 359, 373, 377, 378, 380, 381, 382, 390, 409, 410, 411, 412, 413, 414, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 451, 452, 453, 454, 455, 456, 457, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473,474, 475, 476, 477, 478, 479, 480];
var testsur = [396,11, 23, 415, 416, 417, 418, 438, 439, 440, 441, 442, 443, 444, 445];
var testdss = [399,18, 19, 20, 21, 24, 25, 26, 27, 28, 29, 31, 34, 35, 36, 39, 40, 43, 44, 45, 46, 49, 356, 358, 360, 361, 362, 379, 446, 447, 448, 449, 450, 458, 459, 460, 461, 462, 463];
//var SURIds = [11, 23, 415, 416, 417, 418, 438, 439, 440, 441, 442, 443, 444, 445, 481, 482, 483, 485, 505];
var IMEIds = [];// [398, 50, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 317, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 355, 364, 366, 367, 369, 371, 372, 374, 383, 384, 385, 386, 389];
var SURVDSSIds = [];// [403, 375];
var TRIIds = [];//[405, 30];
var OFFIds = [];//[406, 47, 52];
var IMESURVIds = [];// [404, 316];
//var SIUIds = [12, 13, 14, 15, 16, 17, 29, 30, 36, 42, 48, 49, 51, 53, 54, 357, 359, 373, 377, 378, 380, 381, 382, 390, 409, 410, 411, 412, 413, 414, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 451, 452, 453, 454, 455, 456, 457, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 484, 486, 487, 507];

//var DSSIds = [18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 31, 34, 35, 39, 40, 43, 44, 45, 46, 47, 356, 358, 360, 361, 362, 379, 446, 447, 448, 449, 450, 458, 459, 460, 461, 462, 463, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 506];

//var SIUIds = [12, 13, 14, 15, 16, 17, 29, 30, 36, 42, 48, 49, 51, 53, 54, 357, 359, 373, 377, 378, 380, 381, 382, 390, 409, 410, 411, 412, 413, 414, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 451, 452, 453, 454, 455, 456, 457, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 484, 486, 487, 507,508,509,510,511,512,1401,1402];
//var SURIds = [11, 23, 415, 416, 417, 418, 438, 439, 440, 441, 442, 443, 444, 445, 481, 482, 483, 485, 505];
//var DSSIds = [18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 31, 34, 35, 39, 40, 43, 44, 45, 46, 47, 356, 358, 360, 361, 362, 379, 446, 447, 448, 449, 450, 458, 459, 460, 461, 462, 463, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 506];
//SIUIds = [12, 13, 14, 15, 16, 17, 29, 30, 36, 42, 48, 49, 51, 53, 54, 357, 359, 373, 378, 380, 381, 382, 390, 409, 410, 411, 412, 413, 414, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 451, 452, 453, 454, 455, 456, 457, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 484, 485, 486, 487, 507, 508, 509, 510, 511, 512, 1401, 1402];

//SURIds = [11, 23, 415, 416, 417, 418, 438, 439, 440, 441, 442, 443, 444, 445, 481, 482, 483, 505, 1399, 1400];
//DSSIds = [18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 31, 34, 35, 39, 40, 43, 44, 45, 46, 47, 356, 358, 360, 361, 362, 377, 379, 446, 447, 448, 449, 450, 458, 459, 460, 461, 462, 463, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 506];
var SIUIds = [12,1413, 13, 14, 15, 16, 17, 29, 30, 36, 42, 48, 49, 51, 53, 54, 357, 359, 373, 378, 380, 381, 382, 390, 409, 410, 411, 412, 413, 414, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 451, 452, 453, 454, 455, 456, 457, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 484, 486, 487, 507, 508, 509, 510, 511, 512, 1401, 1402, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412];
var SURIds = [11, 23, 415, 416, 417, 418, 438, 439, 440, 441, 442, 443, 444, 445, 481, 482, 483, 505, 1399, 1400];
var DSSIds = [18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 31, 34, 35, 39, 40, 43, 44, 45, 46, 47, 356, 358, 360, 361, 362, 377, 379, 419, 420, 446, 447, 448, 449, 450, 458, 459, 460, 461, 462, 463, 485, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 506];
var parents = [396, 398, 403, 404, 405, 406, 393, 399];

function treeBox_valueChanged(e) {
  //  console.log(e.itemData.parentServiceTextId);
   // var treeViewInstancess = $('#mytreename').dxTreeView('instance');
   // var td = treeViewInstancess.getNodes();
   // var tdd = treeViewInstancess.items;
   // console.log('idid');
   // console.log(tdd);
    
   // var nn = treeViewInstancess.itemData;
   // ///var tss = treeViewInstancess.element().find(".dx-treeview-node")[1].dataset.itemId
   //// var tss = treeViewInstancess.element().find(".dx-treeview-node")[1].dataset;
   // var itemToSelect = treeViewInstancess.element().find('.dx-treeview-item')[0];

   // key = '18';
   // var itemElement = treeViewInstancess.element().find("[data-item-id='" + key + "'] > .dx-treeview-item").get(0);
   // console.log('mydata');
   // console.log(itemElement);
   //// var treeViewInstance = $('#treeViewContainer').dxTreeView('instance');
   // var $treeView = e.component.content().find(".dx-treeview");
   // var t = $treeView.dxTreeView("instance");
   //// var treeViewInstance = $('#treeViewContainer').dxTreeView('instance');
   // var key = '12';

   // var itemElement = t.element().find("[data-item-id='" + key + "'] > .dx-treeview-item").get(0);
   // console.log('data to be used');
   // console.log(itemElement);
   // dxTreeView

    var caseIdVal = $('#CaseId').val();
    if (!caseIdVal || caseIdVal == '0') {
        //if(e.sele)

        debugger;
        if (e.previousValue == null) {
            updateCaseNumber(e, 'CaseNumber', $('#MaxCaseID').val());

        }
        else if (e.previousValue.length < 1 || e.previousValue == null) {
            updateCaseNumber(e, 'CaseNumber', $('#MaxCaseID').val());
        }
        else if (e.value != null && e.value.length == 1) {
            //check if caseis siu then assign value//
            if (CheckServiceString(e.value[0]) == 'SIU') {
                updateCaseNumber(e, 'CaseNumber', $('#MaxCaseID').val());

            }
        }
        else {
            checkifvalidselectionmade(e);
        }
    }
    else {
        if (e.previousValue == null) {
            //
        }
        else if (e.previousValue.length < 1 || e.previousValue == null) {
            //
        }
        else if (e.value != null && e.value.length == 1) {    
            //
        }
        else {
            checkifvalidselectionmade(e);
        }
    }

}
function checkifvalidselectionmade(e)
{
    var selectedvalues = e.value;
    if (selectedvalues!=null && selectedvalues.length >0)
    {
        var selections = e.value;
        var previousvalues_arr = e.previousValue;

        var previousvalues_arry = new Set(previousvalues_arr);
        //var iteml = selections.filter(x => !previousvalues_arry.has(x));
        var iteml = selections.filter(function(x) { return !previousvalues_arry.has(x) });
        // var newselectedvalue = selections[selections.length - 1];
        newselectedvalue = iteml[0];
       // var firstselectedvalue = e.value[0];
        var firstselectedvalue = e.previousValue[0];

        var validity = checkifVaildselection(newselectedvalue, firstselectedvalue);
        if (validity) {
            updateCaseNumber(e, 'CaseNumber', $('#MaxCaseID').val());
            //
            //update case number//
        }
        else
        {
            var $treeView = e.component.content().find(".dx-treeview");
            $treeView.dxTreeView("instance").unselectAll();
            syncTreeViewSelection($treeView.dxTreeView("instance"), previousvalues_arr);

        }

    }
    else
    {
        if (selectedvalues == null || selectedvalues=='')
        {
            $('#CaseNumber').val('');
            var $treeView = e.component.content().find(".dx-treeview");
            $treeView.dxTreeView("instance").unselectAll();
            $("#show-icon").html('');
            $("#show-icon").html('');
            $('.custompop').fadeOut("100");
        }
    }

}
function setcasenumber(args, targetId, maxCaseId)
{
    //var $treeView = e.component.content().find(".dx-treeview");
    //if ($treeView.length) {
    //    syncTreeViewSelection($treeView.dxTreeView("instance"), e.value);

    //}
    var textToReplace = "";
    if (args.component.getSelectedNodesKeys().length > 0) {
            $("#show-icon").addClass(args.node.itemData.shortEsc);

            textToReplace = args.node.itemData.shortEsc;
            if (args.node.itemData.parentServiceTextId == 393) {

                if (args.component.getSelectedNodesKeys().length > 1)
                {
                    //alert('nodes ' + args.component.getSelectedNodesKeys());
                    textToReplace = 'FIELD'; $("#show-icon").removeClass();
                 }
            }

            $('#' + targetId).val(textToReplace + '-' + maxCaseId);
           // $('#CaseNumber1').val(textToReplace + '-' + maxCaseId);
        }
        else {
            textToReplace = '';
            $('#' + targetId).val('');
            $("#show-icon").removeClass();
        }
}


function checkserviceinput(info,args) {

    var selectedservices = args;
    var items = selectedservices;
    var setservice = true;
    if (selectedservices != null && selectedservices.length > 1)
    {
        var first_item = selectedservices[0];
        var inserted_item = items[items.length - 1]; //alert(inserted_item);
        setservice = checkifVaildselection(inserted_item,first_item);
        if (setservice)
        {

            setcasenumber(info, 'CaseNumber', $('#MaxCaseID').val());
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        setcasenumber(info, 'CaseNumber', $('#MaxCaseID').val());
        return true;
    }
  
}
function checkserviceinputforchild(info, args) {

    var selectedservices = args;
    var items = selectedservices;
    var setservice = true;
    if (selectedservices != null && selectedservices.length > 1) {
        var first_item = selectedservices[0];
        var inserted_item = items[items.length - 1]; //alert(inserted_item);
        setservice = checkifVaildselection(inserted_item, first_item);
        if (setservice) {
            setcasenumber(info, 'childCaseNumber', $('#childMaxCaseId').val());
            return true;
        }
        else {
            return false;
        }
    }
    else {
        setcasenumber(info, 'childCaseNumber', $('#childMaxCaseId').val());
        return true;
    }

}

function CheckServiceString(valueToCheck)
{
    var servicestring = '';
    if (SURIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'SURV';
    } else if (IMEIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'IME';
    } else if (SURVDSSIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'SURVDSS';
    } else if (TRIIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'TRI';
    } else if (OFFIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'OFF';
    } else if (IMESURVIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'IMESURV';
    } else if (SIUIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'SIU';
    } else if (DSSIds.indexOf(valueToCheck) >= 0) {
        servicestring = 'DSS';
    }
    return servicestring;
}

function checkifVaildselection(curval,preval)
{

    var result = true;
    if (curval != null )
    {
        var previousservice = CheckServiceString(preval);
        if (previousservice == 'SIU') {
            var currentservice = CheckServiceString(curval);//curval.pop();
            if (previousservice != currentservice) { alert('Selection is not Allowed, Please Select Sub Services of  ' + previousservice); result = false; }
        }
        else
        {
            alert('You cannot select multiple services for this type.'); result = false;
        }
    }
    return result;
}


function childCaseTreeBox_valueChanged(e) {
  //  updateCaseNumber(e, 'childCaseNumber', $('#childMaxCaseId').val());
    e.component.close();

        if (e.previousValue == null) {
            updateCaseNumber(e, 'childCaseNumber', $('#childMaxCaseId').val());

        }
        else if (e.previousValue.length < 1 || e.previousValue == null) {
            updateCaseNumber(e, 'childCaseNumber', $('#childMaxCaseId').val());
        }
        else if (e.value != null && e.value.length == 1) {
            //check if caseis siu then assign value//
            if (CheckServiceString(e.value[0]) == 'SIU') {
                updateCaseNumber(e, 'childCaseNumber', $('#childMaxCaseId').val());

            }
        }
        else {
            checkifvalidselectionmade(e);
        }
    


    if (e.value && e.value.length > 0) {
        $('#createSubCaseButton').prop('disabled', false);

    } else {
        $('#createSubCaseButton').prop('disabled', true);

    }

}
function updateCaseNumber(e, targetId, maxCaseId) {
    //    var $treeView = e.component.content().find(".dx-treeview");
    //if ($treeView.length) {
    //    syncTreeViewSelection($treeView.dxTreeView("instance"), e.value);
    //}
    var textToReplace = "";
    if (e.value && e.value.length > 0)
    {
        var valueToCheck = e.value[0];
        var is_SIU = 0;
        var multiple_service = 0;
        if (SIUIds.indexOf(valueToCheck) >= 0)
        {
            is_SIU = 1;
            if (e.value.length > 1) { multiple_service = 1; }
        }

        // $('#CaseNumber1').val(textToReplace + '-' + maxCaseId);
        GetServiceIcon(e.value, is_SIU, multiple_service ,maxCaseId, targetId);

    } else {
        textToReplace = '';

        $('#' + targetId).val('');
        $("#show-icon").removeClass();


    }
}



function caseNumber_valueChanged(e) {
    console.log('Case number changed');
    console.log(e);

    var $dataGrid = $("#caseNumberDatagrid");

    console.log($dataGrid);

    if ($dataGrid.length) {
        var dataGrid = $dataGrid.dxDataGrid("instance");
        dataGrid.selectRows(e.value, false);

        window.location = '/Referral/AddEdit/' + e.value;
        if (e.previousValue != null) {
            e.component.close();

        }
    }
}

function gridBox_valueChanged(e) {
  
    var $dataGrid = $("#embedded-datagrid");
    if ($dataGrid.length) {
        var dataGrid = $dataGrid.dxDataGrid("instance");
        dataGrid.selectRows(e.value, false);
        if (e.previousValue != null) {
            e.component.close();
        }
    }
}


function getCase_Number(data) {
    debugger;
	var caseIdVal = $('#CaseId').val();
	//if (!caseIdVal || caseIdVal == '0') { 
		GetServiceAbbr(data, 'CaseNumber', $('#MaxCaseID').val());
	//}
	 
}

function GetServiceAbbr(e, targetId, maxCaseId) {
	var icon = ""; 
	$.ajax({
		type: "GET",
		url: "/Case/GetServiceShortDesc",
		dataType: 'json',
		data: { service_id: e.value.toString() },
		success: function (data) {

			$('#' + targetId).val(data.shortDesc + '-' + maxCaseId);
		}
	});
}





function gridBox_displayExpr(item) {
    //debugger;
    if (typeof item !== "undefined") {

        var name = item.companyName;
		$('#companytext').val(item.companyName);

    }
	return item && item.client_FirstName + " " + item.client_LastName;

}



function gridbox_valueChanged(data) {
    //debugger;
    clientOnChange(data);
    if (data.value == null) {
		document.getElementById('companytext').value = "";

		//Start Comment By Vinay 

        //document.getElementById('companyNotes').value = "";
        // document.getElementById('specialInstructions').value = "";
		//End Comment By Vinay 

        //data.previousValue.setValue(null);
        var $dataGrid = $("#embedded-datagrid");
        var dataGrid = $dataGrid.dxDataGrid("instance");
        dataGrid.selectRows(data.value, false);
        data.component.close();
        //$("companytext")
        //$("companyNotes")
    }
    else if (data.value != null) {
        var $dataGrid1 = $("#embedded-datagrid");
        if ($dataGrid1.length) {
            var dataGrid = $dataGrid1.dxDataGrid("instance");
            dataGrid.selectRows(data.value, false);
            if (data.previousValue != null) {
                data.component.close();
            }
        }
    }
}
function gridBox_displayExprNew(item) {
    //if (typeof item !== "undefined") {
    //    var name = item.caseNumber;        
    //}
    return item && item.caseNumber;
}



//function Calculateage(e) {
//    dateDiff(new Date(e.value));
//}

//function dateDiff(secondDate) {
//    var diffInDay = Math.floor(Math.abs((new Date() - secondDate) / (24 * 60 * 60 * 1000) / 365));
//    if (diffInDay != NaN) {
//        $("#age").val(diffInDay);
//    } else {
//        $("#age").val('');

//    }
//}

$("#CancelBtn").click(function () {
    $(window).unbind('beforeunload');
    if (confirm("Are you sure you want to cancel ?")) {
        window.history.back();
    }
});

$("#CancelBtn1").click(function () {
    $(window).unbind('beforeunload');
    if (confirm("Are you sure you want to cancel ?")) {
        window.history.back();
    }
});

$("#CancelBtn2").click(function () {
    $(window).unbind('beforeunload');
    if (confirm("Are you sure you want to cancel ?")) {
        window.history.back();
    }
});

$(document).ready(function () {

    if ($("#Dob").val() != '') {
        dateDiff(new Date($("#Dob").val()));
    }

    $('.chkbox').each(function () {
        var isck = $(this).data('toggle');
        var val = $(this).data('for');
        $('#' + val).hide();
        if (isck == 'True') {
            $('#' + val).show();
        }
    });


    $('#addChildCaseButton').click(function (event) {
        $("#mPopup").dxPopup("show");

        //showModalPopup('/Referral/CreateChildCase', 500, 800, 'Hello');
    });


    $(".chkbox").bootstrapSwitch();
    $('.chkbox').on('switchChange.bootstrapSwitch', function (event, state) {
        var val = $(this).data('for');
        $('#' + val).hide();
        if (state == true) {
            $('#' + val).show();
        }
    });




});

//For Map Implementation
var markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";

function checkBox_onValueChanged(data) {
    var mapWidget = $("#map").dxMap("instance");
    var markersData = mapWidget.option("markers");
    var newMarkers = $.map(markersData, function (item) {
        return $.extend(true, {}, item, { tooltip: { isShown: false } });
    });
    mapWidget.option("markers", newMarkers);
    mapWidget.option("markerIconSrc", data.value ? markerUrl : null);
}

function button_onClick() {
    var mapWidget = $("#map").dxMap("instance");
    var markersData = mapWidget.option("markers");
    var newMarkers = $.map(markersData, function (item) {
        return $.extend(true, {}, item, { tooltip: { isShown: true } });
    });
    mapWidget.option("markers", newMarkers);
}

var state = "";
var finaldata = "";

//function InitializeMap() {
//    var mapWidget = $("#map").dxMap("instance");
//    markersData = [];
//    mapWidget = $("#map").dxMap({
//        zoom: 11,
//        height: 440,
//        width: "100%",
//        controls: true,
//        center: "40.749825, -73.987963",
//        // markerIconSrc: markerUrl,
//        markers: markersData,
//    }).dxMap("instance");

//    markersData = [];

//    mapWidget.addMarker(markersData);

//}
function OnTypeChange() {
   
    
    OnStateChange();
}
function OnStateChange() {

    //state = s.selectedItem.code;
    var state = $("#drpstate").dxSelectBox("instance").option('value');
    var type = $("#drpType").dxSelectBox("instance").option('value');
    //CreateCaseManagerDropDownList(state);
    LoadMapData(state,type);
}

function gridBox_displayContact(item) {
    return item && item.name;
}

function addLink() {
    $('#gridMgr').dxDataGrid("instance").insertRow();
}

function editState() {
    var selectBoxWidget = $("#drpstate").dxSelectBox("instance").option("disabled", false);
}


function LoadMapData( state,  type) {
    //  alert($('#CaseId').val());
    if ($('#CaseId').val() != null && $('#CaseId').val() > 0) {
        //debugger;
        var h = document.getElementsByName("ClaimantInfoDetails.CaseManagerType")[0];
        //alert(h.value);
        $.ajax({
            type: "GET",
            url: "/Case/GetCaseManagersByState",
            dataType: 'json',
            //data: { state: state, caseId: $("#CaseId").val(), managerType: $('#ClaimantInfoDetails_CaseManagerType').val() },
            data: { state: state, caseId: $("#CaseId").val(), managerType: type },
            success: function (data) {

                finaldata = data;
                var obj = {};
                obj.cmList = [];

                //CreateMap(data, obj);
                CreateCaseManagerDropDownList(data);
                //  mapWidget.addMarker(markersData);

            }
        });
    }
}

//function CreateMap(data, obj) {
//    var mapWidget = $("#map").dxMap("instance");
//    markersData = [];
//    mapWidget = $("#map").dxMap({
//        zoom: 11,
//        height: 440,
//        width: "100%",
//        controls: true,
//        center: "40.749825, -73.987963",
//        // markerIconSrc: markerUrl,
//        markers: markersData,
//    }).dxMap("instance");

//    markersData = [];

//    mapWidget.addMarker(markersData);
//    var subjectLattitude = parseFloat($('#ClaimantInfoDetails_Latitude').val()).toFixed(6) || 0;
//    var subjectLongitude = parseFloat($('#ClaimantInfoDetails_Longitude').val()).toFixed(6) || 0;
//    var subjectFirstName = $('#claimanatFirstName').val();
//    var subjectLastName = $('#claimanatLastName').val();
//    var subjectEmail = $('#ClaimantInfoDetails_Email').val();
//    var subjectPhone = $('#ClaimantInfoDetails_Phone').val();
//    var subjectState = $('#ClaimantInfoDetails_Address1').val();

//    if (!isNaN(subjectLattitude) && !isNaN(subjectLongitude)) {

//        var subjectMarker = {
//            title: "Subject Details",
//            tooltip: { text: "<div id=\"information\"><h5>Subject Details</h5><br/><div class=\"details\">Name: " + subjectFirstName + " " + subjectLastName + " <br/>Email: " + subjectEmail + "<br/>Phone: " + subjectPhone + "<br/>Address: " + subjectState + "<br/></div>" },
//            location: [subjectLattitude, subjectLongitude],
//            iconSrc: "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FFFF00|FFFF00"
//        };
//        markersData.push(subjectMarker);
//        mapWidget.addMarker(markersData);
//    }

//    for (var i = 0; i < data.length; i++) {
//        var markersUrl = '';
//        var tooltip = "";
//        if (data[i].isAssigned == true) {
//            markersUrl = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|008000" //green
//            tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + data[i].tooltip.text + "<br/>Email: " + data[i].email + "<br/>Phone: " + data[i].phone + "<br/>Address: " + data[i].state + "<br/>Type: " + data[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"></div> </div>";

//        }
//        else {
//            markersUrl = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF0000" //red
//            tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + data[i].tooltip.text + "<br/>Email: " + data[i].email + "<br/>Phone: " + data[i].phone + "<br/>Address: " + data[i].state + "<br/>Type: " + data[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"> <a id=\"assignCmAnchor\" title=\"Add Case Manager\" onclick=\"assignCM('" + data[i].caseManagerId + "','" + data[i].location[0] + "','" + data[i].location[1] + "')\" href=\" # \" class=\" btn btn-sm btn-primary whitetext mt5 mr10\">Assign</a></div> </div>";
//        }

//        marker = [{
//            title: data[i].tooltip.text,
//            tooltip: { text: tooltip },
//            location: [data[i].location[0], data[i].location[1]],
//            iconSrc: markersUrl,
//            // onClick: function (e) {
//            //    var markersData = mapWidget.option("markers");
//            //    var newMarkers = $.map(markersData, function (item) {
//            //        if (item.location[0] == e.location.lat && item.location[1] == e.location.lng.toFixed(6)) {
//            //            return $.extend(true, {}, item, { tooltip: { isShown: true } });
//            //        } else {
//            //            return $.extend(true, {}, item, { tooltip: { isShown: false } });

//            //        }
//            //    });
//            //    mapWidget.option("markers", newMarkers);
//            //}
//        }];

//        obj.cmList.push({ "ID": data[i].caseManagerId, "Name": data[i].tooltip.text, "Lattitude": data[i].location[0], "Longitude": data[i].location[1] });
//        mapWidget.addMarker(marker);
//    }
//}

function CreateCaseManagerDropDownList(obj) {
   // debugger;
    //if (finaldata.length > 0) {

        $("#cmdiv").dxSelectBox({
            dataSource: new DevExpress.data.ArrayStore({
                //data: obj.cmList,
                data:obj,
                key: "ID"
            }),
            id: "cmselectbox",
            //displayExpr: "Name",
            displayExpr: "caseManager",
            //valueExpr: "ID",
            valueExpr: "caseManagerId",
            
            //value: obj.cmList[0].ID,
            //value: obj[0].caseManagerId,
            width: "94%",
            onValueChanged: function (e) {
                CaseManagerOnChange(e);

            }
        });
    //}
    //else {

    //    //var dropdown = $("#cmdiv").dxSelectBox('instance');
    //    //dropdown.empty();
    //    $("#cmdiv").dxSelectBox({
    //        dataSource: [

    //        ],
    //        placeholder: "Select a Case Manager",
    //        value: null
    //    });
    //}
}


function CaseManagerOnChange(e) {
    console.log(e);
    var lattitude = "";
    var longitude = "‎‎";
    $.ajax({
        type: "GET",
        url: "/Case/GetCaseManagerLocationById",
        dataType: 'json',
        data: { cmId: e.value },
        success: function (data1) {

            if (data1 != null) {
               // lattitude = data1.lattitude;
               // longitude = data1.longitude;
               // ChangeMarkerColorCode(lattitude, longitude, 0)
            }
        }
    });
}

function assignCM(cmId, lattitude, longitude) {
    SaveCaseManager(cmId);
}

function SaveCaseManager(cmId) {

    if (cmId === 0) {
        cmId = $("#cmdiv").dxSelectBox('instance').option("value");
    }
    if ($("#cmdiv").dxSelectBox('instance').option("value") != null) {
        $.ajax({
            type: "POST",
            url: "/Case/AssignCaseManager",
            dataType: 'json',
            data: {
                caseId: $("#CaseId").val(), cmId: cmId, typeId: $('#ClaimantInfoDetails_CaseManagerType').val()
            },
            success: function (data) {
                if (data === 1) {
                    showNotification("Case Manager Assigned Successfully.", "success");

                   // $('#CMAssignMessage').css({ 'display': 'block' }).fadeIn().delay(10000).fadeOut();
                  //  LoadMapData();
                    $("#gridMgr").dxDataGrid("instance").refresh();
                }
                else {
                    showNotification("Case manager is already assigned!!.", "danger");

                   // $('#DuplicateInfo').css({ 'display': 'block' }).fadeIn().delay(10000).fadeOut();
                }
            }
        });
    }
    else {
        showNotification("Please Select Case manager", "danger");
       // $('#CMAssignInfo').css({ 'display': 'block' }).fadeIn().delay(10000).fadeOut();
    }
}

function ChangeMarkerColorCode(lattitude, longitude, cmId) {
    var mapWidget = $("#map").dxMap("instance");
    markersData = [];
    mapWidget = $("#map").dxMap({
        zoom: 11,
        height: 440,
        width: "100%",
        controls: true,
        center: "40.749825, -73.987963",
        // markerIconSrc: markerUrl,
        markers: markersData,
    }).dxMap("instance");

    markersData = [];

    mapWidget.addMarker(markersData);
    for (var i = 0; i < finaldata.length; i++) {

        if (finaldata[i].location[0] == lattitude && finaldata[i].location[1] == longitude) {
            if (finaldata[i].isAssigned == true) {
                markersUrl1 = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|1E90FF"; //blue
                tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + finaldata[i].tooltip.text + "<br/>Email: " + finaldata[i].email + "<br/>Phone: " + finaldata[i].phone + "<br/>Address: " + finaldata[i].state + "<br/>Type: " + finaldata[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"></div> </div>";
                marker = [{
                    title: finaldata[i].tooltip.text,
                    tooltip: { text: tooltip, isShown: true },
                    location: [finaldata[i].location[0], finaldata[i].location[1]],
                    iconSrc: markersUrl1,
                    //onClick: function (e) {
                    //    var markersData = mapWidget.option("markers");
                    //    var newMarkers = $.map(markersData, function (item) {
                    //        if (item.location[0] == e.location.lat && item.location[1] == e.location.lng.toFixed(6)) {
                    //            return $.extend(true, {}, item, { tooltip: { isShown: true } });
                    //        } else {
                    //            return $.extend(true, {}, item, { tooltip: { isShown: false } });

                    //        }
                    //    });
                    //    mapWidget.option("markers", newMarkers);
                    //}
                }];

                mapWidget.addMarker(marker);
            }
            else if (finaldata[i].isAssigned == false) {
                /// markersUrl = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|1E90FF" //blue
                markersUrl2 = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|1E90FF";
                tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + finaldata[i].tooltip.text + "<br/>Email: " + finaldata[i].email + "<br/>Phone: " + finaldata[i].phone + "<br/>Address: " + finaldata[i].state + "<br/>Type: " + finaldata[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"> <a id=\"assignCmAnchor\" title=\"Add Case Manager\" onclick=\"assignCM('" + finaldata[i].caseManagerId + "','" + finaldata[i].location[0] + "','" + finaldata[i].location[1] + "')\" href=\" # \" class=\" btn btn-sm btn-primary whitetext mt5 mr10\">Assign</a></div> </div>";

                marker = [{
                    title: finaldata[i].tooltip.text,
                    tooltip: { text: tooltip, isShown: true },
                    location: [finaldata[i].location[0], finaldata[i].location[1]],
                    iconSrc: "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|1E90FF",
                    //onClick: function (e) {
                    //    var markersData = mapWidget.option("markers");
                    //    var newMarkers = $.map(markersData, function (item) {
                    //        if (item.location[0] == e.location.lat && item.location[1] == e.location.lng.toFixed(6)) {
                    //            return $.extend(true, {}, item, { tooltip: { isShown: true } });
                    //        } else {
                    //            return $.extend(true, {}, item, { tooltip: { isShown: false } });

                    //        }
                    //    });
                    //    mapWidget.option("markers", newMarkers);
                    //}
                }];

                mapWidget.addMarker(marker);
            }


        }
        else {
            var markersUrl = '';
            var tooltip = "";
            if (finaldata[i].isAssigned == true) {
                markersUrl = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|008000"; //green
                tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + finaldata[i].tooltip.text + "<br/>Email: " + finaldata[i].email + "<br/>Phone: " + finaldata[i].phone + "<br/>Address: " + finaldata[i].state + "<br/>Type: " + finaldata[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"></div> </div>";

            }
            else if (finaldata[i].isAssigned == false) {
                markersUrl = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF0000"; //red
                tooltip = "<div id=\"information\"><h5>Case Manager Details</h5><br/><div class=\"details\">Name: " + finaldata[i].tooltip.text + "<br/>Email: " + finaldata[i].email + "<br/>Phone: " + finaldata[i].phone + "<br/>Address: " + finaldata[i].state + "<br/>Type: " + finaldata[i].cmType + "<br/><div id=\"divassignCmAnchor\" class=\"pull-right\"> <a id=\"assignCmAnchor\" title=\"Add Case Manager\" onclick=\"assignCM('" + finaldata[i].caseManagerId + "','" + finaldata[i].location[0] + "','" + finaldata[i].location[1] + "')\" href=\" # \" class=\" btn btn-sm btn-primary whitetext mt5 mr10\">Assign</a></div> </div>";
            }

            marker = [{
                title: finaldata[i].tooltip.text,
                tooltip: { text: tooltip },
                location: [finaldata[i].location[0], finaldata[i].location[1]],
                iconSrc: markersUrl,
                //onClick: function (e) {
                //    var markersData = mapWidget.option("markers");
                //    var newMarkers = $.map(markersData, function (item) {
                //        if (item.location[0] == e.location.lat && item.location[1] == e.location.lng.toFixed(6)) {
                //            return $.extend(true, {}, item, { tooltip: { isShown: true } });
                //        } else {
                //            return $.extend(true, {}, item, { tooltip: { isShown: false } });

                //        }
                //    });
                //    mapWidget.option("markers", newMarkers);
                //}
            }];
            mapWidget.addMarker(marker);
        }

    }
}

function DeleteCaseManager(id) {
    if (confirm("Are you sure you want to delete ?")) {
        $.ajax({
            url: "/Referral/DeleteCaseManagerById",
            //   url: '@Url.Action("DeleteCaseManagerById", "Referral")',
            type: 'POST',
            data: { id: id },
            success: function (data) {
                var dataGrid = $('#gridMgr').dxDataGrid('instance');
                dataGrid.refresh();
                showNotification(" Case Manager Deleted Succesfully ", "success");
               // $('#CMDeleteMessage').css({ 'display': 'block' }).fadeIn().delay(10000).fadeOut();
               // LoadMapData();
            }
        });
    }
}


$('#emailButton').click(function (event) {
    var clientDropDownId = $("#clientDropId").dxDropDownBox('instance').option('value');
    //var atagURL = '@Url.Action("ViewClientDetailPopUp", "Referral")';
    //var urls = atagURL + "/" + clientDropDownId;
    // showModalPopup(urls, '350', '350', 'Email');
    showModalPopup('/Referral/ViewClientDetailPopUp/' + clientDropDownId, 280, 350, 'Client Details');
});


$('#qapending').click(function (event) {
    var caseid = $('#CaseId').val();
    var email_id = $('#Email').val();
    if (!email_id) {
        email_id = "";
    }
    showModalPopup('/Referral/SendEmailPopUp/?caseid=' + caseid + '&email_id=' + email_id + '&flag=' + true, 680, 600, 'Email');

});

function showCompanyNotes() {
    //var clientId = $("#clientDropId").dxDropDownBox('instance').option('value');
    //var note = $('#companyNotes').val();
    ////showModalPopup('/Referral/SendCompanyNotesPopup/?clientId=' + clientId, 440, 550, 'Company SHI')
    //showModalPopup('/Referral/SendCompanyNotesPopup/?note=' + note, 440, 550, 'Company SHI');

    var note = $('#companyNotes').val();
    note = note.replace(/\n/g, "<br />");
    var secondDivContent = document.getElementById('copyheresompanyshi');
    secondDivContent.innerHTML = note;
}

//$("#ssnBtn").click(function () {
    //alert("fasdfads");
    //alert($("#employeessn").unmask().val());
    //$("#checkssn").unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: -2 });
$("#ssnBtn").click(function () {
        var clicked = $(this).data('clicked');
        if (clicked) {
            $("#ssnBtn").addClass("fa-eye-slash");
            $('.ssninput').unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: 5 });
        } else {


            $("#ssnBtn").removeClass("fa-eye-slash");
            $('.ssninput').unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: -2 });
        }

        $(this).data('clicked', !clicked);


    });
//});
$('.ssninput').unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: 5 });
$("#ssnBtn").addClass("fa-eye-slash");
$('#subjectcasezip').mask("99999");
$('#subjectaltzip').mask("999-99");
$('#subjectcasealtphone').mask("(999) 999-9999");
$('#subjectcasephone').mask("(999) 999-9999");
$('#insuredphone').mask("(999) 999-9999");
$('#insuredaltphone').mask("(999) 999-9999");
$('#insuredfax').mask("(999) 999-9999");
$('#insuredzip').mask("99999");
$('#DZip').mask("99999");
$('#insuredaltzip').mask("999-99");
$('#employerphone').mask("(999) 999-9999");
$('#employersecphone').mask("(999) 999-9999");
$('#employerfax').mask("(999) 999-9999");
$('#employerzip').mask("99999");
$('#employeraltzip').mask("999-99");
$('#treatingphyphone').mask("(999) 999-9999");
$('#treatingphysecphone').mask("(999) 999-9999");
$('#treatingphyfax').mask("(999) 999-9999");
$('#tratingphyzip').mask("99999");
$('#treatingphyseczip').mask("999-99");
$('#thirdpartyphone').mask("(999) 999-9999");
$('#thirdpartysecphone').mask("(999) 999-9999");
$('#thirdpartyfax').mask("(999) 999-9999");
$('#thirdpartyzip').mask("999-99");
$('#plaintiffattphone').mask("(999) 999-9999");
$('#defenseattphone').mask("(999) 999-9999");
$('#thirdpartyaltzip').mask("999-99");
//these down are unused can be used with any id
//$('#employeraltzip').mask("(999) 999-9999");
//$('#employeraltzip').mask("(999) 999-9999");
//$('#employeraltzip').mask("(999) 999-9999");
//$('#employeraltzip').mask("(999) 999-9999");
$('#thirdpartyphoneext').mask("(999) 999-9999");
$('#treatingphyphoneext').mask("9999");
$('#employerphoneext').mask("9999");
$('#insuredphoneext').mask("9999");
$('#ClaimantInfoDetails.Dob').mask("(999) 999-9999");

$('#DPhone.Dob').mask("(999) 999-9999");
//$('#ssnBtn').click(function (event) {
//    var tempSSNValue = $('#checkssn').val();
//    if (tempSSNValue.indexOf("XXXXX") < 0) {
//        SSNValue = tempSSNValue
//    }
//    if ($('#checkssn').val().indexOf("XXXXX") >= 0) {
//        $('#checkssn').val(SSNValue);
//    }
//    else {
//        var str = SSNValue;
//        var displaystringlen = str.length - 4;
//        var res = str.substring(0, displaystringlen);
//        var stringtoReplace = str.replace(str.substr(0, displaystringlen), "XXXXX")
//        $('#checkssn').val(stringtoReplace);

//    }

//});


function ShowEmailPopUp() {

    var caseid = $('#CaseId').val();
    var email_id = $('#Email').val();
    if (!email_id) {
        email_id = "";
    }
    //var atagURL = '@Url.Action("SendEmailPopUp", "Referral")';
    //var urls = atagURL + "/?email_id=" + email_id;
    //showModalPopup(urls, '440', '550', 'Email');
    showModalPopup('/Referral/SendEmailPopUp/?caseid=' + caseid + '&email_id=' + email_id, 680, 600, 'Email');

    //Show_m_Popup('/ReferralReports/PopUpFileReviewAnswer/?answer_id=' + a + '&report_id=' + b, '200', '400', 'Reason');
}
function ShowCaseNotesEmailPopUp(id) {
    
    //var email_id = $('#Email').val();
    //if (!email_id) {
    //    email_id = "";
    //}
    //alert(id);
    var email_id = id;
    //var atagURL = '@Url.Action("SendEmailPopUp", "Referral")';
    //var urls = atagURL + "/?email_id=" + email_id;
    //showModalPopup(urls, '440', '550', 'Email');
    showModalPopup('/Referral/SendNoteEmailPopup/?email_id=' + email_id, 680, 600, 'Email');
}

$(function () {

    //if ($('#CaseId').val() > 0) {
    //    window.setInterval(function () {
    //        AjaxSaveReport();
    //    }, 60000);
    //}

});




function AjaxSaveReport() {
    var $frm = $('#CaseAddEdit');
    $.ajax({
        type: "POST",
        url: '@Url.Action("AddEdit", "Referral")', //$fSSSSSrm.attr('action'),SS
        data: $frm.serialize(),
        beforeSend: function (xhr) {
            xhr.setRequestHeader("XSRF-TOKEN",
                $('input:hidden[name="__RequestVerificationToken"]').val());
        },
        success: function (data, textStatus, jqXHR) {
            var window_height = $(window).height();
            var msgtop = (window_height / 2) - 10;
            //if (data == "Saved") {

            //    $('#SucccessMessage').html("Case Saved Successfully.").css({ 'display': 'block' }).fadeIn().delay(6000).fadeOut();
            //}
            //else {

            //    $('#ErrorMessage').html("Try Again Later").css({ 'display': 'block' }).fadeIn().delay(5000).fadeOut();
            //}
        },
        error: function () {

            $('#ErrorMessage').html("Try Again Later").css({ 'display': 'block' }).fadeIn().delay(5000).fadeOut();

        }
    });
}

function Test(email) {
    //showModalPopup('/Referral/SendEmailPopUp/?email_id=' + email, 440, 550, 'Email');
    var caseid = $('#CaseId').val();
    showModalPopup('/Referral/SendEmailPopUp/?caseid=' + caseid + '&email_id=' + email, 680, 600, 'Email');
}

function CalcdivHeight() {
    var calcheight = 0,
        $items = $('.holder').find('.itemheight');
    $items.each(function (i, el) {
        var tallest = $(el).outerHeight();
        if (tallest > calcheight) {
            calcheight = tallest;
        }
    });
    $(".itemheight").css("min-height", calcheight);
}

$(window).resize(function () {
    CalcdivHeight();
});



//function serviceTreeItemSelectionChanged(args) {

//    console.log(args);
//   // console.log(args.component.getSelectedNodesKeys());
//    console.log(args.component);
//    console.log(args.component.getNodes());
//    var allNodes = args.component.getNodes();
//    var allNodesFlattened = [];
//    allNodes.forEach(function (element) {
//        //console.log(element.items);
//        allNodesFlattened = allNodesFlattened.concat(element.items);

//        allNodesFlattened.push(element);
//    });

//    args.component.selectItem();
//    var value = args.component.getSelectedNodesKeys();
//    //console.log(value);
//    //console.log('ALL NODES FLATTENED');
//    //console.log(allNodesFlattened);


//    //var v = allNodesFlattened.filter(c => c.key == args.node.key);
//    var v = allNodesFlattened.filter(function (c) {
//        return c.key == args.node.key;
//    });
//    console.log(v);
//    if (v && !v[0].parent) {
//        //allNodes.forEach(node => {
//        //    if (node.key != args.node.key) {
//        //        args.component.unselectItem(node.key);
//        //    } else {
//        //        //args.component.selectItem(node.key);

//        //    }
//        //});
//        allNodes.forEach(function (node) {
//            if (node.key != args.node.key) {
//                args.component.unselectItem(node.key);
//            } else {
//                //args.component.selectItem(node.key);

//            }
//        });
//    }

//    value.forEach((val) => {
        
//        var v = allNodesFlattened.filter(c => c.key == val);

//        if (v && v.length > 0) {
//            if (args.node.parent) {
//                if (v[0].parent && v[0].parent.key != args.node.parent.key) {
//                    if (v[0].selected === true) {
//                        //v[0].selected = false;
//                        args.component.unselectItem(v[0].key);
//                    }
//                } else {
//                    args.component.selectItem(v[0].key);
//                    //args.component.selectItem(v[0].parent.key);
//                }
//            }

//        }

//    });
//    var value2 = args.component.getSelectedNodesKeys();
//    args.component.option("value", value2);

//}

function OpenUserInfo(id)
{
   // var urlinfo = window.location.origin + '@Url.Action("GenerateReportForSchedule", "Report")' + '?schedule_id=' + sch_id + '&case_id=' + case_id;

    var urlinfo = window.location.origin +'/User/AddEditUser?id='+ id;
    window.open(urlinfo, '_blank');
}


function GetServiceIcon(id,is_SIU,multiple_service,maxCaseId, targetId)
{
    var icon = "";
    
    $.ajax({
        type: "GET",
        url: "/Case/GetServiceIcon",
        dataType: 'json',
        data: { service_id: id.toString()},
        success: function (data) {
            var replacetext = data.prefix;
           // $("#show-icon").removeClass();
            // $("#show-icon").addClass(data.logo);

            $("#show-icon").html('');
            if (data.logo != '') {
                $('.custompop').fadeIn("1000");
            } else { $('.custompop').fadeOut("100"); }
            $("#show-icon").html(data.logo);
            if (multiple_service) { replacetext = 'FIELD';}
            $('#' + targetId).val(replacetext + '-' + maxCaseId);
        }
    });
    
}

$('#excellentresult').click(function (event) {
    $('#excellentresult').attr("disabled", true);
    var status = $(this).attr("data-status");
    var c_id = $(this).data("caseid");
    //alert(status);
    $.ajax({
        type: "POST",
        url: "/Referral/UpdateInvestigationResulatStatus/",
        data: { caseid: c_id, resultstatus: status },
        dataType: "json",
        success: function (data) {
            if (data.success) {
                if (status != 1) {
                    $('#excellentresult').attr("title", "Mark As Excellent Investigation Result");
                    $('#excellentresult').attr("data-status", 1);
                    $('#excellentresult').val("Mark Excellent Result");
                }
                else {
                    $('#excellentresult').attr("title", "Un Mark Excellent Result");
                    $('#excellentresult').attr("data-status", 0);
                    $('#excellentresult').val("Excellent Result Marked");
                }
                showNotification("Investigation Result Status Changed Successfully", "success");
                $('#excellentresult').attr("disabled", false);

            }
            else
            {
                showNotification("Could not perform request", "warning");
                $('#excellentresult').attr("disabled", false);

            }

        },
        error: function () {
            showNotification("Failed", "warning");
            $('#excellentresult').attr("disabled", false);

        }

    });
});

//function ScheduleDoctor(e) {
//    debugger;
//    $.ajax({
//        type: "GET",

//        data: { id: e.value },
//        url: "/Case/GetDoctorInfo",
//        success: function (data) {
//            debugger;
//            OpenScheduler(data.DoctorId);
//        }

//    });
//}


//imeGuys

function marketerGrid(item) {

    return item && item.FirstName + " " + item.LastName;
}

function qaGrid(item) {

    return item && item.FirstName + " " + item.LastName;
}

function marketergrid_valueChanged(e) {

    var $dataGrid = $("#embedded-marketerdatagrid");
    if ($dataGrid.length) {
        var dataGrid = $dataGrid.dxDataGrid("instance");
        dataGrid.selectRows(e.value, false);
        if (e.previousValue != null) {
            e.component.close();
        }
    }
}

function qagrid_valueChanged(e) {

    var $dataGrid = $("#embedded-qadatagrid");
    if ($dataGrid.length) {
        var dataGrid = $dataGrid.dxDataGrid("instance");
        dataGrid.selectRows(e.value, false);
        if (e.previousValue != null) {
            e.component.close();
        }
    }
}

//function claimCheck(claimnbr) {

//    return $('#Claimno').val();


//}

function claimCheck(claimnbr) {
    var claimno = $('#Claimno').val();
    if (claimno == '')
    {
        showNotification("Please enter a Claim No. first", "warning");
        return false;
    }
    return claimno;
}

$("#ssnShowHide").click(function () {
    var clicked = $(this).data('clicked');
    if (clicked) {
        $("#ssnShowHide").addClass("fa-eye-slash");
        $('#Ssn').unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: 5 });
    } else {


        $("#ssnShowHide").removeClass("fa-eye-slash");
        $('#Ssn').unmask().maskSSN('999-99-9999', { maskedChar: 'X', maskedCharsLength: -2 });
    }

    $(this).data('clicked', !clicked);
});

$('#Ssn').focusout(function () {
    var url = $(this).data('check-duplicate-url');
    $.post(url, { ssn: $('input[name=Ssn]').val() },
        function(isDuplicate) {
            if (isDuplicate) {
                DevExpress.ui.dialog.alert("An examinee record already exists with the same social security number. Do you want to add this record also?", "Warning");
            }
        }
    );
    //console.log('a');
});
//function claimCheck() {
//    var claimnbr = document.getElementbyid('Claimno');
//    return claimnbr;

//}

function attorneyGrid(item) {

    return item && item.FirstName + " " + item.LastName;
}




