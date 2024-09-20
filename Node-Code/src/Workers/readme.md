## Cluster

The key point here is the `else` block. This code runs in each worker process created by `cluster.fork()`. Here's how it works:

The master process creates worker processes using `cluster.fork()`.

Each time cluster.fork() is called, Node.js creates a new process and runs the entire script again in that process.

When the script runs in a worker process, `cluster.isMaster` is false, so the code enters the else block.

Inside the else block, we create an HTTP server using `http.createServer()` and make it listen on port 8000.

This means that each worker process will have its own instance of the HTTP server listening on the same port.

The cluster module in Node.js is designed to allow multiple processes to share the same port. When a new connection comes in on the shared port, Node.js distributes it to the workers in a round-robin fashion.
So, while it might look like we're trying to create multiple servers on the same port (which would normally cause an error), the cluster module handles this for us, allowing all worker processes to share the load of incoming connections.
This setup allows your Node.js application to take advantage of multiple CPU cores, potentially handling more concurrent connections and improving performance.

## Worker and event loop

Here's how workers interact with the event loop:

1- Main Thread:

- The main thread's event loop continues to handle UI updates, user interactions, and other tasks.
- It can send messages to workers and receive messages from them without being blocked.


2- Worker Thread:

- Each worker has its own event loop.
- It can perform time-consuming operations without affecting the main thread.
- It communicates with the main thread through a messaging system.