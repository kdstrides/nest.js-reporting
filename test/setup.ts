import { rmSync } from 'fs';
import { join } from 'path';

global.beforeEach(async () => {
  try {
    await rmSync(join(__dirname, '..', 'test.sqlite'));
  } catch (error) {}
});
