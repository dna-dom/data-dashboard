// DataDashboard ~~ MIT License
// Widgets

// Modules
import { webAppWidgetFinRateIntraday } from '../widgets/fin-rate-intraday/fin-rate-intraday.js';
import { webAppWidgetFinRateMovingAvg } from '../widgets/fin-rate-moving-avg/fin-rate-moving-avg.js';
import { webAppWidgetNetworkEndpoints } from '../widgets/network-endpoints/network-endpoints.js';
import { webAppWidgetNetworkLog } from '../widgets/network-log/network-log.js';
import { webAppWidgetNetworkRestTool } from '../widgets/network-rest-tool/network-rest-tool.js';
import { webAppWidgetProjectContributors } from '../widgets/project-contributors/project-contributors.js';
import { webAppWidgetProjectJsonQuestions } from '../widgets/project-json-questions/project-json-questions.js';
import { webAppWidgetSpaceStarships } from '../widgets/space-starships/space-starships.js';
import { webAppWidgetSpaceVehicles } from '../widgets/space-vehicles/space-vehicles.js';
import { webAppWidgetSpacexBooks } from '../widgets/spacex-books/spacex-books.js';
import { webAppWidgetTransBartDepartures } from '../widgets/trans-bart-departures/trans-bart-departures.js';
import { webAppWidgetTransBartStations } from '../widgets/trans-bart-stations/trans-bart-stations.js';
import { webAppWidgetTransNycBikeStations } from '../widgets/trans-nyc-bike-stations/trans-nyc-bike-stations.js';

// Types
export type WebAppWidgetsKey = keyof typeof webAppWidgets;
export type WebAppWidgetCode = typeof webAppWidgets[WebAppWidgetsKey];

const webAppWidgets = {
   finRateIntraday:      webAppWidgetFinRateIntraday,
   finRateMovingAvg:     webAppWidgetFinRateMovingAvg,
   networkEndpoints:     webAppWidgetNetworkEndpoints,
   networkLog:           webAppWidgetNetworkLog,
   networkRestTool:      webAppWidgetNetworkRestTool,
   projectContributors:  webAppWidgetProjectContributors,
   projectJsonQuestions: webAppWidgetProjectJsonQuestions,
   spaceStarships:       webAppWidgetSpaceStarships,
   spaceVehicles:        webAppWidgetSpaceVehicles,
   spacexBooks:          webAppWidgetSpacexBooks,
   transBartDepartures:  webAppWidgetTransBartDepartures,
   transBartStations:    webAppWidgetTransBartStations,
   transNycBikeStations: webAppWidgetTransNycBikeStations,
   };

export { webAppWidgets };
