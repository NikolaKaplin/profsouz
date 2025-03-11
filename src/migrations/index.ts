import * as migration_20250311_092501 from './20250311_092501';
import * as migration_20250311_093323 from './20250311_093323';

export const migrations = [
  {
    up: migration_20250311_092501.up,
    down: migration_20250311_092501.down,
    name: '20250311_092501',
  },
  {
    up: migration_20250311_093323.up,
    down: migration_20250311_093323.down,
    name: '20250311_093323'
  },
];
