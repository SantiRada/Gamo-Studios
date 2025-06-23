import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect, useState } from "react";

import { Shortcuts } from '../subcomponents/Shortcut';
import { Explorer } from '../subcomponents/Explorer';
import { Assets } from '../subcomponents/Assets';

export type FileItem = {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: FileItem[];
};

type OpenFile = {
  name: string;
  path: string;
  content: string;
  language: string;
};

export function SidebarResizer() {

    const [projectTree, setProjectTree] = useState<FileItem[]>([]);
    const [assetsTree, setAssetsTree] = useState<FileItem[]>([]);

    useEffect(() => {
        const handler = async (_: any, folderPath: string) => {
            const folderAsset = folderPath + '/assets';

            const tree = await (window as any).electron.ipcRenderer.invoke('read-folder', folderPath);
            setProjectTree(tree);
            
            const folderExists = await (window as any).electron.ipcRenderer.invoke('check-folder', folderAsset);
            if (folderExists) {
                const assets = await (window as any).electron.ipcRenderer.invoke('read-folder', folderAsset);
                setAssetsTree(assets);
            }
        };

        (window as any).electron.ipcRenderer.on('project-folder-selected', handler);

        return () => {
            (window as any).electron.ipcRenderer.removeListener('project-folder-selected', handler);
        };
    }, []);


    const [openExplorer, setOpenExplorer] = useState(true);
    const [openAssets, setOpenAssets] = useState(true);
    
    const [prevOpenExplorer, setPrevOpenExplorer] = useState(false);
    const [prevOpenAssets, setPrevOpenAssets] = useState(false);

    const toggleExplorer = () => setOpenExplorer(!openExplorer);
    const toggleAssets = () => setOpenAssets(!openAssets);

    useEffect(() => {
        setPrevOpenExplorer(!prevOpenExplorer);
        setPrevOpenAssets(!prevOpenAssets);
    }, [openExplorer, openAssets]);

    const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);
    const [activePath, setActivePath] = useState<string | null>(null);

    const handleFileClick = async (file: FileItem) => {
        const exists = openFiles.find(f => f.path === file.path);
        console.log("Archivo: " + file);
        if (exists) {
            setActivePath(file.path);
            return;
        }

        const content = await (window as any).electron.ipcRenderer.invoke('read-file', file.path);
        const ext = file.name.split('.').pop()?.toLowerCase() || 'txt';

        const newFile: OpenFile = {
            name: file.name,
            path: file.path,
            content,
            language: detectLanguage(ext),
        };

        setOpenFiles(prev => [...prev, newFile]);
        setActivePath(file.path);
        };

        const detectLanguage = (ext: string): string => {
        switch (ext) {
            case 'gamo': return 'javascript';
            case 'ui': return 'json';
            case 'dialog': return 'plaintext';
            case 'lang': return 'json';
            default: return 'plaintext';
        }
    };

    return (
        <div className="gstudio-sidebar">
            <Shortcuts />
            <PanelGroup direction='vertical'>
                <Panel
                    defaultSize={70}
                    minSize={prevOpenExplorer != openExplorer ? 50 : 5}
                    className="panel"
                    maxSize={openExplorer ? 100 : 5}
                    >
                    <Explorer open={openExplorer} setOpen={toggleExplorer} projectTree={projectTree} onFileClick={handleFileClick} />

                </Panel>

                <PanelResizeHandle className="handle vertical" />

                <Panel
                    defaultSize={25}
                    minSize={prevOpenAssets != openAssets ? 50 : 5}
                    className="panel"
                    maxSize={openAssets ? 100 : 5}
                    >
                    <Assets open={openAssets} setOpen={toggleAssets} projectTree={assetsTree} />
                </Panel>
            </PanelGroup>
        </div>
    )
}