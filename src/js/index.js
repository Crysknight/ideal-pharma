/* =================================================================================================== */
/* < CSS > */
/* =================================================================================================== */

import '../css/index.scss';


/* =================================================================================================== */
/* < LIBRARIES > */
/* =================================================================================================== */

import 'bootstrap/js/dist/collapse';
import { device } from 'device.js';
import '@fancyapps/fancybox';


/* =================================================================================================== */
/* < COMPONENTS > */
/* =================================================================================================== */

import './components/navbar';
import './components/intlist-item';
import './components/new';
import './components/card';
import './components/article';


device.addClasses(document.documentElement);

if ($('html.ios').length > 0) {
	setTimeout(function() {
		for (let dropdown of document.querySelectorAll('.nav-item.dropdown')) {
			dropdown.addEventListener('click', function() {
				console.log('hello, motherfucker');
			});
		}
	}, 1000);
}