function showModalPopup(url, height, width, title) {
    debugger;
    url += (url.indexOf('?') !== -1 ? '&' : '?') + 'v=' + Math.random();
    height = typeof height !== 'undefined' ? height : 200;
    width = typeof width !== 'undefined' ? width : 300;
    title = typeof title !== 'undefined' ? title : 'MyIME';
    showProgress();
    $.ajax({
        type: "GET",
        url: url,
        cache: false,
        dataType: "html",
        success: function (data) {
            var popup = $("#universalPopup").dxPopup("instance");
            $("#universalPopup").on("dxmousewheel", onDxMouseWheel);
            var node = document.createElement("DIV");
            popup.content()[0].innerHTML = "";
            node.innerHTML = data;
            popup.content()[0].appendChild(node);
            nodeScriptReplace(popup.content()[0]);
            popup.option("title", title);
            popup.option("height", height);
            popup.option("width", width);
            popup.show();
            hideProgress();
        }
    });
}

function hideModalPopup() {
    var popup = $("#universalPopup").dxPopup("instance");
    popup.hide();
}

var onDxMouseWheel = function (e) {
   e.stopPropagation();
};
function nodeScriptReplace(node) {
    if (nodeScriptIs(node) === true) {
        node.parentNode.replaceChild(nodeScriptClone(node), node);
    }
    else {
        var i = 0;
        var children = node.childNodes;
        while (i < children.length) {
            nodeScriptReplace(children[i++]);
        }
    }

    return node;
}
function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}

function nodeScriptClone(node) {
    var script = document.createElement("script");
    script.text = node.innerHTML;
    for (var i = node.attributes.length - 1; i >= 0; i--) {
        script.setAttribute(node.attributes[i].name, node.attributes[i].value);
    }
    return script;
}

function showProgress() {
}

function hideProgress() {
}


function showNotification(message, type) {
    if (!type) {
        type = "success";
    }
    var notifyOptions = {
        placement: {
            from: "top",
            align: "center"
        },
        delay: 4000,
        type: type,
        allow_dismiss: true,
        z_index: 10000
    };
    var notify = $.notify(message, notifyOptions);

}

var caseInUseNotification;

function showUserNotification(message, type) {
    if (!type) {
        type = "warning";
    }
    if (message && message != '') {
        var notifyOptions = {
            placement: {
                from: "top",
                align: "center"
            },
            delay: 0,
            type: type,
            z_index: 20000,
            offset: {
                y: -2
            }
        };
        if (caseInUseNotification) {
            caseInUseNotification.close();
        }
        caseInUseNotification = $.notify({ message: message, title: 'Case in use by' }, notifyOptions);
    } else {
        if (caseInUseNotification) {
            caseInUseNotification.close();
        }
    }
}


function showManagerTargetPopup() {
    showModalPopup("/ManagerTarget/AddEdit", 250, 300, "Set Target");
}

function addManagerTargetButtonInBreadcrumb() {
    $('#breadcrumbRightContainer').html('<a title="Target" href="javascript:void(0)" onclick="showManagerTargetPopup()" class="breadcrumb-btn">' +
        '<i class="fa fa-clock-o little-larger-icon"></i> Target' +
        '</a>');
}

function addTransactionLog(a, b, c) {
    $.ajax({ 
        url: '/Common/insertTransactionLog?actionName=' + a + '&moduleName=' + b + '&methodName=' + c,
        dataType: "json",
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            actionName: a,
            moduleName: b,
            methodName: c
        }), 
        async: true,
        processData: false,
        cache: false,
        success: function (data) { 
        },
        error: function (err) {
        }
    });
}


 
