<template>
  <div class="dashboard">
    <b-container fluid>
      <b-row>
        <b-col class="col">
          <!-- 작업별 생산현황 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886088380&to=1670907688380&panelId=2"
            width="1190"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2" class="col">
          <!-- 총 생산량 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886061658&to=1670907661658&panelId=4"
            width="210"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
        <b-col cols="3" class="col" style="margin-right: 30px">
          <!-- 총 생산현황 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886076617&to=1670907676617&panelId=7"
            width="350"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
        <b-col cols="6" class="col">
          <!-- 생산현황 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1671435507033&to=1671457107033&panelId=11"
            width="600"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="5" class="col" style="margin-right: 20px">
          <!-- 양품 불량품 게이지 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886102224&to=1670907702224&panelId=9"
            width="580"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
        <b-col class="col" style="margin-left: 20px">
          <!-- 현재 공정률 -->
          <iframe
            src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1671435443683&to=1671457043683&panelId=13"
            width="600"
            height="210"
            frameborder="0"
          ></iframe>
        </b-col>
      </b-row>
      <!-- </b-container> -->
    </b-container>
  </div>
</template>

<script>
import mqtt from 'mqtt'
// import LineChart from '@/components/chart/lineChart'

export default {
  created() {
    this.createMqtt()
  },
  methods: {
    createMqtt() {
      // mqtt연결
      const mqttClient = mqtt.connect(process.env.VUE_APP_MQTT)

      mqttClient.on('connect', () => {
        // mqtt연결 시 구독한다.
        const topic = 'metacamp/sensor' // 구독할 topic
        mqttClient.subscribe(topic, {}, (error, res) => {
          if (error) {
            console.error('mqtt client error', error)
          }
        })
      })

      // 메세지 실시간 수신
      mqttClient.on('message', (topic, message) => {
        const mqttData = JSON.parse(message) // json string으로만 받을 수 있음
        // console.log(mqttData.temperature)

        // 선택된 devicdId만 수용함
        this.removeOldData() // 오래된 데이터 제거

        this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

        // this.makeChartLabels(mqttData) // 차트라벨 생성
        // this.makeChartData() // 차트용 데이터 작성

        // if (this.selected.deviceId === mqttData.id) {
        //   this.removeOldData() // 오래된 데이터 제거

        //   this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

        //   this.makeChartLabels(mqttData) // 차트라벨 생성
        //   this.makeChartData() // 차트용 데이터 작성
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100vh;
  background-color: #000;
  padding-top: 50px;
  padding-left: 60px;
}

.col {
  padding: 0;
}

iframe {
  border-radius: 15px;
}
</style>
