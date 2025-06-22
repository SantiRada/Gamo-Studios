import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState, useEffect } from "react";

export function EditorResizer() {

    // ---- ---- //
    const [openConsole, setOpenConsole] = useState(true);
    const [changeConsole, setChangeConsole] = useState(true);
    // ---- ---- //
    const [fullConsole, setFullConsole] = useState(true);
    const [changeFullConsole, setChangeFullConsole] = useState(true);
    // ---- ---- //

    useEffect(() => {
        const handleConsole = () => setOpenConsole(prev => !prev);
        const handleEditor = () => setFullConsole(prev => !prev);

        (window as any).electron.ipcRenderer.on('toggle-console', handleConsole);
        (window as any).electron.ipcRenderer.on('full-console', handleEditor);

        return () => {
            (window as any).electron.ipcRenderer.removeListener('toggle-console', handleConsole);
            (window as any).electron.ipcRenderer.removeListener('full-console', handleEditor);
        };
    }, []);
    
    useEffect(() => { setChangeConsole(openConsole); }, [openConsole]);
    useEffect(() => { setChangeFullConsole(fullConsole); }, [fullConsole]);

    return (
        <PanelGroup direction="vertical">
            <Panel defaultSize={fullConsole ? 65 : 0} minSize={changeFullConsole != fullConsole ? 65 : 0} maxSize={fullConsole ? 65 : 0} className="panel">
                <div className="gstudio-editor"></div>
            </Panel>

            <PanelResizeHandle className="handle vertical" />

            <Panel defaultSize={openConsole ? 20 : 0} minSize={changeConsole != openConsole ? 20 : 0} maxSize={openConsole ? 35 : 0} className="panel">
                <div className="gstudio-console">
                    <textarea>PS D:\Documentos\GitHub\Gamo Studios\gstudio</textarea>
                </div>
            </Panel>
        </PanelGroup>
    )
}