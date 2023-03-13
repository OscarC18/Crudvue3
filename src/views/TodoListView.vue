<template>
  <div>
    <h1>Saved Places</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Dirección</th>
          <th>Alias</th>
          <th>Latitud</th>
          <th>Longitud</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todoData" :key="index">
          <td>{{ item.adr }}</td>
          <td>{{ item.alias }}</td>
          <td>{{ item.lat }}</td>
          <td>{{ item.lng }}</td>
          <td>
            <button class="btn btn-primary" @click="editItem(item)">Editar</button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteItem(item)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.table td {
  color: white;
}
</style>
<script lang="ts" setup>
import { db } from "../firebase";
import { ref, onMounted } from "vue";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import router from "../router";


onMounted(() => {
  getData();
});

let todoData = ref([]);

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "direcciones"));
  todoData.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    adr: doc.data().adr,
    alias: doc.data().alias,
    lat: doc.data().lat,
    lng: doc.data().lng,
  }));
};

const editItem = (item) => {
  router.push({ name: "edit", params: { id: item.id } });
};


const deleteItem = (item) => {
  if (confirm("¿Estás seguro de que deseas eliminar este item?")) {
    deleteDoc(doc(db, "direcciones", item.id)).then(() => {
      getData();
    });
  }
};
</script>