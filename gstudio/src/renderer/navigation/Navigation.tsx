import '../styles/tabs.css';
import { ShowTab } from "./ShowTab";

import { fileMenu } from "./tabs/File";
import { editMenu } from "./tabs/Edit";
import { viewMenu } from "./tabs/View";
import { gamoMenu } from "./tabs/Gamo";
import { layoutMenu } from "./tabs/Layout";
import { componentsMenu } from "./tabs/Components";
import { versionControlMenu } from "./tabs/VersionControl";
import { helpMenu } from "./tabs/Help";


export function Navigation () {
    return (
        <nav className="tabs drag-region">
            <div className="navigation-bar no-drag">
                <img src="/icon.png" className="logo" />
                <ShowTab file={fileMenu} />
                <ShowTab file={editMenu} />
                <ShowTab file={viewMenu} />
                <ShowTab file={gamoMenu} />
                <ShowTab file={layoutMenu} />
                <ShowTab file={componentsMenu} />
                <ShowTab file={versionControlMenu} />
                <ShowTab file={helpMenu} />
            </div>
            <div className="tab-system no-drag">
                <div className="window-controls">
                    <button onClick={() => window.api.minimize()}>─</button>
                    <button onClick={() => window.api.maximize()}>▢</button>
                    <button onClick={() => window.api.close()}>✕</button>
                </div>
            </div>
        </nav>
    )
}