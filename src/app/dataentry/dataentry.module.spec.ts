import { DataentryModule } from './dataentry.module';

describe('DataentryModule', () => {
  let dataentryModule: DataentryModule;

  beforeEach(() => {
    dataentryModule = new DataentryModule();
  });

  it('should create an instance', () => {
    expect(dataentryModule).toBeTruthy();
  });
});
