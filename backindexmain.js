<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Surtimientos</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.6/dist/sweetalert2.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
<link rel="stylesheet" href="../../Assets/sidebar/all.css">
<link rel="stylesheet" href="../../Assets/sidebar/all.min.css">
<link rel="stylesheet" href="../../Assets/sidebar/ionicons.min.css">
<link rel="stylesheet" href="../../Assets/sidebar/adminlte.min.css?v=3.2.0">
<body class="hold-transition sidebar-mini">
<div class="wrapper">

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
<ul class="navbar-nav ml-auto">

<button id="btnEjecutar" type="button" class="btn btn-primary"><i class="fas fa-truck"></i></button>
<li class="nav-item">
<a class="nav-link" data-widget="fullscreen" href="#" role="button">
<i class="fas fa-expand-arrows-alt"></i>
</a>
</li>


</ul>
</nav>

<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar">
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-dolly"></i>
                        <p>
                            Surtimiento
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="index.php" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Opcion 1</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- Nuevo ul con su li -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-list-ul"></i>
                        <p>
                            Cobranza
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="../Cobranza/Index.php" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Opcion 1</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Fin del nuevo ul con su li -->
            </ul>
        </nav>
    </div>
</aside>



<div class="content-wrapper">
<section class="content-header">
<div class="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><span class="font-weight-bold">Surtimientos</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>
</div>
</section>

<section class="content">
<div class="container-fluid">
<div class="card card-success card-outline">
<div class="card-header">
<div class="container">

<!-- Modal que muestra dotacion de productos =====================================-->
<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">

<div class="modal-dialog" style="max-width: 1800px;">
    
    <div class="modal-content">
    <!-- <div id="alert_message"></div>    -->
    <div id="alert_message" style="text-align: center;"></div>
    
      <div>
        <br>
        <button id="xmodal" type="button" class="close mr-3 rounded-circle bg-dark" data-dismiss="modal" aria-label="Close" style="font-size: 24px; border: none;">
    <span aria-hidden="true" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M6.354 8l-4.147-4.146a.5.5 0 0 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 0 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
    </span>
</button>

      <h3 id="modalDetalleTitulo"><button type="button" id="add" class="btn btn-primary float-right">Agregar</button></h3>
      <hr/>
      </div>
      
      <div class="table-responsive">
            <table id="modalDataTable" class="table">
                <thead>
                    <tr>
                        <th style="display: none;">PK_surtimiento</th>
                        <th style="display: none;">Fecha</th>
                        <th style="display: none;">Ruta</th>
                        <th style="display: none;">Semana</th>
                        <th style="display: none;">CVECT</th>
                        <th>Lecheria</th>
                        <th>Producto</th>
                        <th>Litros</th>
                        <th>Precio</th>
                        <th>Importe</th>
                        <th>Faltantes</th>
                        <th>Rotos</th>
                        <th>Sobrantes</th>
                        <th>Devoluciones</th>
                        <th>Litros netos</th>
                        <th>Importe Neto</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
       </div>

    </div>
  </div>
</div>
<!-- ====================================== -->
<!-- Grid principal de surtimientos sobre el cual se muestra el datatables -->
       <div class="row">
           <div class="col-lg-12">
            <table id="tablasurtimientos" class="table-striped table-bordered" style="width:100%">
                <thead>
                 <tr>
                    <!-- <th>#</th> -->
                    <th>Fecha de dia de venta</th>
                    <th>Ruta</th>                                
                    <th>Numero de guia</th>  
                    <!-- <th>Numero de embarque</th> -->
                    <th>Semana</th>
                    <th>CT</th>
                    <th>Opciones</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
           </div>
       </div> 
    </div>
</div>
</div>
</div>
</section>

