import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';

export const environment = {
  production: false,
  micro: {
    on: isInIcestark,
    base: getBasename,
  },
};
