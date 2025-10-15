<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Simple test data
$testDemos = [
    [
        'id' => 'test-1',
        'name' => 'Test Portfolio',
        'url' => 'https://uidd-protfilo.vercel.app/',
        'githubUrl' => 'https://github.com/UdaraIrunika/uidd-protfilo',
        'created' => time(),
        'updated' => time(),
        'state' => 'READY',
        'description' => 'Test deployment from Vercel'
    ],
    [
        'id' => 'test-2', 
        'name' => 'FreshBite E-commerce',
        'url' => 'https://friendly-fresh-bite.vercel.app/',
        'githubUrl' => 'https://github.com/UdaraIrunika/friendly-FreshBite',
        'created' => time() - 86400,
        'updated' => time() - 86400,
        'state' => 'READY',
        'description' => 'E-commerce platform test'
    ]
];

echo json_encode([
    'success' => true,
    'data' => $testDemos,
    'message' => 'Test data loaded successfully'
]);
?>