param([int]$Port = 8935)
$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$Port/"

$mime = @{
  ".html"="text/html"; ".js"="application/javascript"; ".jsx"="application/javascript";
  ".css"="text/css"; ".svg"="image/svg+xml"; ".json"="application/json";
  ".woff2"="font/woff2"; ".jpg"="image/jpeg"; ".png"="image/png"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $reqPath = $ctx.Request.Url.LocalPath
  if ($reqPath -eq "/") { $reqPath = "/index.html" }
  $filePath = Join-Path $root ($reqPath.TrimStart("/"))
  if (Test-Path $filePath -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($filePath)
    $ctype = $mime[$ext]
    if (-not $ctype) { $ctype = "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ctx.Response.ContentType = $ctype
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
  }
  $ctx.Response.OutputStream.Close()
}
