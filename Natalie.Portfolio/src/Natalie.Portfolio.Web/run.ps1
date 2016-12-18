[System.Diagnostics.Process]::Start("http://localhost:5000")

start powershell {dotnet run; Read-Host}

start powershell {gulp watch; Read-Host}