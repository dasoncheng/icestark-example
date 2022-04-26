import appHistory from '@ice/stark-app/lib/appHistory';
import renderNotFound from '@ice/stark-app/lib/renderNotFound';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';

setLibraryName('micro-angular');

export const NotFound = () => {
  return new Promise<boolean>((resolve) => {
    renderNotFound();
    resolve(true);
  });
};

export const navigateto = (to: string) => {
  appHistory.push(to);
};
