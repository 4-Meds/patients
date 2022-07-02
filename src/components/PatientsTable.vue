<template>
  <b-table striped hover :fields="fields" :items="items">
    <template #cell(familyName)="data">
      {{ data.item.name[0] && data.item.name[0].family }}
    </template>
    <template #cell(givenName)="data">
      {{ data.item.name[0] && data.item.name[0].given.join(" ") }}
    </template>
  </b-table>
</template>

<script>
import FHIR from "fhirclient"

export default {
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "familyName", label: "Family name" },
        { key: "givenName", label: "Given name" }
      ],
      items: []
    }
  },
  async created() {
    // FIXME: Move URL to some config
    const client = FHIR.client("http://localhost:8090/fhir")
    const res = await client.request("Patient", { pageLimit: 10, flat: true })
    this.items = res
  }
}
</script>
