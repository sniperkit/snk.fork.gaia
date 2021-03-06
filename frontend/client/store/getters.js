/*
Sniperkit-Bot
- Status: analyzed
*/

const pkg = state => state.pkg
const app = state => state.app
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menuitems = state => state.menu.items
const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}
const session = state => state.session
const intervals = state => state.intervals

export {
  pkg,
  app,
  device,
  sidebar,
  effect,
  menuitems,
  componententry,
  session,
  intervals
}
