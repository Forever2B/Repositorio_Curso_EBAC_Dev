<script setup>
import { reactive, watch } from 'vue';

// ----------- VARIÁVEIS REATIVAS --------------
const react = reactive({
  numero1: 0,
  numero2: 0,
  resultado: 0,
  operation: 'add',
});
// ---------------------------------------------

const calcularResultado = () => {
  const { numero1, numero2, operation } = react;
  switch (operation) {
    case 'add':
      react.resultado = numero1 + numero2;
      break;
    case 'sub':
      react.resultado = numero1 - numero2;
      break;
    case 'mult':
      react.resultado = numero1 * numero2;
      break;
    case 'div':
      react.resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: Divisão por zero';
      break;
    default:
      react.resultado = 0;
  }
};

watch(
  () => [react.numero1, react.numero2, react.operation],
  () => {
    calcularResultado();
  }
);
</script>

<template>
  <div class="color min-vh-100 m-0 pt-5">
    <div class="container">
      <h1 class="text-center mt-0 mb-5">Calculadora Aritimética</h1>
      <form class="color2 p-4 rounded">
        <div class="row mb-2">
          <div class="col d-flex justify-content-center">
            <input class="text-center fs-5" type="number" v-model.number="react.numero1" placeholder="Número 01" />
          </div>
        </div>
        <div class="row mb-3 mt-3">
          <div class="col d-flex justify-content-center">
            <select class="text-center fs-5" v-model="react.operation"
              @change="console.log(`Changed to: ${react.operation}`)">
              <option value="add">Adição</option>
              <option value="sub">Subtração</option>
              <option value="mult">Multiplicação</option>
              <option value="div">Divisão</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <input class="text-center fs-5" type="number" v-model.number="react.numero2" placeholder="Número 02" />
          </div>
        </div>
        <div class="row">
          <span class="text-center fs-3"><b class="text-white">O Resultado é:</b></span>
          <span class="text-center fs-4 text-decoration-underline">
            <b class="text-info">{{ react.resultado }}</b>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.color {
  background-color: #b2bec3;
}

.color2 {
  background-color: #636e72;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
