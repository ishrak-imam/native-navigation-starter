
import {createAction} from '../../utils/reduxHelpers';

export const INIT = 'INIT';
export const START_APP = 'START_APP';

export const init = createAction(INIT);
export const startApp = createAction(START_APP);