<script src="../../Assets/jquery.min.js"></script>
<script src="../../Assets/sidebar/bootstrap.bundle.min.js"></script>
<script src="../../Assets/sidebar/adminlte.min.js?v=3.2.0"></script>
<!--    Datatables-->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.css"/>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>  
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.6/dist/sweetalert2.all.min.js"></script>
<!-- ======================================================================================================================================================== -->
    <script>
    function fetch_data() {
    $('#tablasurtimientos').DataTable({
        "ajax": {
            "url": "../../Controllers/DatatablesCalls/Surtimientos.php",
            "dataSrc": ""
        },
        "columns": [
            // {"data": "fk_surtimiento"},
            {"data": "fechadiadeventa"},
            {"data": "fk_ruta"},
            {"data": "numeroguia"},
            {"data": "semana"},
            {"data": "fk_cvect"},
            {
                "data": null,
                "render": function (data, type, row) {
                    return '<button type="button" class="btn btn-primary btn-show-modal" onclick="redirect(\'' + row.fechadiadeventa + '\', \'' + row.fk_ruta + '\', \'' + row.semana + '\', \'' + row.fk_cvect + '\')"><i class="fas fa-eye"></i></button>';
                }
            }

        ],
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "order": [[0, "desc"]], // Ordena por la primera columna (pk_surtimiento) en orden descendente
        //"ordering": true // Deshabilita la ordenación de columnas por parte del usuario
        
    });
}
fetch_data(); // Llamar a la función fetch_data al cargar el documento
// ========================================================================================================================================================
function redirect(fechadiadeventa, fk_ruta, semana, fk_cvect) {
    // Codificar los parámetros para asegurar que no haya caracteres especiales en la URL
    var encodedFechadiadeventa = encodeURIComponent(fechadiadeventa);
    var encodedFk_ruta = encodeURIComponent(fk_ruta);
    var encodedSemana = encodeURIComponent(semana);
    var encodedFk_cvect = encodeURIComponent(fk_cvect);
    
    // Construir la URL con los parámetros en el formato correcto
    var url = '../Surtimientos/Detalles/Index.php?' + 'fechadiadeventa=' + encodedFechadiadeventa + '&fk_ruta=' + encodedFk_ruta + '&semana=' + encodedSemana + '&fk_cvect=' + encodedFk_cvect;
    
    
    // Redirigir al usuario a la nueva página
    window.location.href = url;
}
// ========================================================================================================================================================
document.addEventListener('click', function(event) {
    // Verificar si el clic provino de un elemento con la clase '.btn-show-modal'
    if (event.target.classList.contains('btn-show-modal')) {
        // Habilitar el botón "Agregar" nuevamente en caso de que haya salido sin aplicar cancelar
        var data_id = event.target.getAttribute('data-id'); // Obtener el valor de data-id del botón
        var data_values = data_id.split('-'); // Separar los valores utilizando el guion
        var fechadiadeventa = data_values.slice(0, 3).join('-'); // Mantener la fecha como una cadena
        var fk_ruta = data_values[3];
        var semana = data_values[4];
        var fk_cvect = data_values[5];

        function show_modal_data() {
            // Limpiar el contenido de la tabla antes de agregar nuevos datos
            var tbody = document.querySelector('#modalDataTable tbody');
            tbody.innerHTML = ''; // Limpiar el contenido del tbody

            // Realizar la solicitud AJAX para obtener los datos
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'show.php?fechadiadeventa=' + fechadiadeventa + '&fk_ruta=' + fk_ruta + '&semana=' + semana + '&fk_cvect=' + fk_cvect, true);
            console.log('GET', 'show.php?fechadiadeventa=' + fechadiadeventa + '&fk_ruta=' + fk_ruta + '&semana=' + semana + '&fk_cvect=' + fk_cvect, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    var rows = '';
                    //este consolog solo muestra la respuesta en orden alfabetico - NO ALARMARSE
                console.log('JSON Data array at press show icon:', response); // Mostrar la respuesta en la consola
                    response.forEach(function(data) {
                        rows += '<tr>';
                        rows += '<td style="display: none;">' + data.pk_surtimiento + '</td>'; 
                        rows += '<td style="display: none;">' + data.fechadiadeventa + '</td>'; 
                        rows += '<td style="display: none;">' + data.fk_ruta + '</td>'; 
                        rows += '<td style="display: none;">' + data.semana + '</td>'; 
                        rows += '<td style="display: none;">' + data.fk_cvect+ '</td>'; 
                        rows += '<td style="display: none;">' + data.fk_dotaciones + '</td>'; 
                        rows += '<td>' + data.fk_lecheria + '</td>';
                        rows += '<td>' + data.fk_producto + '</td>'; 
                        rows += '<td>' + data.litros + '</td>'; 
                        rows += '<td>' + data.fk_precios + '</td>';
                        rows += '<td>' + data.importe + '</td>';    
                        rows += '<td>' + data.faltantes + '</td>'; 
                        rows += '<td>' + data.rotos + '</td>'; 
                        rows += '<td>' + data.sobrantes + '</td>'; 
                        rows += '<td>' + data.devoluciones + '</td>'; 
                        rows += '<td>' + data.litrosnetos + '</td>'; 
                        rows += '<td>' + data.importeneto + '</td>';
                        rows += '</tr>';
                    });
                
                    tbody.innerHTML = rows; // Agregar filas al tbody
                     // Inicializar DataTables en la tabla solo si no se ha inicializado previamente
                     if (!document.getElementById('modalDataTable').classList.contains('dataTable')) {
                        $('#modalDataTable').DataTable({
                            "paging":false,
                            "info": false, 
                            "ordering": true, 
                            "searching": true,
                            "language": {
                                "url": "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
                            }
                        });
                    }

                    // Agregar botones de edición y eliminación después de cada fila
                    var rowsArray = tbody.getElementsByTagName('tr');
                    for (var i = 0; i < rowsArray.length; i++) {
                        var btnEdit = '<button type="button" class="btn btn-primary btn-edit-row"><i class="fas fa-edit"></i></button>';
                        var btnDelete = '<button type="button" class="btn btn-danger btn-delete-row"><i class="fas fa-trash-alt"></i></button>';
                        var cellEdit = rowsArray[i].insertCell(-1);
                        var cellDelete = rowsArray[i].insertCell(-1);
                        cellEdit.innerHTML = btnEdit;
                        cellDelete.innerHTML = btnDelete;
                    }
                            // Actualizar el encabezado h3 del modal con el valor de fk_dotaciones
                    var detalleTitulo = document.getElementById('modalDetalleTitulo');
                    var ruta = response[0].fk_ruta; // Suponiendo que fk_dotaciones está en la primera fila
                    var sem = response[0].semana; // Suponiendo que fk_dotaciones está en la primera fila
                    var fecha = response[0].fechadiadeventa;  
                    var cve = response[0].fk_cvect;  
                    var detalle = 'Detalle de surtimiento: Ruta: '+ruta+' - Semana '+sem+' -  Fecha '+fecha+' - Centro de trabajo '+cve;
                    detalleTitulo.innerText = detalle;
                }
            };
            xhr.send();
        }
        show_modal_data(); // Llamar a la función show_modal_data dentro del evento click
    }
});
document.addEventListener('click', function(event) {
    // Verificar si el clic provino de un elemento con la clase '.btn-show-modal'
    if (event.target.classList.contains('btn-show-modal')) {
        // Tu código para mostrar la modal aquí
    }

    // Verificar si el clic provino del botón de cerrar dentro de la modal
    if (event.target.classList.contains('close')) {
        // Limpiar el contenido de la tabla
        var tbody = document.querySelector('#modalDataTable tbody');
        tbody.innerHTML = ''; // Limpiar el contenido del tbody
    }
});
// ========================================================================================================================================================
// $(document).on('click','.delete', function(){
//     var id = $(this).attr("id");
//     if(confirm("Estas seguro de eliminar el registro?"))
//     {
//         $.ajax({
//             url:"delete.php",
//             method:"POST",
//             data:{id:id},
//             success:function(data)
//             {
//                 $('alert_message').html('<div class="alert alert-success">'+data+'</div>');
//                 $(#user_data).DataTable().destroy();
//                 fetch_data();
//             }
            
