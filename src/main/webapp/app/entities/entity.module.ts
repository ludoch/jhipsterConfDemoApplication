import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterConfDemoApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterConfDemoApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterConfDemoApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterConfDemoApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterConfDemoApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterConfDemoApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterConfDemoApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterConfDemoApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterConfDemoApplicationRegionMySuffixModule,
        JhipsterConfDemoApplicationCountryMySuffixModule,
        JhipsterConfDemoApplicationLocationMySuffixModule,
        JhipsterConfDemoApplicationDepartmentMySuffixModule,
        JhipsterConfDemoApplicationTaskMySuffixModule,
        JhipsterConfDemoApplicationEmployeeMySuffixModule,
        JhipsterConfDemoApplicationJobMySuffixModule,
        JhipsterConfDemoApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterConfDemoApplicationEntityModule {}
