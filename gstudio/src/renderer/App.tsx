import './styles/views.css';
import { useState, useEffect } from 'react';

import { Navigation } from './navigation/Navigation';
import { ViewResizer } from './components/Resizers/ViewResizer';
import { ProjectSettings } from './components/ProjectSettings';
import { Loading } from './components/Loading';

export default function App () {

  const theme = localStorage.getItem('theme') || 'iatheme';

  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.api?.onOpenSettings(() => { setShowSettings(!showSettings); });

    import(`./themes/${theme}.css`)
  }, [theme]);

  return (
      <div className="gstudio-layout">
        { isLoading ? <Loading /> :
          <>
            <Navigation />
            <ViewResizer />
            { showSettings && <ProjectSettings /> }
          </>
        }
      </div>
  );
}