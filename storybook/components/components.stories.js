import { storiesOf } from '@storybook/polymer'
import vaadin from '@lit-any/components-vaadin'
import paper from '@lit-any/components-paper-elements'
import '@lit-any/forms/lit-form'
import { FieldTemplates } from '@lit-any/forms'
import * as components from '@lit-any/forms/components'
import { html } from 'lit-html'
import { select, boolean } from '@storybook/addon-knobs'
import * as once from 'once'

import onSubmit from '../helpers/submit-handler'
import notes from '../notes/components/getting-started'

const componentSets = { paper, vaadin }

const registerTemplates = once((templates) => {
    templates.when.fieldMatches(f => f.property === 'description')
        .rendersComponent(components.textbox({ type: 'multi line' }))
    templates.when.fieldMatches(f => f.type === 'string')
        .rendersComponent(components.textbox())
    templates.when.fieldMatches(f => f.type === 'language')
        .rendersComponent(components.dropdown({
            items: [
                { value: 'en', label: 'English' },
                { value: 'de', label: 'German' },
                { value: 'pl', label: 'Polish' },
            ],
        }))
})

storiesOf('lit-form/component sets', module)
    .add('getting started', () => {
        const selectedSet = select('component set', ['Native', ...Object.keys(componentSets)], 'paper')
        const templates = FieldTemplates.byName('components-complete')
            .useComponents(componentSets[selectedSet])

        registerTemplates(templates)

        const c = {
            fields: [
                {
                    property: 'name',
                    title: 'First name',
                    type: 'string',
                },
                {
                    property: 'description',
                    title: 'More about you',
                    type: 'string',
                },
                {
                    property: 'language',
                    title: 'Preferred language',
                    type: 'language',
                },
            ],
        }

        const initialValue = {
            name: 'Johann Doe',
            description: `I 
like 
line-breaks`,
            language: 'de',
        }

        return notes(html`<lit-form template-registry="components-complete"
                              .contract="${c}"
                              @submit="${onSubmit}"
                              ?no-labels="${!boolean('Show labels', selectedSet === 'Native')}"
                              .value="${initialValue}"></lit-form>`)
    })
