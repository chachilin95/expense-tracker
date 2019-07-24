import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';
import Enzyme from 'enzyme';

DotEnv.config({ 
    path: '.env.test.local'
});

Enzyme.configure({
    adapter: new Adapter()
});