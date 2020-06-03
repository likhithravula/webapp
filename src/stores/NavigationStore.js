import { decorate, observable } from 'mobx'

class NavigationStore {
  expanded = false
}

decorate( NavigationStore, {
  expanded: observable
})

export default NavigationStore
