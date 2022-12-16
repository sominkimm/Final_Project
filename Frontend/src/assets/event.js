/**
 * 목표 기기의 실시간 정보를 연결하는 파트입니다
 * 방식은 자유지만 본 프로젝트에서는 mqtt를 사용함
 */
import mqtt from 'mqtt'

class Event {
  constructor(element, edukit) {
    const toggleButtonElement = document.createElement('button')
    toggleButtonElement.style.position = 'absolute'
    toggleButtonElement.style.top = '65%'
    toggleButtonElement.style.left = '80%'
    // toggleButtonElement.style.width = '50px'
    toggleButtonElement.style.width = '150px'
    toggleButtonElement.style.height = '50px'
    toggleButtonElement.style.background = 'transparent'
    toggleButtonElement.style.border = 'none'
    const toggleButton = toggleButtonElement.appendChild(document.createElement('button'))
    toggleButton.innerText = 'MQTT'

    // toggleButton.innerText = 'MQTT'
    // toggleButton.style.backgroundColor = 'yellow'

    const eventElement = document.createElement('div')
    eventElement.style.position = 'absolute'
    eventElement.style.display = 'flex'
    eventElement.style.flexDirection = 'column'
    // eventElement.style.marginRight = '0'
    eventElement.style.top = '65%'
    eventElement.style.left = '85%'
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle(eventElement)
    })

    // document.template.appendChild(toggleButton)

    const inputAddressElement = eventElement.appendChild(document.createElement('input'))
    inputAddressElement.placeholder = 'MQTT Host'

    const inputPortElement = eventElement.appendChild(document.createElement('input'))
    inputPortElement.placeholder = 'MQTT Port'

    const inputPathElement = eventElement.appendChild(document.createElement('input'))
    inputPathElement.placeholder = 'MQTT Path'

    const inputTopicElement = eventElement.appendChild(document.createElement('input'))
    inputTopicElement.placeholder = 'MQTT Topic'

    const buttonElement = eventElement.appendChild(document.createElement('button'))
    buttonElement.innerText = 'Connect'

    const statusElement = eventElement.appendChild(document.createElement('span'))
    statusElement.innerText = '연결'
    statusElement.style.color = 'red'
    // const toggleButton = eventElement.appendChild(document.createElement('button'))
    // toggleButton.innerText = 'test'
    // toggleButton.style.position = 'absolute'
    // toggleButton.style.top = '50%'
    // toggleButton.style.right = '50%'
    // toggleButton.style.width = '50px'
    buttonElement.addEventListener('click', () => {
      let props = {
        hostname: inputAddressElement.value,
        port: inputPortElement.value,
        path: inputPathElement.value,
        topic: inputTopicElement.value,
        status: statusElement.style,
        edukit: edukit
      }
      statusElement.style.color = 'red'
      if (this.client) this.client.end()

      this.setEvent(props)
    })

    element.appendChild(eventElement)
    element.appendChild(toggleButtonElement)
  }

  setEvent(props) {
    let { hostname, port, path, topic, status, edukit } = props

    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
    this.client = mqtt.connect({
      clientId,
      clean: true,
      protocol: 'ws',
      reconnectPeriod: 1000,
      hostname: hostname,
      port: port,
      path: path
    })

    this.client.on('connect', () => {
      console.log('MQTT Connected')
      status.color = 'green'

      this.client.subscribe([topic], () => {
        console.log(`토픽 연결 완료: ${topic}`)
      })
      this.client.on('message', (topic, payload) => {
        console.log(`토픽 ${topic}에서 전송된 메시지: ${payload.toString()}`)

        let message = JSON.parse(payload)
        let data = message.Wrapper.filter(p => p.tagId === '21' || p.tagId === '22')
        data = data.map(p => parseInt(p.value))

        edukit['yAxis'] = data[0]
        edukit['xAxis'] = data[1]
      })
    })
  }
}

export { Event }
