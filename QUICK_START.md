# ⚡ QUICK START GUIDE

## 🚨 IMPORTANT: Restart Cursor First!

**Close Cursor completely and reopen it** so npm works in all new terminals automatically.

---

## 🚀 Two Ways to Start Your Server:

### Option 1: Direct Command (After Restarting Cursor)
```bash
npm start
```

### Option 2: If npm still doesn't work in new terminal
Run this first to load Node.js, then run npm start:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
npm start
```

### Option 3: Use the batch file (Easiest!)
Just double-click: **`start.cmd`** in the file explorer, OR in terminal:
```bash
start.cmd
```

---

## 🛑 To Stop the Server:

Press **`Ctrl+C`** in the terminal where the server is running

---

## 🔥 If Port 3000 is Already in Use:

```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID with the actual number from above)
Stop-Process -Id PID -Force

# Or kill all Node.js processes
Get-Process node | Stop-Process -Force
```

---

## 🌐 Test Your Server:

Once running, visit:
- http://localhost:3000/
- http://localhost:3000/users
- http://localhost:3000/health

---

## ✅ Summary:

1. **Restart Cursor** (close and reopen)
2. Open terminal
3. Type `npm start`
4. Visit http://localhost:3000/

Done! 🎉


