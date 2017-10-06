/* =================================================================================================== */
/* < CSS > */
/* =================================================================================================== */

import '../css/index.scss';


/* =================================================================================================== */
/* < LIBRARIES > */
/* =================================================================================================== */

import 'bootstrap/js/dist/collapse';
import { device } from 'device.js';


/* =================================================================================================== */
/* < COMPONENTS > */
/* =================================================================================================== */

import './components/navbar';
import './components/tip';
import './components/presentation';


device.addClasses(document.documentElement);