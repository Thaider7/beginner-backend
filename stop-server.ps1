# ==========================================
# STOP SERVER SCRIPT
# ==========================================
# This script stops all Node.js processes

Write-Host "`n🛑 Stopping all Node.js servers...`n" -ForegroundColor Cyan

# Find all node processes
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    $nodeProcesses | ForEach-Object {
        Write-Host "Stopping Node.js process (PID: $($_.Id))..." -ForegroundColor Yellow
        Stop-Process -Id $_.Id -Force
    }
    Write-Host "`n✅ All Node.js servers stopped!`n" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No Node.js servers are running.`n" -ForegroundColor Yellow
}


