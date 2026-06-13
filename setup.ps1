# Anti-Gravity Project Setup Script
# Run this in PowerShell from the "Just" folder

# Step 1 — Copy the GLB model
Write-Host "Copying GLB model..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path "antigravity\public\models" | Out-Null
Copy-Item "32fe93d90d399923618eef110e4e6991.glb" "antigravity\public\models\freedom-model.glb" -Force
Write-Host "✓ Model copied to antigravity\public\models\freedom-model.glb" -ForegroundColor Green

# Step 2 — Install dependencies
Write-Host "`nInstalling npm packages (this may take 3-5 minutes)..." -ForegroundColor Cyan
Set-Location antigravity
npm install

# Step 3 — Start the dev server
Write-Host "`nStarting dev server..." -ForegroundColor Cyan
npm run dev
