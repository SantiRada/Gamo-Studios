import MonacoEditor from "@monaco-editor/react";

export type OpenFile = {
    name: string;
    path: string;
    content: string;
    language: string;
};

interface EditorProps {
    openFiles: OpenFile[];
    setOpenFiles: React.Dispatch<React.SetStateAction<OpenFile[]>>;
    activePath: string | null;
    setActivePath: (path: string | null) => void;
}

export function Editor({ openFiles, setOpenFiles, activePath, setActivePath }: EditorProps) {
  const activeFile = openFiles.find(f => f.path === activePath);

  const handleCloseTab = (filePath: string) => {
    const newFiles = openFiles.filter(f => f.path !== filePath);
    setOpenFiles(newFiles);

    if (filePath === activePath) {
      const remaining = newFiles[0]?.path || null;
      setActivePath(remaining);
    }
  };

  const handleContentChange = (newValue: string | undefined) => {
    if (newValue === undefined || !activeFile) return;
    
    setOpenFiles(prev =>
    prev.map(f =>
        f.path === activeFile.path ? { ...f, content: newValue } : f
    )
    );
  };

  return (
    <div className="editor-container">
      {/* Tabs */}
      <div className="tab-bar">
        {openFiles.map(file => (
          <div
            key={file.path}
            className={`tab ${file.path === activePath ? 'active' : ''}`}
            onClick={() => setActivePath(file.path)}
          >
            <span>{file.name}</span>
            <button onClick={(e) => {
              e.stopPropagation();
              handleCloseTab(file.path);
            }}>×</button>
          </div>
        ))}
      </div>

      {/* Monaco Editor */}
      {activeFile && (
        <MonacoEditor
          height="100%"
          language={activeFile.language}
          value={activeFile.content}
          onChange={handleContentChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            automaticLayout: true,
            minimap: { enabled: false },
          }}
        />
      )}
    </div>
  );
}