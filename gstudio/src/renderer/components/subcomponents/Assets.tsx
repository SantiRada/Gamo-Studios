import { Icons } from '../../iconTheme/icons';

interface AssetsProps {
    open : boolean;
    setOpen : () => void;
}

export function Assets ({open, setOpen}: AssetsProps) {
    
    return (
        <div className={open ? "gstudio-explorer grow" : "gstudio-explorer"}>
            <div className="title-sector" tabIndex={0} onClick={() => setOpen()}>
                <div className="title">
                    <img src={Icons['chevron']} className={open ? "chevron" : "chevron rotate"} />
                    <h4>Assets</h4>
                </div>
                <div className="list-icons">
                    <a title="File Explorer" className="icon"><img src={Icons['folder-close']} /></a>
                    <a title="Settings Assets" className="icon"><img src={Icons['settings']} /></a>
                </div>
            </div>
            { open && 
                <div className="content-explorer">
                    <div className="searchbar-sector">
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
                            <span className="label-item">Player</span>
                        </div>
                        <div className="explorer-item">
                            <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>
                            <img className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">Environment</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['mp3']} />
                            <span className="label-item">example.mp3</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['3d']} />
                            <span className="label-item">example.blend</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['videos']} />
                            <span className="label-item">example.mp4</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['vector']} />
                            <span className="label-item">example.svg</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['imgs']} />
                            <span className="label-item">example.png</span>
                        </div>
                        <div className="explorer-item space-left">
                            <img className="icon-1" src={Icons['imgs']} />
                            <span className="label-item">example.jpeg</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}