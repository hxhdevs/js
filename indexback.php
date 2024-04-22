<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dotaciones</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
<link rel="stylesheet" href="../../../Assets/sidebar/all.css">
<link rel="stylesheet" href="../../../Assets/sidebar/all.min.css">
<link rel="stylesheet" href="../../../Assets/sidebar/ionicons.min.css">
<link rel="stylesheet" href="../../../Assets/sidebar/adminlte.min.css?v=3.2.0">

<body class="hold-transition sidebar-mini">
<div class="wrapper">

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
<ul class="navbar-nav ml-auto">

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
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p>
        Surtimiento
        <i class="right fas fa-angle-left"></i>
        </p>
        </a>
        <ul class="nav nav-treeview">
        <li class="nav-item">
        <a href="../../index.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Dashboard v1</p>
        </a>
        </li>
        </ul>
        </li>
        </nav>
    </div>
</aside>

<div class="content-wrapper">
<section class="content-header">
<div class="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="../../Surtimientos/index.php">Surtimientos </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  /
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><span class="font-weight-bold">Detalles</span></a>
      </li>
    </ul>
  </div>
</nav>
</div>
</section>

<section class="content">
<div class="container-fluid">
<div class="card card-success card-outline">
<div class="card-header">
      <div class="container">
      
      
<!-- ======================================================================================================================================================= -->
<div class="d-flex justify-content-between align-items-center">
          <h3 id="rutadescripcion">Titulo ruta</h3>
          <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#surtidomodal" id="btnNuevoSurtimiento">
                <i class="fas fa-plus-circle"></i>
            </button>
              <br>
          </div>
      </div>
<!-- ======================================================================================================================================================= -->
<!-- ======================================================================================================================================================= -->
<div class="modal fade" id="surtidomodal" tabindex="-1" role="dialog" aria-labelledby="surtidomodalLabel" aria-hidden="true"  data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-lg" role="document"> <!-- Agrega la clase modal-lg aquí -->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="surtidomodalLabel">Nuevo surtimiento</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
        <div class="form-row">
            <div class="form-group col-md-2">
              <label for="idsurtimiento" class="col-form-label">#</label>
              <input type="text" class="form-control" id="idsurtimiento" placeholder="" readonly>
              <input type="hidden" id="idsurtimiento" name="idsurtimiento">
            </div> 
            <div class="form-group col-md-5">
              <label for="lecheria" class="col-form-label">Lecheria:</label>
              <input type="text" class="form-control" id="lecheria" placeholder="Busque lecheria a ingresar">
              <input type="hidden" id="fk_lecheria_seleccionada" name="fk_lecheria_seleccionada">
            </div>
            <div class="form-group col-md-5">
              <label for="producto" class="col-form-label">Producto:</label>
              <input type="text" class="form-control" id="producto" placeholder="Busque el producto a ingresar">
              <input type="hidden" id="fk_producto_seleccionado" name="fk_producto_seleccionado">
            </div>
            <div class="form-group col-md-5">
              <label for="cantidad" class="col-form-label">Cantidad:</label>
              <input type="text" class="form-control" id="cantidad" placeholder="Ingrese cantidad">
              <input type="hidden" id="cantidad" name="cantidad">
            </div>
            
        </div>
        <button type="button" class="btn btn-primary" id="btnAgregar"><i class="fas fa-file-medical"></i> Agregar</button>  
        <hr>
        <div class="table-responsive">
        <table class="table" id="tablaSurtidos">
            <thead>
                <tr>
                    <th>ID surtido</th>
                    <th>Lecheria</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
        </form>
      </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" id="btnGuardar">Guardar</button>
        </div>
    </div>
  </div>
