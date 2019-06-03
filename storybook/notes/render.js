import { md, sample } from './markdown'

export default function notes(view) {
    return md`## Manually render to container
    
${sample(view)}
    
It is possible to use raw \`TemplateResult\` produced by \`@lit-any\` and append it to a HTML element using \`lit-html\`.

To do that define the templates just as they are defined to be rendered by the \`lit-view\` element. 

Then a manual process builds the DOM tree and it's stamped to any HTML node:

--- js
ViewTemplates.default
    .when
    .valueMatches(v => v.type === 'Person')
    .renders(v => html\`Hello, my name is $\{v.fullName}\`);

const value = {
    type: 'Person',
    fullName: 'Louis Litt',
};

const personContainer = document.createElement('div');

const view = renderView(ViewTemplates.default, { value }, false);
render(view, personContainer);
---`
}
