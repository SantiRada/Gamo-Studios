import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

import { Shortcuts } from '../subcomponents/Shortcut';
import { Explorer } from '../subcomponents/Explorer';
import { Assets } from '../subcomponents/Assets';

export function SidebarResizer() {

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
                    <Explorer open={openExplorer} setOpen={toggleExplorer} />
                </Panel>

                <PanelResizeHandle className="handle vertical" />

                <Panel
                    defaultSize={25}
                    minSize={prevOpenAssets != openAssets ? 50 : 5}
                    className="panel"
                    maxSize={openAssets ? 100 : 5}
                    >
                    <Assets open={openAssets} setOpen={toggleAssets} />
                </Panel>
            </PanelGroup>
        </div>
    )
}