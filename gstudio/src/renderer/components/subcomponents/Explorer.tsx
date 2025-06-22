import { Icons } from '../../iconTheme/icons';

interface ExplorerProps {
    open : boolean;
    setOpen : () => void;
}

export function Explorer ({open, setOpen}: ExplorerProps) {

    return (
        <div className={open ? "gstudio-explorer grow" : "gstudio-explorer"}>
            <div className="title-sector" tabIndex={0} onClick={() => setOpen()}>
                <div className="title">
                    <img src={Icons['chevron']} className={open ? "chevron" : "chevron rotate"} />
                    <h4>Explorer</h4>
                </div>
                <div className="list-icons">
                    <a title="Add File" className="icon"><img src={Icons['add-file']} /></a>
                    <a title="Add Folder" className="icon"><img src={Icons['add-folder']} /></a>
                    <a title="Settings Sidebar" className="icon"><img src={Icons['settings']} /></a>
                </div>
            </div>
            { open && 
                <div className="content-explorer">
                    <div className="searchbar-sector gap-1">
                        <a className="btn-primary"><img className="icon-btn" src={Icons['add']} /></a>
                        <form className="searchbar">
                            <a className="icon-2"><img src={Icons['filter']} /></a>
                            <input
                                type="text"
                                className="w-icon-left w-icon-right"
                                />
                            <a className="icon-2"><img src={Icons['search']} /></a>
                        </form>
                    </div>
                    <div className="explorer-content">
                        <div className="explorer-item">
                            <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>
                            <img className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">Project</span>
                        </div>
                        <div className="explorer-item">
                            <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>
                            <img className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">Assets</span>
                        </div>
                        <div className="explorer-item">
                            <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>
                            <img className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">Scenes</span>
                        </div>
                        <div className="explorer-item">
                            <a className="icon-chevron"></a>
                            <img className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">Scripts</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['gamo']} />
                            <span className="label-item">example.gamo</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['art']} />
                            <span className="label-item">example.art</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['ui']} />
                            <span className="label-item">example.ui</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['sound']} />
                            <span className="label-item">example.sound</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['audio']} />
                            <span className="label-item">example.audio</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['dialog']} />
                            <span className="label-item">example.dialog</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['lang']} />
                            <span className="label-item">example.lang</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}