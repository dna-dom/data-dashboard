// DataDashboard ~~ MIT License
// Lookup

// Modules
import { webAppConfig, WebAppPanel } from './config.js';

const webAppLookup = {
   widgets:     webAppConfig.widgets,
   panels:      <WebAppPanel[]>webAppConfig.panels,
   chartColors: webAppConfig.chartColors,
   widget:      dna.array.toMap(webAppConfig.widgets),
   panel:       dna.array.toMap(webAppConfig.panels),
   chartColor:  dna.array.toMap(webAppConfig.chartColors),
   };

export { webAppLookup };
