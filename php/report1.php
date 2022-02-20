<?php
require_once "../database/Database.php";
$type = $_POST['type'];
$date_start = $_POST['date_start'];
$date_end = $_POST['date_end'];
$row = [];
$array = [
   ['Lorem ipsum 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 6', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 7', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 9', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 10', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 11', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 12', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 13', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 14', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 15', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 16', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 17', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 18', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 19', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
   ['Lorem ipsum 20', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi incidunt neque. '],
];
$i = 0;
while ($i <= count($array)) {
    $row[$i] = [
        'num' => $i,
        'name' => $array[$i][0],
        'title' => $array[$i][1],
    ];
    $i++;
}

echo json_encode($row);

//ЕСЛИ НАСТРОИТЕ ПОДКЛБЮЧЕНИЕ К БД
/*$db = new Database();
try {
    $row = [];
    $query_text = "select * from `$table_name` $where;";
    $query = $db->query($query_text);
    if (!$query)
    {
        throw new Exception("wrong select_query: ".$query_text, 123);
    }
    if (!$query->num_rows)
    {
        echo json_encode([
            'no_data' => 'no_data',
            'num' => 0,
            'query_text' => $query_text
        ]);
    }
    else
    {
        $row = [];
        $i = 0;
        while ($row = $query->fetch_assoc()) //делаем массив ассоциированным (ключ->значение)
        {
            $rows[$i++] = $row;
        }
        echo json_encode([
            'rows' => $rows,
            'num' => $i,
            'query_text' => $query_text
        ]);
    }

} catch (Exception $e) {
    echo json_encode(array(
        'error' => array(
            "msg" => $e->getMessage(),
            "code" => $e->getCode()
        )
    ));
}*/
