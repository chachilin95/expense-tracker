import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';

test('Should set uid for login', () => {
    const uid = 'uid';
    const action = login(uid);
    const state = authReducer(undefined, action);

    expect(state.uid).toBe(uid);
});

test('Should clear uid for logout', () => {
    const action = logout();
    const state = authReducer({ uid: 'uid' }, action);

    expect(state).toEqual({});
});