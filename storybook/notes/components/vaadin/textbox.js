import { md, sample } from '../../markdown'

export default function notes(field) {
    return md`
# Vaadin components

## Text field

The basic input which presents a \`<vaadin-text-field>\` or \`<vaadin-text-area>\`

### How it renders

${sample(field)}

### Usage

--- js
import { textbox } from '@lit-any/components-vaadin';
import { ViewTemplates } from '@lit-any/forms;

ViewTemplates.default
    .when(f => f.type === 'string')
    .renders(textbox(options));
--- 
    
### Options

| Name | expected values | default value |
|--|--|--|
| **type** | \`'single line'\`, \`'multi line'\` | \`'single line'\` |`
}
