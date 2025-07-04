import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Loading } from "../Loading";

import { extensionToLanguageMap } from '../../../utils/constants';
import dataTheme from '../../public/gstudio-dark-color-theme.json';

export type OpenFile = {
  name: string;
  path: string;
  content: string;
  language: string;
};

interface EditorProps { file: string; }

export function EditorView({ file }: EditorProps) {
  const [fileView, setFileView] = useState<string | null>(null);
  const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);
  const [themeReady, setThemeReady] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [content, setContent] = useState('');
  const [format, setFormat] = useState<string>('');

  const handleEditorDidMount = (_: any, monaco: any) => {
    try {
      monaco.editor.defineTheme('gstudio-dark', dataTheme);
      monaco.editor.setTheme('gstudio-dark');
      setThemeReady(true);
    } catch (error) { console.error('❌ Error registrando tema:', error); }
    finally { setThemeReady(true); }
  };

  const saveOpenFile = () => {

    const findSimilar = openFiles.find(data => data.path == file);

    if(findSimilar) return;

    let shapes = file.split('\\');

    let nameFile = shapes[shapes.length - 1];
    let ext = nameFile.split('.')[1];

    let newFile : OpenFile = {
      name: nameFile,
      path: file,
      content: content,
      language: extensionToLanguageMap[ext] || 'plaintext'
    };

    setOpenFiles([...openFiles, newFile]);
  }

  const fetchFile = async (value : string) => {
    setFileView(value);
    try {
      if (value) {
        const result = await (window as any).electron.ipcRenderer.readFile(value);
        setContent(result);

        let formatBase = value.split('.');
        let extension = formatBase[formatBase.length - 1];

        let newFormat = extensionToLanguageMap[extension] || 'plaintext';
        setFormat(newFormat);
        saveOpenFile();
      }
    } catch (err) {
      console.log("ERROR DE CARGA DE ARCHIVOS: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => { fetchFile(file); }, [file]);

  const closeTab = (prevFile : OpenFile) => {
    if(prevFile.path == fileView) {
      if (openFiles.length > 0) { fetchFile(openFiles[0].path); }
      else {
        setContent('');
        setFormat('javascript');
      }
    }
    const newFiles = openFiles.filter(data => data != prevFile);
    setOpenFiles(newFiles);
  }

  const openTab = (prevFile : OpenFile) => { fetchFile(prevFile.path); }

  return (
    <div className="editor-container">
      { (isLoading && !themeReady) ? <Loading /> :
        <>
          <div className='tab-bar'>
            {openFiles.map(newFile => (
              <div tabIndex={0} onClick={ () => openTab(newFile) } key={newFile.path} className={`tab ${fileView == newFile.path && 'active'}`}>
                <span>{newFile.name}</span>
                <button className="x-button" onClick={() => closeTab(newFile) }>×</button>
              </div>
            ))}
          </div>
          { file ? 
            <Editor
              height="100vh"
              language={format}
              value={content}
              theme="gstudio-dark"
              onChange={value => setContent(value || '')}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                automaticLayout: true
              }}
            /> :
            <Editor
              height="100vh"
              defaultLanguage='gamo'
              value={content}
              theme="gstudio-dark"
              onChange={value => setContent(value || '')}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                automaticLayout: true
              }}
            />
          }
        </>
      }
    </div>
  );
}