</div>
<!-- ======================================================================================================================================================= -->

      <div class="row">
    <div class="col-lg-12">
        <div class="table-responsive">
            <table id="tabladetallesruta" class="table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th style="display: none;">PK_surtimiento</th>
                        <th style="display: none;">Fecha</th>
                        <th style="display: none;">Ruta</th>
                        <th style="display: none;">Semana</th>
                        <th style="display: none;">CVECT</th>
                        <th style="display: none;">Dotacion</th>
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
                        <th>Importe neto</th>
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
</div>
</section>
<!-- ============================================================================================================================================================================ -->
<div class="modal fade" id="updatedmodal" tabindex="-1" role="dialog" aria-labelledby="updatedmodalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updatedmodalLabel">Detalles del surtimiento</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="surtimientoForm" method="POST">
          <div class="form-row">
            <div class="form-group row-md-2 mr-2">
                <label for="id">ID:</label>
                <input type="text" class="form-control" id="id" readonly>
            </div>
            <div class="form-group row-md-2 mr-2">
                <label for="lecheriaupd">Lechería:</label>
                <input type="text" class="form-control" id="lecheriaupd" readonly>
            </div>
            <div class="form-group row-md-2 mr-2">
                <label for="productoupd">Producto:</label>
                <input type="text" class="form-control" id="productoupd" readonly>
            </div>
            <div class="form-group row-md-2 mr-2" >
              <label for="litros">Litros:</label>
              <input type="text" class="form-control" id="litros" >
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="precio">Precio:</label>
              <input type="text" class="form-control" id="precio" >
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="importe">Importe:</label>
              <input type="text" class="form-control" id="importe" readonly>
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="faltante">Faltante:</label>
              <input type="text" class="form-control" id="faltante">
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="rotos">Rotos:</label>
              <input type="text" class="form-control" id="rotos">
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="sobrantes">Sobrantes:</label>
              <input type="text" class="form-control" id="sobrantes">
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="devoluciones">Devoluciones:</label>
              <input type="text" class="form-control" id="devoluciones">
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="litrosnetos">Litros netos:</label>
              <input type="text" class="form-control" id="litrosnetos" readonly>
            </div>
            <div class="form-group row-md-2 mr-2">
              <label for="importeneto">Importe neto:</label>
              <input type="text" class="form-control" id="importeneto" readonly>
            </div>
          </div>
        </form>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="guardarCambiosBtn">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================================================================================================================================ -->


<script src="../../../Assets/jquery.min.js"></script>
<script src="../../../Assets/sidebar/bootstrap.bundle.min.js"></script>
<script src="../../../Assets/sidebar/adminlte.min.js?v=3.2.0"></script>
<!--    Datatables-->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.css"/>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>  
    <script>
function cargarDatosFromURL() {
    document.addEventListener('DOMContentLoaded', function() {
        // Obtener los parámetros de la URL
        var urlParams = new URLSearchParams(window.location.search);
        var fechadiadeventa = urlParams.get('fechadiadeventa');
        var fk_ruta = urlParams.get('fk_ruta');
        var semana = urlParams.get('semana');
        var fk_cvect = urlParams.get('fk_cvect');
        var titulo = "Ruta: " + fk_ruta + ", Fecha: " + fechadiadeventa + ", Semana: " + semana + ", CVECT: " + fk_cvect;
        // Seleccionar el elemento <h3> y asignarle el nuevo valor
        var h3Titulo = document.getElementById('rutadescripcion');
        h3Titulo.textContent = titulo;
        console.log('fechadiadeventa:', fechadiadeventa, ', fk_ruta:', fk_ruta, ', semana:', semana, ', fk_cvect:', fk_cvect);
        // Llamar a la función para cargar los datos en el DataTables
        cargarDatos(fechadiadeventa, fk_ruta, semana, fk_cvect);
    }); 
}
cargarDatosFromURL()


