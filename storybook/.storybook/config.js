import { configure, addDecorator } from '@storybook/polymer';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
import litAny from '../../package';

addDecorator(withKnobs);

function loadStories() {
    const req = require.context('..', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

setOptions({
    name: `lit-any ${litAny.version}`,
    addonPanelInRight: true,
    selectedAddonPanel: 'storybooks/storybook-addon-knobs',
    url: 'https://github.com/hypermedia-app/lit-any-core',
    sortStoriesByKind: true,
});

configure(loadStories, module);
