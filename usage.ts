const fs = new FileSystem();
const server = new DevServer();
const compiler = new FrontendPageSvelteCompiler();

server.setFS(fs, '/');
server.watchRoot();

setTimeout(() => {
    const svelteCode = compiler.compile("{}");
    fs.writeFile('path/page.svelte', svelteCode);
}, 2000)

server.serve(8080); // visit http://abc.xyz:8080 to open index.html
