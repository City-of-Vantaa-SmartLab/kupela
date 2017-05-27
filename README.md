# kupela
KUPELA application for SmartLab, server and client versions


Server Side

Server side application for KUPELA includes a NodeJS server with express and Socket.IO.
Socket connection is used to communicate between clients and the server.

To run server, follow these instructions:
1. Open cmd window
2. Navigate to the folder containing the server code
3. run "npm install" to install node modules
4. run server with "npm start"
5. Stop with ctrl+c

To connect TIKE client to server running on localhost (no web version available yet), follow these instructions:

1. Import Socket.IO on client side:</br>
"<script src="/socket.io/socket.io.js"></script>"
2. Connect to socket on localhost:</br>
"var socket = io.connect("localhost:8080/tike");"