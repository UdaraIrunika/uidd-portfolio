<?php
header('Content-Type: application/json');

// ⚙️ Your personal access token from Vercel
$token = "lmyrcZSFQsgC1LyrKXg7HfR0";

// Get projects from Vercel API
$url = "https://api.vercel.com/v9/projects";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $token",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

$demos = [];

if (isset($data['projects'])) {
    foreach ($data['projects'] as $project) {
        $name = $project['name'];
        $framework = $project['framework'] ?? 'Custom';
        $createdAt = date("F j, Y", $project['createdAt'] / 1000);
        $url = "https://$name.vercel.app";
        $repo = $project['link']['repo'] ?? null;
        $repoUrl = $repo ? "https://github.com/" . $project['link']['org'] . "/" . $repo : "#";

        $demos[] = [
            'name' => ucfirst($name),
            'description' => "Project built with $framework framework.",
            'url' => $url,
            'repo' => $repoUrl,
            'framework' => $framework,
            'created' => $createdAt
        ];
    }
}

echo json_encode($demos, JSON_PRETTY_PRINT);
?>
