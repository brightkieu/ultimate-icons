#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const docsDir = path.join(__dirname, '../docs');

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(docsDir, req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`🚀 Ultimate Icons Showcase running at http://localhost:${port}`);
    console.log('📁 Serving files from: docs/');
    console.log('🔥 Press Ctrl+C to stop the server');
});

process.on('SIGINT', () => {
    console.log('\n👋 Server stopped');
    process.exit(0);
});