function cargarDatos(fechadiadeventa, fk_ruta, semana, fk_cvect) {
    // Realizar la solic  itud AJAX a show.php con los parámetros
    $.ajax({
        url: '../../Surtimientos/show.php',
        method: 'GET',
        data: {
            fechadiadeventa: fechadiadeventa,
            fk_ruta: fk_ruta,
            semana: semana,
            fk_cvect: fk_cvect
        },
        dataType: 'json',
        success: function(data) {
            // Inicializar el DataTables con los datos devueltos
            var tabla = $('#tabladetallesruta').DataTable({
                data: data,
                columns: [
                    { data: 'id_surtimiento_producto' }, // oculta la columna
                    { "data": "pk_surtimiento", "visible": false }, // oculta la columna
                    { "data": "fechadiadeventa", "visible": false }, // oculta la columna
                    { "data": "fk_ruta", "visible": false }, // oculta la columna
                    { "data": "semana", "visible": false }, // oculta la columna
                    { "data": "fk_cvect", "visible": false }, // oculta la columna
                    { data: 'fk_dotaciones', "visible": false},
                    { data: 'fk_lecheria' },
                    { data: 'fk_producto' },
                    { data: 'litros' },
                    { data: 'fk_precios' },
                    { data: 'importe' },
                    { data: 'faltantes' },
                    { data: 'rotos' },
                    { data: 'sobrantes' },
                    { data: 'devoluciones' },
                    { data: 'litrosnetos' },
                    { data: 'importeneto' },
                    {"defaultContent": "<div class='text-center'><div class='btn-group'><button type='button' class='btn btn-primary btn-sm btnEditar' data-toggle='modal' data-target='#updatedmodal' ><i class='fas fa-edit'></i></button><button type='button' class='btn btn-danger btn-sm btnBorrar'><i class='fas fa-trash-alt'></i></button></div></div>"},
                ],
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
                }
            });
        },
        error: function(xhr, status, error) {
            console.log(error);// Manejar errores si es necesario 
            }
        });
}
// ===================================================================================================================================================================
//Editar        
$(document).on("click", ".btnEditar", function(){		        
    fila = $(this).closest("tr");	        
    id = parseInt(fila.find('td:eq(0)').text());
    lecheriaupd = parseInt(fila.find('td:eq(1)').text());
    productoupd = parseInt(fila.find('td:eq(2)').text());
    litros = parseInt(fila.find('td:eq(3)').text());
    precio = parseInt(fila.find('td:eq(4)').text());
    importe = parseInt(fila.find('td:eq(5)').text());
    faltante = parseInt(fila.find('td:eq(6)').text());
    rotos = parseInt(fila.find('td:eq(7)').text());
    sobrantes = parseInt(fila.find('td:eq(8)').text());
    devoluciones = parseInt(fila.find('td:eq(9)').text());
    litrosnetos = parseInt(fila.find('td:eq(10)').text());
    importeneto = parseInt(fila.find('td:eq(11)').text());
    
    // alert("ID: " + id +
    // //   "\nLecheria: " + lecheriaupd +
    // //   "\nProducto: " + productoupd +
    //   "\nLitros: " + litros +
    //   "\nPrecio: " + precio +
    //   "\nImporte: " + importe +
    //   "\nFaltante: " + faltante +
    //   "\nRotos: " + rotos +
    //   "\nSobrantes: " + sobrantes +
    //   "\nDevoluciones: " + devoluciones +
    //   "\nLitros netos: " + litrosnetos +
    //   "\nImporte neto: " + importeneto);

    $("#id").val(id);
    $("#lecheriaupd").val(lecheriaupd);
    $("#productoupd").val(productoupd);
    $("#litros").val(litros);
    $("#precio").val(precio);
    $("#importe").val(importe);
    $("#faltante").val(faltante);
    $("#rotos").val(rotos);
    $("#sobrantes").val(sobrantes);
    $("#devoluciones").val(devoluciones);
    $("#litrosnetos").val(litrosnetos);
    $("#importeneto").val(importeneto);
    $('#updatedmodal').modal({ show:true });
});


// ===================================================================================================================================================================
// function editarFila() {// Variable para controlar si se está editando una fila
//     var editando = false;
//     $('#tabladetallesruta').on('click', '.btn-edit-row', function () {// Manejador de eventos para el botón de edición
//         if (editando) {// Verificar si ya se está editando una fila
//             return; // Salir de la función si ya se está editando una fila
//         }
//         // Obtener la fila a editar
//         var row = $(this).closest('tr');
//         // Guardar el contenido original de la fila para restaurarlo en caso de cancelación
//         var originalContent = row.html();
//         // Ocultar botones de editar y eliminar
//         row.find('.btn-edit-row, .btn-delete-row').hide();
//         // Convertir las celdas de la fila en campos de entrada editables
//         row.find('td').each(function (index) {// Verificar si el contenido actual de la celda no es un botón ni el identificador de algún campo que no quieres editar
//             if (!$(this).find('button').length 
//                 && index !== 0 && index !== 1 && index !== 3 && index !== 4 && index !== 9 && index !== 10
//             ) { // Agregar numero de fila que no se va a editar
//                 var cellContent = $(this).html();
//                 $(this).html('<input type="text" class="form-control" value="' + cellContent + '">');
//                 if (!row.find('.btn-save-row').length) {// Agregar botón de guardar si no existe
//                     row.find('.btn-edit-row').after('<button name="update" id="update" type="button" class="btn btn-success btn-save-row"><i class="fas fa-save"></i></button>');
//                 }
//                 if (!row.find('.btn-cancel-row').length) {// Agregar botón de cancelar si no existe
//                     row.find('.btn-delete-row').after('<button name="cancel" id="cancel" type="button" class="btn btn-danger btn-cancel-row"><i class="fas fa-times"></i></button>');
//                 }
//                 row.find('.btn-cancel-row').on('click', function() {// Evento click para cancelar la edición
//                     row.html(originalContent);// Restaurar el contenido original de la fila
//                 });
//                 row.find('.btn-save-row').on('click', function() {// Evento click para cancelar la edición
//                     row.html(originalContent);// Restaurar el contenido original de la fila
//                 });
//             }
//         }); 
//         editando = true;// Establecer el estado de edición como activo
//     });
// }
// ===================================================================================================================================================================
// function passingData() {
//     $(document).on('click', '#update', function () {
//         var row = $(this).closest('tr');
//         var updatedData = {};
//         // Recopilar los valores de los campos de entrada editables
//         row.find('input[type="text"]').each(function () {
//             var columnIndex = $(this).closest('td').index(); // Obtener el índice de la columna
//             var columnName = $('#tabladetallesruta th').eq(columnIndex).text(); // Obtener el nombre de la columna desde el encabezado de la tabla
//             var cellValue = $(this).val(); // Obtener el valor del campo de entrada
//             updatedData[columnName] = cellValue; // Agregar el valor al objeto de datos actualizados
//         });
//         // Asignar valor id a la primera columna y otros valores a las columnas restantes
//         // Recopilar los valores de los campos no editables
//         updatedData['id'] = row.find('td:eq(0)').text();
//         updatedData['Producto'] = row.find('td:eq(1)').text();
//         updatedData['Precio'] = row.find('td:eq(3)').text();
//         updatedData['Importe'] = row.find('td:eq(4)').text();
//         updatedData['Litros netos'] = row.find('td:eq(9)').text();
//         updatedData['Importe neto'] = row.find('td:eq(10)').text();

