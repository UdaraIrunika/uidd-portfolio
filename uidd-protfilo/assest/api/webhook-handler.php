<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

class DeploymentWebhook {
    private $dataFile = 'deployments.json';
    
    public function handleWebhook() {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if ($this->isValidDeployment($data)) {
            $this->saveDeployment($data);
            return [
                'success' => true,
                'message' => 'Deployment recorded successfully'
            ];
        }
        
        return [
            'success' => false,
            'message' => 'Invalid deployment data'
        ];
    }
    
    private function isValidDeployment($data) {
        return isset($data['type']) && 
               $data['type'] === 'deployment' &&
               isset($data['payload']) &&
               isset($data['payload']['deployment']);
    }
    
    private function saveDeployment($data) {
        $deployment = $data['payload']['deployment'];
        
        // Only save successful deployments
        if ($deployment['readyState'] !== 'READY') {
            return;
        }
        
        $deploymentData = [
            'id' => $deployment['uid'],
            'name' => $deployment['name'],
            'url' => 'https://' . $deployment['url'],
            'githubUrl' => $this->getGitHubUrl($deployment),
            'created' => time(),
            'updated' => time(),
            'state' => $deployment['readyState'],
            'description' => $this->generateDescription($deployment['name']),
            'meta' => $deployment['meta'] ?? []
        ];
        
        $existingDeployments = $this->getStoredDeployments();
        
        // Remove old deployment with same name
        $existingDeployments = array_filter($existingDeployments, function($item) use ($deploymentData) {
            return $item['name'] !== $deploymentData['name'];
        });
        
        // Add new deployment
        array_unshift($existingDeployments, $deploymentData);
        
        // Keep only latest 10 deployments
        $existingDeployments = array_slice($existingDeployments, 0, 10);
        
        file_put_contents($this->dataFile, json_encode($existingDeployments, JSON_PRETTY_PRINT));
    }
    
    private function getStoredDeployments() {
        if (file_exists($this->dataFile)) {
            return json_decode(file_get_contents($this->dataFile), true) ?: [];
        }
        return [];
    }
    
    private function getGitHubUrl($deployment) {
        if (isset($deployment['meta']['githubCommitRepo'])) {
            $repo = $deployment['meta']['githubCommitRepo'];
            return "https://github.com/{$repo}";
        }
        return "https://github.com/UdaraIrunika";
    }
    
    private function generateDescription($projectName) {
        $descriptions = [
            'portfolio' => 'A responsive portfolio website built with modern web technologies',
            'ecommerce' => 'Modern e-commerce platform with responsive design',
            'shop' => 'Online store with seamless shopping experience',
            'blog' => 'Content management system with blogging capabilities',
            'dashboard' => 'Interactive dashboard with real-time data visualization',
            'app' => 'Web application with modern user interface',
            'api' => 'RESTful API service with comprehensive documentation',
            'watermark' => 'Image processing application with AI capabilities',
            'default' => 'Automatically deployed web application with live demo'
        ];
        
        $name = strtolower($projectName);
        
        foreach ($descriptions as $key => $desc) {
            if (strpos($name, $key) !== false) {
                return $desc;
            }
        }
        
        return $descriptions['default'];
    }
}

// Handle webhook
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $webhook = new DeploymentWebhook();
    $result = $webhook->handleWebhook();
    echo json_encode($result);
} else {
    echo json_encode(['error' => 'Method not allowed']);
}
?>