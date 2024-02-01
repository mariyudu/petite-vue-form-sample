<?php
$data = file_get_contents("php://input");
sleep(3);
header('Content-Type: application/json');
echo json_encode([
    'success' => true,
    'message' => 'OK',
    'data' => [
        'ticketId' => sha1(uniqid())
    ]
]);