<template>
  <div>
    <h1>Editar Lugar</h1>
    <form>
      <div class="form-group">
        <label for="adr">Dirección</label>
        <input type="text" class="form-control" id="adr" v-model="address">
      </div>
      <div class="form-group">
        <label for="alias">Alias</label>
        <input type="text" class="form-control" id="alias" v-model="alias">
      </div>
      <div class="form-group">
        <label for="lat">Latitud</label>
        <input type="number" class="form-control" id="lat" v-model="lat">
      </div>
      <div class="form-group">
        <label for="lng">Longitud</label>
        <input type="number" class="form-control" id="lng" v-model="lng">
      </div>
      <button class="btn btn-primary" @click.prevent="updateItem">Cambiar</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { db } from "../firebase";
import { ref } from "vue";
import { updateDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

const id = router.currentRoute.value.params.id;

let address = ref("");
let alias = ref("");
let lat = ref(0);
let lng = ref(0);

const getData = async () => {
  const docRef = doc(db, "direcciones", id);
  const docData = await docRef.get();
  if (docData.exists()) {
    address.value = docData.data().adr;
    alias.value = docData.data().alias;
    lat.value = docData.data().lat;
    lng.value = docData.data().lng;
  } else {
    console.log("El documento no existe");
  }
};

getData();

const updateItem = async () => {
  const docRef = doc(db, "direcciones", id);
  await updateDoc(docRef, {
    adr: address.value,
    alias: alias.value,
    lat: lat.value,
    lng: lng.value,
  });
  router.push("/");
};

</script>
