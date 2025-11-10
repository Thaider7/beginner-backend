# ==========================================
# KILL PORT 3000 SCRIPT
# ==========================================
# This script kills whatever is using port 3000

Write-Host "`n🔍 Checking port 3000...`n" -ForegroundColor Cyan

# Find what's using port 3000
$portInfo = netstat -ano | findstr :3000

if ($portInfo) {
    # Extract PID (last column)
    $pid = ($portInfo[0] -split '\s+')[-1]
    
    # Get process details
    try {
        $process = Get-Process -Id $pid -ErrorAction Stop
        Write-Host "Found: $($process.ProcessName) (PID: $pid) is using port 3000" -ForegroundColor Yellow
        Write-Host "Killing process..." -ForegroundColor Red
        Stop-Process -Id $pid -Force
        Write-Host "`n✅ Port 3000 is now free!`n" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Could not find or kill process $pid`n" -ForegroundColor Red
    }
} else {
    Write-Host "✅ Port 3000 is free! No process is using it.`n" -ForegroundColor Green
}


