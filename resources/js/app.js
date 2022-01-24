require('./bootstrap');
require('datatables.net');
import $ from "jquery"

$(function () {
    var ajax_url = "http://localhost:8080/getCustomers";
    $('#customers').DataTable({
      ajax: {
        url: ajax_url,
        dataSrc: ''
      },
      columns: [
        { "data" : "id" },
        { "data" : "full_name" },
        { "data" : "email" },
        { "data" : "password" },
        { "data" : "birth_date" },
        { "data" : "is_deleted" }
           ]
    });

});
