<template>
    <div>
      <!-- Header -->
      <div class="flex">
        <div class="flex-1 m-2">
          <h2 class="px-4 py-2 text-xl font-semibold text-gray-200">For you</h2>
        </div>
        <div class="flex-1 m-2">
          <h2 class="px-4 py-2 text-xl font-semibold text-gray-200">Following</h2>
        </div>
      </div>
  
      <!-- Divider -->
      <hr class="border-gray-700">
  
      <!-- Tweet Input -->
      <div class="flex">
        <div class="m-2 w-10 py-1">
          <img class="inline-block h-10 w-10 rounded-full" src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div class="flex-1 px-2 pt-2 mt-2">
          <textarea class="bg-transparent text-gray-300 font-medium text-lg w-full border border-gray-600 rounded-lg p-2" rows="2" cols="50" placeholder="What's happening?"></textarea>
        </div>                    
      </div>
  
      <!-- Icons below tweet input -->
      <div class="flex">
        <div class="w-10"></div>
  
        <div class="w-64 px-2">
          <div class="flex items-center">
            <!-- Icon buttons -->
            <div class="flex-1 text-center px-1 py-1 m-2">
              <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-700 hover:text-blue-300">
                <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
  
            <div class="flex-1 text-center py-2 m-2">
              <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-700 hover:text-blue-300">
                <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div>
  
            <div class="flex-1 text-center py-2 m-2">
              <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-700 hover:text-blue-300">
                <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
  
            <div class="flex-1 text-center py-2 m-2">
              <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-700 hover:text-blue-300">
                <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Tweet Button -->
        <div class="flex-1">
          <button class="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
            Tweet
          </button>
        </div>
      </div>
  
      <!-- Divider -->
      <hr class="border-gray-800 border-2">
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'MiddleSection',
  };
  </script>
  
  <style scoped>
  /* Dark mode styles */
  .text-gray-200 {
    color: #cbd5e0; /* Adjusted gray for dark mode */
  }
  
  .bg-gray-700 {
    background-color: #4a5568; /* Adjusted dark background color */
  }
  
  .text-blue-400 {
    color: #63b3ed; /* Adjusted blue color for links */
  }
  
  .hover\:bg-gray-700:hover {
    background-color: #2d3748; /* Dark hover background color */
  }
  
  .hover\:text-blue-300:hover {
    color: #90cdf4; /* Lighter blue on hover */
  }
  
  .border-gray-700 {
    border-color: #4a5568; /* Dark border color */
  }
  
  /* Adjust other specific styles as needed */
  </style>
  