param(
    [int]$Port = 3000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"

try {
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Output "SERVER_READY: $prefix"
} catch {
    $Port = 5173
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Output "SERVER_READY: $prefix"
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".jsx"  = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.RawUrl.Split('?')[0].TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path) -or $path -eq "/") {
            $path = "index.html"
        }

        $distBase = Join-Path (Get-Location) "dist"
        $distPath = Join-Path $distBase ($path -replace '/', '\')
        $localPath = Join-Path (Get-Location) ($path -replace '/', '\')

        $targetFile = $null
        if ((Test-Path (Join-Path $distBase "index.html")) -and (Test-Path $distPath -PathType Leaf)) {
            $targetFile = $distPath
        } elseif (Test-Path $localPath -PathType Leaf) {
            $targetFile = $localPath
        } elseif (Test-Path (Join-Path $distBase "index.html") -PathType Leaf) {
            $targetFile = Join-Path $distBase "index.html"
        } elseif (Test-Path (Join-Path (Get-Location) "index.html") -PathType Leaf) {
            $targetFile = Join-Path (Get-Location) "index.html"
        }

        if ($targetFile -and (Test-Path $targetFile -PathType Leaf)) {
            $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
            $response.ContentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    } catch {
        # Keep loop running on connection drops
    }
}