//         })
//     }
// }
// )
// ========================================================================================================================================================
// $('#add').click(function(){
    
//     //deshabilitamos agregar una vez presionado
//     this.disabled = true;

//     //aqui se cpia todo lo de la fila previa
//     var RowData2 = $('#modalDataTable tbody tr:first-child td:nth-child(2)').text();
//     // no copiamos la dotacion xq es un insercion no programada de modo que no se contempla en dotaciones lo mismo con los demas, habilitar de ser necesario
//     var RowData4 = $('#modalDataTable tbody tr:first-child td:nth-child(4)').text();
//     //aqui mostramos todo lo que se copio de la fila previa sobre del la nueva
//     var html = '<tr style="background-color: #dfdcdc; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">';
//     html += '<td><span id="" readonly>#</span></td>';
//     html += '<td><span id="data2" readonly>'+RowData2+'</span></td>';
//     html += '<td><span id="data3" readonly>Sin dotacion asignada</span></td>';
//     html += '<td><span id="data4" readonly>'+RowData4+'</span></td>';
//     html += '<td style="background-color: #f7f7f7;" contenteditable id="data5"></td>';
//     html += '<td><span id="data6" readonly>0.000</span></td>';
//     html += '<td><span id="data7" readonly>0.000</span></td>';
//     html += '<td><span id="data8" readonly>0.000</span></td>';
//     html += '<td><span id="data9" readonly>0.000</span></td>';
//     html += '<td style="background-color: #f7f7f7;" contenteditable id="data10"></td>';
//     html += '<td><span readonly id="data11"></span></td>';
//     html += '<td><span id="data12" readonly></span></td>';
//     html += '<td><span id="data13" readonly></span></td>';
//     html += '<td style="background-color: #f7f7f7;" contenteditable id="data14" ></td>';
//     html += '<td><button type="button" name="insert" id="insert" class="btn btn-success btn-xm">Guardar</button></td>';
//     html += '<td><button type="button" name="cancelar" id="cancelar" class="btn btn-danger btn-xm">Cancelar</button></td>';
//     html += '</tr>';
//     $('#modalDataTable tbody').prepend(html);
// // Obtener la fila recién agregada
//     var nuevaFila = document.querySelector('#modalDataTable tbody tr:first-child');

