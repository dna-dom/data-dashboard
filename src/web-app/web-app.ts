// DataDashboard ~~ MIT License
// Application

// Modules
import { webAppConfig, WebAppChartColor, WebAppPanel, WebAppWidget } from './+page/modules/config.js';
import { webAppController } from './+page/modules/controller.js';
import { webAppLookup } from './+page/modules/lookup.js';
import { webAppNetwork, webAppTransformer, webAppUtil } from './+page/modules/util.js';
import { webAppWidgets } from './+page/modules/widgets.js';

// Types
export type WebAppWidgetMap =     { [code: string]: WebAppWidget };
export type WebAppPanelMap =      { [code: string]: WebAppPanel };
export type WebAppChartColorMap = { [code: string]: WebAppChartColor };
export type WebAppParamValue =    string | number | boolean | null;
export type WebAppParams =        { [param: string]: WebAppParamValue };
export type WebAppDataObject =    Record<string, unknown>;

const webApp = {
   config:      webAppConfig,
   controller:  webAppController,
   util:        webAppUtil,
   network:     webAppNetwork,
   transformer: webAppTransformer,
   lookup:      webAppLookup,  //maps keyed by code (kebab)
   widgets:     webAppWidgets,
   setup(): void {
      console.info('DataDashboard');
      console.info('Widgets:', webAppConfig.widgets.map(widget => widget.code));
      webApp.controller.setup();
      },
   };

webApp.setup();

export default webApp;
