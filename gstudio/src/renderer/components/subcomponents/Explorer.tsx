import { Icons } from '../../iconTheme/icons';
import { FileItem } from '../Resizers/SidebarResizer';

interface ExplorerProps {
  open: boolean;
  setOpen: () => void;
  projectTree: FileItem[];
  onFileClick: (file: FileItem) => void;
}

export function Explorer ({open, setOpen, projectTree, onFileClick}: ExplorerProps) {

    function renderTree(items: FileItem[]) {
        return items.map(item => (
            <div key={item.path} className={`explorer-item ${item.isDirectory ? '' : 'space-left'}`} onClick={() => !item.isDirectory && onFileClick(item)}>
                {item.isDirectory && <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>}
                <img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} className="icon-1" src={item.isDirectory ? Icons['folder-close'] : Icons[item.name]} />
                <span className="label-item">{item.name}</span>
            </div>
        ));
    }

    return (
        <div className={open ? "gstudio-explorer grow" : "gstudio-explorer"}>
            <div className="title-sector" tabIndex={0} onClick={() => setOpen()}>
                <div className="title">
                    <img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['chevron']} className={open ? "chevron" : "chevron rotate"} />
                    <h4>Explorer</h4>
                </div>
                <div className="list-icons">
                    <a title="Add File" className="icon"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['add-file']} /></a>
                    <a title="Add Folder" className="icon"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['add-folder']} /></a>
                    <a title="Settings Sidebar" className="icon"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['settings']} /></a>
                </div>
            </div>
            { open && 
                <div className="content-explorer">
                    <div className="searchbar-sector gap-1">
                        <a className="btn-primary"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} className="icon-btn" src={Icons['add']} /></a>
                        <form className="searchbar">
                            <a className="icon-2"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['filter']} /></a>
                            <input
                                type="text"
                                className="w-icon-left w-icon-right"
                                />
                            <a className="icon-2"><img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} src={Icons['search']} /></a>
                        </form>
                    </div>
                    <div className="explorer-content">
                        <div key='back-explorer' className="explorer-item">
                            <a className="icon-chevron"><img src={Icons['chevron']} className="chevron" /></a>
                            <img onError={(e) => {(e.target as HTMLImageElement).src = Icons['file'];}} className="icon-1" src={Icons['folder-close']} />
                            <span className="label-item">. .</span>
                        </div>
                        { renderTree(projectTree) }
                    </div>
                </div>
            }
        </div>
    )
}