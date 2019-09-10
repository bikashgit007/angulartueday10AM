import { RoutingModule } from '../router/router.module';

describe('RouterModule', () => {
  let routerModule: RoutingModule;

  beforeEach(() => {
    routerModule = new RoutingModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
