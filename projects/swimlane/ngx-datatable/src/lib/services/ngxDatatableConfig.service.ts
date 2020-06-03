import { Inject, Injectable, Optional } from '@angular/core';
import { INgxDatatableConfig } from '../ngx-datatable.module';

@Injectable()
export class NgxDatatableConfigService {
  constructor(@Optional() @Inject('configuration') private configuration: INgxDatatableConfig) {
  }

  getConfig(): INgxDatatableConfig {
    return this.configuration;
  }
}
