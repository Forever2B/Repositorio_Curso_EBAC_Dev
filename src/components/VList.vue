<script setup>
    const props = defineProps(['tarefas', 'tarefasPendentes']);
</script>
<template>
    <ul  v-if="props.tarefasPendentes > 0" class="list-group mt-4">
        <li class="list-group-item" v-for="tarefa in props.tarefas">
            <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada"
                :id="tarefa.titulo" type="checkbox">
            <label :class="{ done: tarefa.finalizada === true }" class="ms-3"
                :for="tarefa.titulo">{{ tarefa.titulo }}</label>
        </li>
    </ul>
    <h1 v-else class="mt-4 text-decoration-underline">Todas As Tarefas foram concluidas, parabéns!!</h1>
</template>
<style>
  .done {
    text-decoration: line-through;
  }
</style>