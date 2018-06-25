import { AppBootstrapModuleModule } from './app-bootstrap-module.module';

describe('AppBootstrapModuleModule', () => {
  let appBootstrapModuleModule: AppBootstrapModuleModule;

  beforeEach(() => {
    appBootstrapModuleModule = new AppBootstrapModuleModule();
  });

  it('should create an instance', () => {
    expect(appBootstrapModuleModule).toBeTruthy();
  });
});
