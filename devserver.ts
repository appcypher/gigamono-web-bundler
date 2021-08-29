class DevServer {
    // Server running on the browser.
    // Uses service workers.
    // Calls the bundler to bundle things up.

    port: Number;
    fs: FileSystem;

    serve(port: Number) {}
    setFS(fs: FileSystem, root: String) {}
    watchRoot() {}
}
