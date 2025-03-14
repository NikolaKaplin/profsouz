import * as migration_20250311_092501 from './20250311_092501';
import * as migration_20250311_093323 from './20250311_093323';
import * as migration_20250314_104610 from './20250314_104610';
import * as migration_20250314_104653 from './20250314_104653';
import * as migration_20250314_104755 from './20250314_104755';

export const migrations = [
  {
    up: migration_20250311_092501.up,
    down: migration_20250311_092501.down,
    name: '20250311_092501',
  },
  {
    up: migration_20250311_093323.up,
    down: migration_20250311_093323.down,
    name: '20250311_093323',
  },
  {
    up: migration_20250314_104610.up,
    down: migration_20250314_104610.down,
    name: '20250314_104610',
  },
  {
    up: migration_20250314_104653.up,
    down: migration_20250314_104653.down,
    name: '20250314_104653',
  },
  {
    up: migration_20250314_104755.up,
    down: migration_20250314_104755.down,
    name: '20250314_104755'
  },
];