//         // Asignar valores a las variables individuales
//         var i0 = updatedData['id'];
//         var i1 = updatedData['Producto'];
//         var i2 = updatedData['Litros'];
//         var i3 = updatedData['Precio'];
//         var i4 = updatedData['Importe'];
//         var i5 = updatedData['Faltantes'];
//         var i6 = updatedData['Rotos'];
//         var i7 = updatedData['Sobrantes'];
//         var i8 = updatedData['Devoluciones'];
//         var i9 = updatedData['Litros netos'];
//         var i10 = updatedData['Importe neto'];

//         // Mostrar los valores en alertas
//         alert("i0: " + i0 +
//             "\ni1: " + i1 +
//             "\ni2: " + i2 +
//             "\ni3: " + i3 +
//             "\ni4: " + i4 +
//             "\ni5: " + i5 +
//             "\ni6: " + i6 +
//             "\ni7: " + i7 +
//             "\ni8: " + i8 +
//             "\ni9: " + i9 +
//             "\ni10: " + i10);

//         // Llamar a una función para actualizar los datos con los valores obtenidos
//         update_data(i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10);
//     });
// }
//   passingData();
// ===================================================================================================================================================================
// function update_data(i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10)
//   {
//    $.ajax({
//     url: '../../Surtimientos/update.php',
//     method:"POST",
//     data:{i0:i0, i1:i1, i2:i2, i3:i3, i4:i4, i5:i5, i6:i6, i7:i7, i8:i8, i9:i9,i10:i10},
//     success:function(data){
//                            console.log("SUCCESS");
//                           cargarDatos()
//                           //cargarDatosFromURL(fechadiadeventa, fk_ruta, semana, fk_cvect);
//                           //  $('#alert_message').html('<div class="alert alert-success">'+data+'</div>'); //mostramos un alert en caso de haver concluido bien la operacion
//                           //  $('#user_data').DataTable().destroy();
//                           },
//     error:function(xhr){
//                         console.log("Unable request");
//                     }
//    });
   
