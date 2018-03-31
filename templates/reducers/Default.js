import { Map } from 'immutable';
import * as mutate from '../utils/Mutators';

import {mutators} from '@jimib/react-native-libs';

import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../actions/Types';

const INITIAL_STATE = Map({
});

export default (state = INITIAL_STATE, action) => {
	
	const { payload } = action;
	//example reducer
	switch (action.type) {
		case LOGIN_SUCCESS: {
			return mutators.applyState(state, {
				user : payload,
				isLoading : false
			});
		}
		case LOGIN_FAILURE: {
			return mutators.applyState(state, {
				error : payload,
				isLoading : false
			});
		}
		default: {
			return state;
		}
	}
};
