<template>
  <div class="bg-gray-100 p-4 rounded-lg">
    <h3 class="text-lg font-bold mb-2">Who to follow</h3>
    <div v-for="user in users" :key="user.id" class="mb-2">
      <p class="text-gray-800">{{ user.name }}</p>
      <p class="text-gray-500">{{ user.handle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "John", handle: "@john" },
        { id: 2, name: "Jane", handle: "@jane" }
      ],
    };
  },
};
</script>
