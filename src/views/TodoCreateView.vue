<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Create To-Do</h3>
      <form @submit.prevent="onFormSubmit">

        <div class="input-group m-3 d-flex">
          <label for="direccion" class="mr-3">Direccion:</label>
          <GMapAutocomplete placeholder="Direccion" @place_changed="setPlace" class="form-control mr-3"></GMapAutocomplete>
        </div>

        <div class="input-group m-3 d-flex">
          <label for="descripcion" class="mr-3">Descripción:</label>
          <input type="text" class="form-control mr-3" id="descripcion" v-model="currentplace.alias">
          <button type="submit" class="btn btn-primary">Agregar</button>
        </div>

      </form>

      <div style="display: flex; align-items: center; justify-content: center;"></div>

      <GMapMap :center="center" :zoom="14" map-type-id="terrain" style="width: 800px; height: 400px">
        <GMapMarker :position="center" />
      </GMapMap>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ref } from "vue";

const center = ref({ lat: 20.6838638, lng: -87.065978 })
const currentplace = ref({ lat: 20.6838638, lng: -87.065978, adr: "", alias: "" })

// Buscador
function setPlace(place) {
  currentplace.value.lat = place.geometry.location.lat();
  currentplace.value.lng = place.geometry.location.lng();
  currentplace.value.adr = place.formatted_address;
  center.value = currentplace.value;
  console.log(place);
}

const onFormSubmit = () => {
  try {
    addDoc(collection(db, "direcciones"), currentplace.value);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  reset();
};

const reset = () => {
  currentplace.value.alias = "";
};

</script>