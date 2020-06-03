/**
 *
 * Asynchronously loads the component for VisualisationPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
