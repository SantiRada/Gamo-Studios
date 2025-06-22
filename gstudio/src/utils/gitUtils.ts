import fs from 'fs';
import path from 'path';

export const isGitConnected = (): boolean => {
  const projectPath = getCurrentProjectRoot(); // función tuya
  return fs.existsSync(path.join(projectPath, '.git'));
};


function getCurrentProjectRoot () {
    return 'exampleDir';
}