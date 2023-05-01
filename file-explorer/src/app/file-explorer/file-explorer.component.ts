import { Component } from '@angular/core';
import * as fs from 'fs';

@Component({
    selector: 'app-file-explorer',
    templateUrl: './file-explorer.component.html',
    styleUrls: ['./file-explorer.component.sass']
})
export class FileExplorerComponent {
    directoryContents: fs.Dirent[] | null = null;
    directoryPath: string = 'C:\\';

    readDirectory(path: string): void {
        this.directoryContents = null;
        fs.readdir(path, { withFileTypes: true }, (err: NodeJS.ErrnoException | null, dirents: fs.Dirent[]) => {
            if (err) throw err;
            this.directoryContents = dirents;
        });
    }
}
