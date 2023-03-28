<template>
  <main>
    <div>
      <h2>Enter your ID code:</h2>
      <input v-model="idCode">
      <h2>Enter desired loan amount:</h2>
      <input v-model="amount" type="number" min="2000" max="10000">
      <h2>Enter desired loan period:</h2>
      <input v-model="period" type="number" min="12" max="60">
    </div>
    <div>
      <button v-on:click="sendRequest">Request Loan Offer</button>
    </div>
    <div class="green">
      <h2>Approved amount: </h2>
      <h2 v-html="approvedAmount"></h2>
      <h2>Approved loan period: </h2>
      <h2 v-html="approvedPeriod"></h2>
    </div>
  </main>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name: "LoanView",
  data() {
    return {
      idCode: "",
      amount: 2000,
      period: 12,
      approvedAmount: 0,
      approvedPeriod: 0
    }
  },
  methods: {
    sendRequest: function () {
      const requestData = {
        personalCode: this.idCode,
        loanAmount: this.amount,
        loanPeriod: this.period,
      }
      axios.post("/api/loan", requestData)
          .then(r => {
            console.log(r.data)
            this.approvedAmount = r.data.approvedLoanAmount
            this.approvedPeriod = r.data.approvedLoanPeriod
          })
    }
  }
})
</script>
