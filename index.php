<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Пример печати</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- Печать  -->
    <script src="build/pdfmake.js"></script>
    <script src="build/pdfmake.min.js"></script>
    <script src="build/vfs_fonts.js"></script>
</head>
<body>
<div class="container-fluid row p-2 m-1">
    <div class="col p-1">
        <button class="btn btn-outline-secondary btn-menu"
                onclick=objPrintingTable.v_report()>Отчет вариант 1
        </button>
    </div>
    <!--<div class="col-1 m-1" id="adm"></div>-->
    <div class="col-2 text-right" id="login"></div>
</div>
<div class="container-fluid mt-5" id="main"></div>

<div class="container-fluid mt-5" id="result">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid at deleniti dicta dolorem doloremque doloribus eveniet ex id illo impedit itaque iusto labore, libero natus neque nulla obcaecati perspiciatis placeat quaerat repudiandae unde veritatis vitae voluptatem voluptatum. Aliquid consequatur cum cupiditate, debitis distinctio error excepturi exercitationem fugit iure iusto laudantium magni molestiae natus neque obcaecati odit, officia officiis optio placeat quasi quis reprehenderit sit, ullam veritatis voluptatibus. Alias corporis ea et maiores necessitatibus perspiciatis voluptatibus? Assumenda autem ex labore laudantium maxime minima neque pariatur placeat, quasi temporibus! Accusamus aspernatur at consequatur consequuntur, cumque debitis dignissimos dolor dolore doloremque ducimus eaque earum eveniet iusto labore molestias numquam officia officiis optio pariatur perferendis qui repellendus similique, sint velit veniam vero voluptas. Architecto doloribus fugit impedit ipsam maiores officiis omnis perferendis, quam, quasi repellendus repudiandae soluta ullam vero! Error incidunt laboriosam placeat rem voluptatem! Hic, iusto magni numquam omnis quibusdam tempore totam.

    <input type="button" class="btn btn-outline-danger form-control btn-sm" value="Экспорт в pdf" id="print">

</div>
<!--<script type="text/javascript">
    $(document).ready(function(){
        alert(jQuery.fn.jquery);
    });
</script>-->


<script src="js/main.js"></script>
<script src="js/js/jquery-3.5.1.min.js"></script>

</body>
</html>
