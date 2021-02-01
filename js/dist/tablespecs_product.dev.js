"use strict";

$(document).ready(function () {
  $("#btn-specs").click(function () {
    $(this).text($(this).text() == 'Показать' ? 'Скрыть' : 'Показать');
    $("#rest-table").slideToggle();
  });
});
//# sourceMappingURL=tablespecs_product.dev.js.map
