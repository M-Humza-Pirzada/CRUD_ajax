$("document").ready(function () {
  // AJax code for insert data
  $("#btnAdd").click(function (e) {
    e.preventDefault();
    // console.log('ajax working');
    // get data from the form
    let id = $("#stid").val();
    let nm = $("#nameId").val();
    let em = $("#emailId").val();
    let pw = $("#pswdId").val();
    // This is object after getting data
    let myData = {
      id: id,
      name: nm,
      email: em,
      pswd: pw,
    };
    // now sending data insert page
    $.ajax({
      url: "insert.php",
      method: "post",
      data: myData,
      success: function (data) {
        // console.log(data);
        $("#msg").html(data); //this is to show msg after submiting data this link from insert page
      },
    });

    // This is reseting form from 0
    $("#myForm")[0].reset();
    $("#stid").val(""); //This method is allow on update time
    $("#nameId").focus();
    showData();
  });

  // Ajax retreive data
  function showData() {
    let output = "";
    $.ajax({
      url: "showData.php",
      method: "get",
      dataType: "json",
      success: function (data) {
        // console.log(data)
        x = data;
        for (i = 0; i < x.length; i++) {
          output += `
                        <tr>
                            <td>${x[i].id}</td>
                            <td>${x[i].name}</td>
                            <td>${x[i].email}</td>
                            <td>${x[i].password}</td>
                            <td>
                                <button class='btn btn-warning' data-sid=${x[i].id} id='btnEdit'> 
                                    <span lass="material-symbols-outlined">edit_note</span>
                                </button>

                                <button class='btn btn-danger' data-sid=${x[i].id}  id='btnDelete'> 
                                    <span class="material-symbols-outlined">delete_sweep</span> 
                                </button>
                            </td>
                        </tr>
                    `;
        }
        $("#tbody").html(output);
      },
    });
  }
  showData();

  //Ajax delete data
  $("#tbody").on("click", "#btnDelete", function () {
    console.log("Btn Delete");
    let id = $(this).attr("data-sid");
    // console.log(`Delete id ${id}`);
    let myData = { id: id };
    let myThis = this;
    $.ajax({
      url: "delete.php",
      method: "post",
      data: myData,
    });
  });

  // Ajax edit data
  $("#tbody").on("click", "#btnEdit", function () {
    // console.log("Btn Edit");
    let id = $(this).attr("data-sid");
    // console.log(id);
    let myData = { id: id };
    $.ajax({
      url: "edit.php",
      method: "post",
      dataType: "json",
      data: myData,
      success: function (data) {
        // console.log(data);
        x = data;
        $("#stid").val(x.id);
        $("#nameId").val(x.name);
        $("#emailId").val(x.email);
        $("#pswdId").val(x.password);
      },
    });
  });
});

// Ajax search option
function mySearch() {
  let srch = $("#search").val();
  let myData = { name: srch };
  let output = "";
  $.ajax({
    url: "search.php",
    method: "post",
    data: myData,
    dataType: "json",
    success: function (data) {
      // console.log(data);
      x = data;
      for (i = 0; i < x.length; i++) {
        output += `
                        <tr>
                            <td>${x[i].id}</td>
                            <td>${x[i].name}</td>
                            <td>${x[i].email}</td>
                            <td>${x[i].password}</td>
                            <td>
                                <button class='btn btn-warning' data-sid=${x[i].id} id='btnEdit'> <span class="material-symbols-outlined">edit_note</span></button>
                                <button class='btn btn-danger' data-sid=${x[i].id}  id='btnDelete'> <span class="material-symbols-outlined">delete_sweep</span> </button>
                            </td>
                        </tr>
                    `;
      }
      $("#tbody").html(output);
    },
  });
}
