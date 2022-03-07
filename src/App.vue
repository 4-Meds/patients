<template>
  <div>
    <h1>Patients</h1>
    <PatientsTable/>
  </div>
</template>

<script>
import PatientsTable from './components/PatientsTable.vue'

export default {
  name: 'App',
  components: {
    PatientsTable
  }
}
</script>
