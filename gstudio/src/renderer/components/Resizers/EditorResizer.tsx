import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Editor, OpenFile } from '../subcomponents/Editor';

export function EditorResizer() {
  const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);
  const [activePath, setActivePath] = useState<string | null>(null);

  const [openConsole, setOpenConsole] = useState(true);
  const [changeConsole, setChangeConsole] = useState(true);
  const [fullConsole, setFullConsole] = useState(true);
  const [changeFullConsole, setChangeFullConsole] = useState(true);

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
      <Panel
        defaultSize={75}
        minSize={changeFullConsole != fullConsole ? 75 : 0}
        maxSize={fullConsole ? (openConsole ? 85 : 100) : 0}
        className="panel"
      >
        <Editor
          openFiles={openFiles}
          setOpenFiles={setOpenFiles}
          activePath={activePath}
          setActivePath={setActivePath}
        />
      </Panel>

      <PanelResizeHandle className="handle vertical" />

      <Panel
        defaultSize={25}
        minSize={changeFullConsole != fullConsole ? 25 : (changeConsole != openConsole ? 25 : 0)}
        maxSize={openConsole ? 100 : 0}
        className="panel"
      >
        <div className="gstudio-console">
          <textarea>PS D:\Documentos\GitHub\Gamo Studios\gstudio</textarea>
        </div>
      </Panel>
    </PanelGroup>
  );
}
