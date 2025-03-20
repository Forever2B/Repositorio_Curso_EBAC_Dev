<script setup>
  import {reactive} from 'vue';
  import VHeader from './components/VHeader.vue';
  import VForm from './components/VForm.vue';
  import VList from './components/VList.vue';
  // ----------- VARIÁVEIS REATIVAS --------------
  const react = reactive({
  
    filtro: 'Todas',
    tarefaTemp: '',

    tarefas: [
      {
        titulo: 'Estudar ES6',
        finalizada: false,
      },
      {
        titulo: 'Estudar Tailwind',
        finalizada: false,
      },
      {
        titulo: 'ir pra academia',
        finalizada: false,
      }
    ]
  })
  // ---------------------------------------------

  const getTarefasPendentes = () => {return react.tarefas.filter(tarefa => !tarefa.finalizada)}
  const getTarefasFinalizadas = () => {return react.tarefas.filter(tarefa => tarefa.finalizada)}
  const cadastraTarefa = () => {
    const tarefaNova = {
      titulo: react.tarefaTemp,
      finalizada: false,
    }
    react.tarefas.push(tarefaNova);
    react.tarefaTemp = '';
  };

  const getTarefasFiltradas = () => {
    const {filtro} = react;

    switch (filtro){
      case 'Pendentes':
        return getTarefasPendentes();
      case 'Finalizadas':
        return getTarefasFinalizadas();
      default:
        return react.tarefas;
    }};

  console.log(react.tarefas)
  // ---------------------------------------------
</script>

<template>
  <div class="container">

    <VHeader :tarefas-pendentes="getTarefasPendentes().length"/>
    <VForm :trocar-filtro="evento => react.filtro = evento.target.value" :tarefa-temp="react.tarefaTemp" :edita-tarefa-temp="evento => react.tarefaTemp = evento.target.value" :cadastra-tarefa="cadastraTarefa"/>
    <VList :tarefas="getTarefasFiltradas()" :tarefas-pendentes="getTarefasPendentes().length"/>

  </div>
</template>

<style scoped>
</style>