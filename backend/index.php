<?php
$data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
header('Content-Type: application/json');
echo json_encode($data);



?>