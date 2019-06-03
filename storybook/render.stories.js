import { storiesOf } from '@storybook/polymer'
import { html, render } from 'lit-html'
import '@lit-any/views/lib/lit-view'
import { ViewTemplates } from '@lit-any/views'
import renderView from '@lit-any/views/lib/render'
import notes from './notes/render'

storiesOf('render', module)
    .add('anywhere', () => {
        ViewTemplates.byName('manual')
            .when
            .valueMatches(v => v.type === 'Person')
            .renders(v => html`Hello, my name is ${v.fullName}`)

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
        }

        const personContainer = document.createElement('div')

        const view = renderView(ViewTemplates.byName('manual'), { value }, false)
        render(view, personContainer)

        return notes(personContainer)
    })
