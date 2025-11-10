# 🚀 Server Management Guide

## Quick Start

### Method 1: Direct Command (Recommended for Learning)
```powershell
npm start
```
- Keep the terminal open to see server logs
- Press `Ctrl+C` to stop the server

### Method 2: Use Helper Scripts (Easier!)

#### Start the Server
```powershell
.\start-server.ps1
```
- Automatically checks if port 3000 is in use
- Offers to kill the existing process if needed
- Starts the server

#### Stop the Server
```powershell
.\stop-server.ps1
```
- Stops all Node.js processes

#### Kill Port 3000
```powershell
.\kill-port-3000.ps1
```
- Specifically kills whatever is using port 3000
- Useful when you get "EADDRINUSE" error

---

## 🔥 Common Errors & Solutions

### Error: "EADDRINUSE: address already in use :::3000"

**Problem:** Port 3000 is already being used by another process (probably an old server you forgot to stop)

**Solution 1:** Use the kill script
```powershell
.\kill-port-3000.ps1
```

**Solution 2:** Manual method
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace 12345 with the actual PID)
Stop-Process -Id 12345 -Force
```

---

## 📝 Useful Commands

### Check if server is running
```powershell
# Check port 3000
netstat -ano | findstr :3000

# List all Node.js processes
Get-Process node
```

### Test your server
```powershell
# Test home endpoint
curl http://localhost:3000/

# Test users endpoint
curl http://localhost:3000/users

# Test health endpoint
curl http://localhost:3000/health
```

### View in browser
- Home: http://localhost:3000/
- Users: http://localhost:3000/users
- Single User: http://localhost:3000/users/1
- Health: http://localhost:3000/health

---

## 💡 Tips

1. **Always stop the server properly** using `Ctrl+C` when running `npm start`
2. **If you close the terminal** without stopping the server, it will keep running in the background
3. **Use the helper scripts** to avoid port conflicts
4. **Check the terminal logs** to see incoming requests and any errors

---

## 🎯 Your Server Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create new user |
| GET | `/health` | Health check |

---

## 🐛 Debugging

### Server won't start?
1. Check if port 3000 is in use: `netstat -ano | findstr :3000`
2. Kill the process using the port: `.\kill-port-3000.ps1`
3. Try starting again: `npm start`

### npm command not found?
1. Close and reopen Cursor completely
2. Node.js PATH should be set automatically
3. Test with: `node --version` and `npm --version`

---

## 📚 Next Steps

- Try accessing all endpoints in your browser
- Use Postman or Thunder Client to test POST requests
- Check the `server.js` file to understand each route
- Modify endpoints and restart the server to see changes