//     // Agregar un controlador de eventos al botón "Cancelar"
//     nuevaFila.querySelector('#cancelar').addEventListener('click', function() {
//         // Eliminar la fila al hacer clic en el botón "Cancelar"
//         this.closest('tr').remove();
//         // Habilitar el botón "Agregar" nuevamente una ves presionado el boton de cancelar
//         document.getElementById('add').disabled = false;
//     });

//     // Copiar automáticamente el valor de data10 a data11
//     document.getElementById('data10').addEventListener('input', function() {
//             var value = this.textContent;
//             document.getElementById('data11').textContent = value;
//     });

//     document.getElementById('data14').addEventListener('input', function() {
//             // Obtener el valor ingresado en data14 y convertirlo a un número
//             var valorData14 = parseFloat(this.textContent);
//             // Obtener el valor de data11 y convertirlo a un número
//             var valorData11 = parseFloat(document.getElementById('data11').textContent);
//             // Calcular el resultado de la multiplicación
//             var resultado = valorData14 * valorData11;
//             // Autocompletar data12 y data13 con el resultado de la multiplicación
//             document.getElementById('data12').textContent = resultado.toFixed(2); // Redondear a 2 decimales
//             document.getElementById('data13').textContent = resultado.toFixed(2); // Redondear a 2 decimales
//     });
    
// });
// ========================================================================================================================================================
// $(document).on('click','#insert', function(){
//     document.getElementById('add').disabled = false;
//     var i2 = $('#data2').text();
//     var i3 = $('#data3').text();
//     var i4 = $('#data4').text();
//     var i5 = $('#data5').text();
//     var i6 = $('#data6').text();
//     var i7 = $('#data7').text();
//     var i8 = $('#data8').text();
//     var i9 = $('#data9').text();
//     var i10 = $('#data10').text();
//     var i11 = $('#data11').text();
//     var i12 = $('#data12').text();
//     var i13 = $('#data13').text();
//     var i14 = $('#data14').text();

//     var camposFaltantes = [];

