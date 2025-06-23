import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState, useEffect } from 'react';
import '../../styles/Resizable.css';

import { SidebarResizer } from "./SidebarResizer";
import { EditorResizer } from "./EditorResizer";
import { Previews } from "../Previews";
 
export function ViewResizer () {

    // ---- ---- //
    const [openSidebar, setOpenSidebar] = useState(true);
    const [changeSidebar, setChangeSidebar] = useState(true);
    // ---- ---- //
    const [openPreview, setOpenPreview] = useState(true);
    const [changePreview, setChangePreview] = useState(true);
    // ---- ---- //

    useEffect(() => {
        const handleSidebar = () => setOpenSidebar(prev => !prev);
        const handlePreview = () => setOpenPreview(prev => !prev);

        (window as any).electron.ipcRenderer.on('toggle-sidebar', handleSidebar);
        (window as any).electron.ipcRenderer.on('toggle-preview', handlePreview);

        return () => {
            (window as any).electron.ipcRenderer.removeListener('toggle-sidebar', handleSidebar);
            (window as any).electron.ipcRenderer.removeListener('toggle-preview', handlePreview);
        };
    }, []);

    useEffect(() => { setChangeSidebar(openSidebar); }, [openSidebar]);
    useEffect(() => { setChangePreview(openPreview); }, [openPreview]);

    return (
        <PanelGroup direction="horizontal" className="view-space">
            <Panel defaultSize={openSidebar ? 20 : 0} minSize={changeSidebar != openSidebar ? 20 : 0} maxSize={openSidebar ? 35 : 0} className="panel">
                <SidebarResizer />
            </Panel>

            <PanelResizeHandle className="handle horizontal" />

            <Panel defaultSize={60} minSize={10} className="panel">
                <EditorResizer />
            </Panel>

            <PanelResizeHandle className="handle horizontal" />

            <Panel defaultSize={openPreview ? 20 : 0} minSize={changePreview != openPreview ? 20 : 0} maxSize={openPreview ? 35 : 0} className="panel">
                <Previews />
            </Panel>
        </PanelGroup>
    )
}