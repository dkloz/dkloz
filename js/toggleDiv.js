function toggleDiv(divId) {
    if ($("#"+divId).is(':visible')) {
        $("#common").hide();
    }
    else {
        $("#common").show();
    }
}