//     if (i5 == '') camposFaltantes.push("Producto");
//     if (i10 == '') camposFaltantes.push("Litros");
//     if (i14 == '') camposFaltantes.push("Precio");

//     if (camposFaltantes.length > 0) {
//         var mensaje = camposFaltantes.join(", ");
//         Swal.fire({
//             icon: 'info',
//             title: 'Los siguientes campos son requeridos',
//             text: mensaje
//         });
//     } else {
//         // Realizar la llamada AJAX para insertar los datos
//         $.ajax({
//             url:"insert.php",
//             method:"POST",
//             data:{ i2:i2, i3:i3, i4:i4, i5:i5, i6:i6, i7:i7, i8:i8, i9:i9, i10:i10, i11:i11, i12:i12, i13:i13, i14:i14},
//             success:function(data)
//             {
//                 $('#alert_message').html('<div class="alert alert-success ">'+data+'</div>');
//                 $('#modalDataTable').DataTable().destroy();
//             }
//         });
//         setInterval(function(){
//             $('#alert_message').html('');
//         },5000);
//     }
// });

// ========================================================================================================================================================
$(document).on('click','#update', function(){
    var row = $(this).closest('tr');
    var updatedData = {}; 
    // Recopilar los valores de los campos de entrada editables
    row.find('input[type="text"]').each(function () {
        var columnIndex = $(this).closest('td').index(); // Obtener el índice de la columna
        var columnName = $('#modalDataTable th').eq(columnIndex).text(); // Obtener el nombre de la columna desde el encabezado de la tabla
        var cellValue = $(this).val(); // Obtener el valor del campo de entrada
        updatedData[columnName] = cellValue; // Agregar el valor al objeto de datos actualizados
    });
    // Agregar cualquier otro dato necesario, como el identificador de fila
    updatedData['id'] = row.find('td:eq(0)').text(); // Suponiendo que el primer td contenga el ID único de la fila
    //updatedData['Surtimiento'] = row.find('td:eq(1)').text();
     var i0 = updatedData['id'];
    //alert(updatedData['id']);
    var i1 = updatedData['Faltantes'];
    var i2 = updatedData['Rotos'];
     var i3 = updatedData['Sobrantes'];
     var i4 = updatedData['Devoluciones'];
     alert(i0);
     alert(i1);
     alert(i2);
     alert(i3);
     alert(i4);
     update_data(i0,i1,i2,i3,i4);    
});
// ========================================================================================================================================================
function update_data(i0,i1,i2,i3,i4)
  {
   $.ajax({
    url:"update.php",
    method:"POST",
    data:{i0:i0, i1:i1, i2:i2, i3:i3, i4:i4},
    success:function(data){
                           console.log("SUCCESS");
                           $('#alert_message').html('<div class="alert alert-success">'+data+'</div>');
                           $('#user_data').DataTable().destroy();
                          //show_modal_data();
                          },
    error:function(){
                        console.log("SUCCESS");
                    }
   });

   setInterval(function(){
    $('#alert_message').html('');
   }, 50000);
  }
