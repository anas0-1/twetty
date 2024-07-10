<template>
    <div class="relative text-gray-300 w-80 p-5 pb-0 mr-16">
      <!-- Search input -->
      <button type="submit" class="absolute ml-4 mt-3 mr-4">
        <svg class="h-4 w-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
      </button>
      <input type="search" name="search" placeholder="Search Twitter"
             class="bg-blue-800 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none shadow-md border-0">
  
      <!-- Trending section -->
      <div class="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
        <div class="flex">
          <div class="flex-1 m-2">
            <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">Germany trends</h2>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a href="#" class="text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg class="m-2 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr class="border-gray-600">
        
        <!-- Additional trending items can be added here -->
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Component logic here
  };
  </script>
  
  <style scoped>
  /* Scoped styles for the right sidebar component */
  </style>
  