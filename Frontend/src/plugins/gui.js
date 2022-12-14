/**
 * dat.gui 사용 파트
 */

import * as dat from 'dat.gui'

class Gui {
  constructor(element) {
    this.gui = new dat.GUI({ autoPlace: false })
    this.gui.domElement.style.position = 'absolute'
    this.gui.domElement.style.flex = 'none'
    this.gui.domElement.style.top = '5%'
    this.gui.domElement.style.left = '80%'
    element.style.display = 'inline-flex'

    element.appendChild(this.gui.domElement)
  }

  addOptions(options) {
    this.options = options
  }

  addFolder(name) {
    this.guiFolder = this.gui.addFolder(name)
  }

  addExample(name, min, max, axisNumber) {
    this.guiFolder.add(this.options, name, min, max).onChange(() => {
      axisNumber[name] = this.options[name]
    })
  }
}

export { Gui }
