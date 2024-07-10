<template>
    <div class="w-1/5 bg-gray-900 text-white p-4 h-screen sticky top-0">
      <!-- Logo -->
      <svg viewBox="0 0 24 24" class="h-12 w-12 text-white" fill="currentColor">
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
      <!-- Navigation -->
      <nav class="mt-5 px-2">
        <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300">
          <svg class="mr-4 h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
          </svg>
          Home
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
          </svg>
          Explore
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Notifications
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Messages
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          Bookmarks
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
          Lists
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Profile
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
          <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          More
        </a>
        <!-- Tweet Button -->
        <button class="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Tweet
        </button>
      </nav>
      <!-- User Info -->
      <div class="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
        <a href="#" class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-10 w-10 rounded-full" src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div class="ml-3">
              <p class="text-base leading-6 font-medium text-white">
                Zrigui Anas
              </p>
              <p class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @Zrigui_Anas
            
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class= "border border-gray-600 h-auto  border-t-0"></div>
  </template>
  
  <script>
  export default {
    name: 'LeftSidebar',
  };
  </script>
  
  <style scoped>
  </style>
  