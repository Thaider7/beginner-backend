# ==========================================
# START SERVER SCRIPT
# ==========================================
# This script helps you manage your Node.js server

Write-Host "`n🚀 Starting Backend Server...`n" -ForegroundColor Cyan

# Check if port 3000 is already in use
$portCheck = netstat -ano | findstr :3000
if ($portCheck) {
    Write-Host "⚠️  Port 3000 is already in use!" -ForegroundColor Red
    Write-Host "Do you want to kill the process and restart? (Y/N): " -ForegroundColor Yellow -NoNewline
    $response = Read-Host
    
    if ($response -eq 'Y' -or $response -eq 'y') {
        # Get the PID and kill it
        $pid = ($portCheck[0] -split '\s+')[-1]
        Write-Host "Stopping process $pid..." -ForegroundColor Yellow
        Stop-Process -Id $pid -Force
        Start-Sleep -Seconds 1
        Write-Host "✅ Port 3000 is now free!`n" -ForegroundColor Green
    } else {
        Write-Host "❌ Server not started. Please stop the existing server first.`n" -ForegroundColor Red
        exit
    }
}

# Start the server
Write-Host "Starting npm start...`n" -ForegroundColor Green
npm start