//    setInterval(function(){
//     $('#alert_message').html('');
//    }, 50000);
//   }
// ========================================================================================================================================================
// $.ajax({
//         url: '../../../pruebadiana/loaddata_lecherias.php',
//         type: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             $('#lecheria').autocomplete({
//         source: data.data.map(item => ({ label: item[1], value: item[1] })),
//         appendTo: "#surtidomodal",
//         select: function (event, ui) {
//                     var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
//                     response($.grep(data.data, function (value) {
//                         return matcher.test(value[1]);
//                     }));
//                 },
//                 select: function (event, ui) {
//                     console.log("Seleccionado: " + ui.item.value);
//                 }
//             });
//         },
//         error: function (error) {
//             console.error('Error al obtener datos: ' + JSON.stringify(error));
//         }
//     });
// ========================================================================================================================================================
// $.ajax({
//         url: '../../../pruebadiana/loaddata_productos.php',
//         type: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             $('#producto').autocomplete({
//         source: data.data.map(item => ({ label: item[1], value: item[1] })),
//         appendTo: "#surtidomodal",
//         select: function (event, ui) {
//                     var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
//                     response($.grep(data.data, function (value) {
//                         return matcher.test(value[1]);
//                     }));
//                 },
//                 select: function (event, ui) {
//                     console.log("Seleccionado: " + ui.item.value);
//                 }
//             });
//         },
//         error: function (error) {
//             console.error('Error al obtener datos: ' + JSON.stringify(error));
//         }
//     });
// ========================================================================================================================================================
$(document).ready(function() {
    var primeraLecheria = ''; // Variable para almacenar la primera lechería capturada
    $('#btnAgregar').click(function() {
        var idsurtimiento = $('#idsurtimiento').val();
        var lecheria = $('#lecheria').val();
        var producto = $('#producto').val();
        var cantidad = $('#cantidad').val();
        if (producto.trim() !== '') {
            if (primeraLecheria === '') {
                primeraLecheria = lecheria;
            }
            var newRow = '<tr><td>' + idsurtimiento + '</td><td>' + primeraLecheria + '</td><td>' + producto + '</td><td>' + cantidad + '</td></tr>';
            $('#tablaSurtidos tbody').append(newRow);
            $('#producto, #cantidad').val('');
            if (lecheria !== primeraLecheria) {
                $('#lecheria').val('');
            } else {
                $('#lecheria').prop('readonly', true);
            }
        }
    });

    $('#btnNuevoSurtimiento').click(function() {
        // Limpiar tabla
        $('#tablaSurtidos tbody').empty();
        // Limpiar campos
        $('#lecheria').val('');
        // Reiniciar variables
        primeraLecheria = '';
        // Habilitar campo de lechería
        $('#lecheria').prop('readonly', false);
    });
});
// ========================================================================================================================================================
function crearSurtimiento(fechadiadeventa, fk_ruta, semana, fk_cvect) {
    $.ajax({
        url: '../../../Controllers/DatatablesCalls/crear_surtimiento.php',
        type: 'POST',
        dataType: 'json',
        data: {
            fechadiadeventa: fechadiadeventa,
            fk_ruta: fk_ruta,
            semana: semana,
            fk_cvect: fk_cvect
        },
        success: function(response) {
            $('#idsurtimiento').val(response.numero_registro);
            console.log('Número de registro creado:', response.numero_registro);
        },
        error: function(xhr, status, error) {
            console.log('Error al crear el surtimiento:', error);
        }
    });
}

$(document).ready(function() {
    $('#btnNuevoSurtimiento').click(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var fechadiadeventa = urlParams.get('fechadiadeventa');
        var fk_ruta = urlParams.get('fk_ruta');
        var semana = urlParams.get('semana');
        var fk_cvect = urlParams.get('fk_cvect');
        
        crearSurtimiento(fechadiadeventa, fk_ruta, semana, fk_cvect);
    });
});

// ========================================================================================================================================================
$(document).ready(function() {
    $('#btnGuardar').click(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var fechadiadeventa = urlParams.get('fechadiadeventa');
        var datos = []; // Matriz para almacenar los datos de la tabla
        // Recorre cada fila de la tabla
        $('#tablaSurtidos tbody tr').each(function() {
            var fila = {}; // Objeto para almacenar los datos de cada fila
            // Obtén los datos de cada celda de la fila actual
            fila.idsurtimiento = $(this).find('td:eq(0)').text();
            fila.lecheria = $(this).find('td:eq(1)').text();
            fila.producto = $(this).find('td:eq(2)').text();
            fila.cantidad = $(this).find('td:eq(3)').text();
            // Agrega el objeto de fila a la matriz de datos
            datos.push(fila);
        });
        // Envía los datos al servidor mediante AJAX
        $.ajax({
            url: '../../../Controllers/Peticiones/Surtimientosave.php',
            method: 'POST',
            data: { datos: JSON.stringify(datos), fechadiadeventa: fechadiadeventa }, // Convierte la matriz a una cadena JSON
            success: function(response) {
                // Maneja la respuesta del servidor
                console.log(response);
                tabla.ajax.reload(null, false);
            },
            error: function(xhr, status, error) {
                // Maneja el error
                console.error(error);
            }
        });
    });
});
// ========================================================================================================================================================
//Borrar
$(document).on("click", ".btnBorrar", function(){
    fila = $(this);           
    id_registro = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;		
    
    var respuesta = confirm("¿Está seguro de borrar el registro "+id_registro+"?");                
    if (respuesta) {            
        $.ajax({
            url: "../delete.php",
            type: "POST",
            dataType: "json",    
            data: { id_registro: id_registro },    
            success: function(response) {
                console.log(response.message);
                // Recargar los datos del DataTable
                tabla.ajax.reload();
            }
        });	
    }
});


// ===================================================================================================================================================================

// ===================================================================================================================================================================

// ===================================================================================================================================================================

        </script>
</body>
</html>
      
    
