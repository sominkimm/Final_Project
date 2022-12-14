<template>
  <div>
    <!-- <h1>대시보드</h1>
    <div>장비: {{ selected.deviceName }}</div>
    <div>태그: {{ selected.tagList }}</div>
    <div v-if="chartData">
      <line-chart ref="chart" :chart-data="chartData" :options="options" style="width: 500px"></line-chart>
    </div> -->
    <!-- <b-container> -->
    <b-row style="background: brown"> 날짜별 생산량(graph) </b-row>
    <b-row style="background: gray">
      <b-col style="background: skyblue"> 생산량(숫자) </b-col>
      <b-col style="background: yellow"> 하루 생산량(bar) </b-col>
    </b-row>
    <b-row style="background: gray">
      <b-col style="background: green"> 현재 작업(stack) </b-col>
      <b-col style="background: pink"> 예측 생산량 </b-col>
    </b-row>
    <iframe
      src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886061658&to=1670907661658&panelId=4"
      width="450"
      height="200"
      frameborder="0"
    ></iframe>

    <iframe
      src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886076617&to=1670907676617&panelId=7"
      width="450"
      height="200"
      frameborder="0"
    ></iframe>

    <iframe
      src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886088380&to=1670907688380&panelId=2"
      width="450"
      height="200"
      frameborder="0"
    ></iframe>

    <iframe
      src="http://192.168.0.79:3000/d-solo/TSI-DScVz/test?orgId=1&from=1670886102224&to=1670907702224&panelId=9"
      width="450"
      height="200"
      frameborder="0"
    ></iframe>
    <!-- </b-container> -->
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

<style lang="scss" scoped></style>
