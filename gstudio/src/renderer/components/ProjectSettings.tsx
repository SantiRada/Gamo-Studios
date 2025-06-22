import { t } from '../../main/translations/i18n';
import { useEffect, useState } from 'react';

export function ProjectSettings() {
    const [lang, setLang] = useState('es');
    const [theme, setTheme] = useState('iatheme');
    const [iconTheme, setIconTheme] = useState('classic');

    const [pendingLang, setPendingLang] = useState(lang);
    const [pendingTheme, setPendingTheme] = useState(theme);
    const [pendingIconTheme, setPendingIconTheme] = useState(iconTheme);

    useEffect(() => {
        setPendingLang(localStorage.getItem('lang') || 'es');
        setPendingTheme(localStorage.getItem('theme') || 'iatheme');
        setPendingIconTheme(localStorage.getItem('iconTheme') || 'classic');
    }, []);

    const toggleLang = (e: React.ChangeEvent<HTMLSelectElement>) => { setPendingLang(e.target.value); }
    const toggleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => { setPendingTheme(e.target.value); }
    const toggleIconTheme = (e: React.ChangeEvent<HTMLSelectElement>) => { setPendingIconTheme(e.target.value); }

    const resetChanges = () => {
        localStorage.clear();
        window.location.reload();
    }

    const applyChanges = () => {
        const shouldReload =
            pendingTheme !== theme ||
            pendingIconTheme !== iconTheme ||
            pendingLang !== lang;

        if (shouldReload) {
            localStorage.setItem('theme', pendingTheme);
            localStorage.setItem('iconTheme', pendingIconTheme);
            localStorage.setItem('lang', pendingLang);

            setLang(pendingLang);
            setTheme(pendingTheme);
            setIconTheme(pendingIconTheme);

            window.location.reload();
        } else{
            console.log("No se agregaron cambios");
        }
    };
    return (
        <section className="project-settings">
            <div className="list">
                <a>{t('editor')}</a>
                <a>{t('input')}</a>
            </div>
            <div className="content">
                <div className="space-input">
                    <label>{t('changeLanguage')}</label>
                    <select className="input" onChange={toggleLang}>
                        <option disabled value="">{t('changeLanguage')}</option>
                        <option selected={pendingLang == 'es' ? true : false} value="es">{t('spanish')}</option>
                        <option selected={pendingLang == 'arg' ? true : false} value="arg">{t('spanishArg')}</option>
                        <option selected={pendingLang == 'en' ? true : false} value="en">{t('english')}</option>
                        <option selected={pendingLang == 'de' ? true : false} value="de">{t('aleman')}</option>
                        <option selected={pendingLang == 'fr' ? true : false} value="fr">{t('franch')}</option>
                        <option selected={pendingLang == 'it' ? true : false} value="it">{t('italian')}</option>
                        <option selected={pendingLang == 'ja' ? true : false} value="ja">{t('japanese')}</option>
                        <option selected={pendingLang == 'zh' ? true : false} value="zh">{t('traditionalChine')}</option>
                        <option selected={pendingLang == 'ar' ? true : false} value="ar">{t('hindi')}</option>
                    </select>
                </div>
                <div className="space-input">
                    <label>{t('changeTheme')}</label>
                    <select className="input" onChange={toggleTheme}>
                        <option disabled value="">{t('changeTheme')}</option>
                        <option selected={pendingTheme == 'bluesky' ? true : false} value="bluesky">bluesky</option>
                        <option selected={pendingTheme == 'classicdark' ? true : false} value="classicdark">classicdark</option>
                        <option selected={pendingTheme == 'classiclight' ? true : false} value="classiclight">classiclight</option>
                        <option selected={pendingTheme == 'contrastdark' ? true : false} value="contrastdark">contrastdark</option>
                        <option selected={pendingTheme == 'ia2050' ? true : false} value="ia2050">ia2050</option>
                        <option selected={pendingTheme == 'iatheme' ? true : false} value="iatheme">iatheme</option>
                        <option selected={pendingTheme == 'kawaii' ? true : false} value="kawaii">kawaii</option>
                        <option selected={pendingTheme == 'neon' ? true : false} value="neon">neon</option>
                        <option selected={pendingTheme == 'neonlight' ? true : false} value="neonlight">neonlight</option>
                        <option selected={pendingTheme == 'newdark' ? true : false} value="newdark">newdark</option>
                        <option selected={pendingTheme == 'win97' ? true : false} value="win97">win97</option>
                    </select>
                </div>
                <div className="space-input">
                    <label>{t('changeIconTheme')}</label>
                    <select className="input" onChange={toggleIconTheme}>
                        <option disabled value="">{t('changeIconTheme')}</option>
                        <option selected={pendingIconTheme == 'classic' ? true : false} value="classic">classic</option>
                        <option selected={pendingIconTheme == 'neon' ? true : false} value="neon">neon</option>
                    </select>
                </div>
                <div className="space-input">
                    <button>{t('cancel')}</button>
                    <button onClick={applyChanges}>{t('applyChanges')}</button>
                    
                    <button onClick={resetChanges}>{t('resetConfigs')}</button>
                </div>
            </div>
        </section>
    );
}