// ========================================================================================================================================================
$(document).on('click', '.btn-edit-row', function () {
    var row = $(this).closest('tr');
    // Guardar el contenido original de la fila para restaurarlo en caso de cancelación
    var originalContent = row.html();
    // Ocultar botones de editar y eliminar
    row.find('.btn-edit-row, .btn-delete-row').hide();
     // Convertir las celdas de la fila en campos de entrada editables
     row.find('td').each(function (index) {
        // Verificar si el contenido actual de la celda no es un botón ni el identificador de algún campo que no quieres editar
        if (!$(this).find('button').length 
                                           && index !== 0 
                                           && index !== 1 
                                           && index !== 2 
                                           && index !== 3 
                                           && index !== 4 
                                           && index !== 5 
                                           && index !== 6 
                                           && index !== 7 
                                        //    && index !== 8 
                                           && index !== 9 
                                           && index !== 10 
                                        //    && index !== 11 
                                        //    && index !== 12 
                                           //&& index !== 13
                                           //&& index !== 14
                                           && index !== 15
                                           && index !== 16
                                        ) { // Agregar numero de fila que no se va a editar
            var cellContent = $(this).html();
            $(this).html('<input type="text" class="form-control" value="' + cellContent + '">');
        }
    });
            // Remover botones de editar y eliminar si existen
row.find('.btn-edit-row, .btn-delete-row').remove();

// Insertar botón de guardar si no existe
if (!row.find('.btn-save-row').length) {
    row.find('td:first-child').prepend('<button name="update" id="update" type="button" class="btn btn-success btn-save-row">Guardar cambios</button>');
}
// Insertar botón de cancelar si no existe
if (!row.find('.btn-cancel-row').length) {
    row.find('td:first-child').prepend('<button name="cancel" id="cancel" type="button" class="btn btn-danger btn-cancel-row">Cancelar</button>');
}
// Evento click para cancelar la edición
row.find('.btn-cancel-row').on('click', function() {
    // Restaurar el contenido original de la fila
    row.html(originalContent);
});


});
// ========================================================================================================================================================
$(document).on('click', '.btn-save-row', function () {
    var row = $(this).closest('tr');
    row.find('.btn-edit-row, .btn-delete-row').show();
    // Mostrar los valores de los campos antes de enviar la solicitud AJAX
    console.log('Valores antes de la actualización:');
    row.find('td input').each(function () {
        console.log($(this).val());
    });
    row.find('td input').each(function () {
        var inputValue = $(this).val();
        $(this).parent().html(inputValue);
    });
    // Eliminar el botón de guardar
    $(this).closest('td').remove();
    // Restaurar los valores de los campos a su estado original
    row.find('td').each(function () {
        var inputValue = $(this).find('input').val();
        $(this).html(inputValue);
    });
    // Eliminar el botón de guardar
    row.find('.btn-save-row').remove();
});
// ========================================================================================================================================================
$(document).on('click', '.btn-delete-row', function () {
    // Obtener el ID del registro correspondiente a esta fila
    var id_registro = $(this).closest('tr').find('td:first').text();
    // Referencia a la fila actual
    var row = $(this).closest('tr');
    // Mostrar SweetAlert para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar este registro?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizar la solicitud AJAX para eliminar el registro
            $.ajax({
                url: 'delete.php',
                method: 'POST',
                data: { id_registro: id_registro },
                dataType: 'json',
                success: function(response) {
                    console.log(response.message);
                    if (response.success) {
                        // Eliminar la fila del DataTable
                        var table = $('#modalDataTable').DataTable();
                        table.row(row).remove().draw();
                    }
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    });
});



// ========================================================================================================================================================
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
// Función para mostrar un Toast y llamar a una función de callback cuando se complete
function mostrarToast(title, callback) {
    Toast.fire({
        icon: "success",
        title: title,
        didClose: callback // Llamar a la función de callback después de que se cierre el Toast
    });
}
// ========================================================================================================================================================
$(document).ready(function(){
    $("#btnEjecutar").click(function(){
        $.get("../../Controllers/Peticiones/Dotaciones.php", function(data, status){
                    // console.log("Respuesta primera peticion:", data);
                    var today = new Date();
                    var fechaHoy = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
                    mostrarToast(`Generacion de surtimientos por catalogo del ${fechaHoy}, exitoso.`, function() {
                                    $.get("../../Controllers/Peticiones/RegistrosNull.php", function(data, status){
                                    // console.log("Respuesta segunda peticion:", data);
                                    mostrarToast("Asignacion existosa de surtimiento");
                                                    $.get("../../Controllers/Peticiones/Rutas.php", function(data, status){
                                                    mostrarToast("Asignacion existosa de rutas para surtimiento");
                                                    // console.log("Respuesta tercera peticion:", data);
                                                                    $.get("../../Controllers/Peticiones/PreciosNull.php", function(data, status){
                                                                        mostrarToast("Cuarta solicitud completada");
                                                                        // console.log("Respuesta cuarta peticion:", data);
                                                                        setTimeout(function() {
                                                                            location.reload();
                                                                        }, 3100);
                                                                    });
                                                    });
                                    });
                    });
            
        });
    });
});

// ========================================================================================================================================================
</script>
</body>
</html>
      
    
