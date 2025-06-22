import './styles/views.css';
import { useState, useEffect } from 'react';

import { Navigation } from './navigation/Navigation';
import { ViewResizer } from './components/Resizers/ViewResizer';
import { ProjectSettings } from './components/ProjectSettings';

export default function App () {

  const theme = localStorage.getItem('theme') || 'iatheme';

  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.api?.onOpenSettings(() => { setShowSettings(!showSettings); });

    import(`./themes/${theme}.css`)
      .then(() => console.log('Tema cargado:', theme))
      .catch(err => console.error('Error cargando el tema:', err));
  }, [theme]);

  return (
      <div className="gstudio-layout">
        <Navigation />
        <ViewResizer />
        { showSettings && <ProjectSettings /> }
      </div>
  );
}