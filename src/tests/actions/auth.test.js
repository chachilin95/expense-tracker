import { login, logout } from '../../actions/auth';

test('Should create login action', () => {
    const uid = 'uid';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should create logout action', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

