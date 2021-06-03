const createComponent = function (props) {
  /**
   * Private Functions & Variables
   */
  var propsMap = new Map()

  const setPropValues = p => {
    const propEntries = Object.entries(p)
    propEntries.forEach(([key, value]) => {
      propsMap.set(key, value)
    })
  }

  const getRootNode = () => {
    var id = propsMap.get('id')

    const existing = document.getElementById(id)

    if (!existing) {
      var app = document.getElementById('app')
      var el = document.createElement('div')
      el.id = id

      app.appendChild(el)

      return el
    }

    return existing
  }

  const render = () => {
    var name = propsMap.get('name') || ''
    var el = getRootNode()

    el.innerHTML = name
  }

  const renderWithProps = p => {
    setPropValues(p)
    render()
  }

  /**
   * Public Functions
   */
  return {
    init() {
      renderWithProps(props)
    },
    update(newProps) {
      renderWithProps(newProps)
    }
  }
}

// ComponentOne is assigned the value returned by createComponent
const ComponentOne = createComponent({
  name: 'Dan',
  id: 'component-one'
})
ComponentOne.init()

const ComponentTwo = createComponent({
  name: 'John',
  id: 'component-two'
})
ComponentTwo.init()

const btnOne = document.createElement('button')
btnOne.innerHTML = 'Update One'
btnOne.addEventListener('click', function () {
  ComponentOne.update({
    name: 'Peter'
  })
})

const btnTwo = document.createElement('button')
btnTwo.innerHTML = 'Update Two'
btnTwo.addEventListener('click', function () {
  ComponentTwo.update({
    name: 'Malcolm'
  })
})
document.body.appendChild(btnOne)
document.body.appendChild(btnTwo)
