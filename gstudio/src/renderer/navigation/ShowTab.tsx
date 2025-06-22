import { useState, useRef, useEffect } from "react";

export interface MenuItem {
  label?: string;
  accelerator?: string;
  click?: () => void;
  submenu?: MenuItem[];
  type?: "separator";
  enabled?: boolean;
  role?: string;
}

interface ShowTabProps {
  file: MenuItem;
}

export function ShowTab({ file }: ShowTabProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  const submenu = file.submenu || [];

  // ⬇ Detectar clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) { document.addEventListener("mousedown", handleClickOutside); }
    else { document.removeEventListener("mousedown", handleClickOutside); }

    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [open]);

  return (
    <div ref={containerRef} className="menu-tab-container" style={{ position: 'relative' }}>
      <div onClick={toggle} className="menu-tab-label">{file.label}</div>

      {open && (
        <div className="menu-tab-submenu">
          {submenu.map((item, index) =>
            item.type === "separator" ? (
              <hr key={index} />
            ) : (
              <div key={index} onClick={item.click} className={item.enabled == false ? 'submenu-item disabled' : 'submenu-item'}>
                <span>{item.label}</span>
                {item.accelerator && (
                  <span style={{ opacity: 0.5 }}>{item.accelerator}</span>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
