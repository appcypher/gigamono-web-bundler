class FileSystem {
    // A basic file system running in the browser.
    // Uses IndexDB and service worker.

    root: Folder;

    writeFile(path: string, content: string) {}
}

class Folder {
    name: string;
    files: File[];
    folders: Folder[];
}

class File {
    name: string;
    content: string;
}
