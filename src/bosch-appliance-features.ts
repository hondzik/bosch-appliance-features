import { version, repository, displayName, description } from "../package.json";

import "./features/bosch-dishwasher-programs/bosch-dishwasher-programs-feature";
import "./features/bosch-dishwasher-options/bosch-dishwasher-options-feature";
import "./features/bosch-dishwasher-time/bosch-dishwasher-time-feature";

const commonStyle = "padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;";
const nameStyle = `background-color: rgba(243, 91, 49, 1); color: rgba(39, 10, 66, 1); ${commonStyle}`;
const versionStyle = `background-color: rgba(39, 10, 66, 1); color: rgba(243, 91, 49, 1); ${commonStyle}`;

console.groupCollapsed(`%c${displayName}%c${version}`, nameStyle, versionStyle);
console.info(description);
console.info(`Github: ${repository.url}`);
console.groupEnd();