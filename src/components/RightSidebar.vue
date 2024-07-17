<template>
  <!-- Right menu -->
  <div class="relative text-gray-300 w-80 p-5 pb-0 mr-16">
    <button type="submit" class="absolute ml-4 mt-3 mr-4">
      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
      </svg>
    </button>
    <input type="search" name="search" placeholder="Search Twitter" class="bg-gray-800 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow  border-0">
 

  <!-- Trending section -->
  <div class="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg mt-1">
    <div class="flex">
      <div class="flex-1 m-2">
        <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">Germany trends</h2>
      </div>
      <div class="flex-1 px-4 py-2 m-2">
        <a href="" class=" text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right">
          <svg class="m-2 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </a>
      </div>
    </div>
    <hr class="border-gray-600">
    
    <!-- Trending tweets -->
    <div v-for="(trend, index) in trends" :key="index" class="flex">
      <div class="flex-1">
        <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">{{ index + 1 }} . {{ trend.category }}</p>
        <h2 class="px-4 ml-2 w-48 font-bold text-white">{{ trend.title }}</h2>
        <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">{{ trend.tweets }} Tweets</p>
      </div>
      <div class="flex-1 px-4 py-2 m-2">
        <a href="" class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
          <svg class="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </div>
    <hr class="border-gray-600">
    <div class="flex">
      <div class="flex-1 p-4">
        <h2 class="px-4 ml-2 mt-3 w-48 text-sm text-blue-400">Show more</h2>
      </div>
    </div>
  </div>

  <!-- follow section -->
  <div class="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg mt-1">
    <div class="flex">
      <div class="flex-1 m-2">
        <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">Who to follow</h2>
      </div>
    </div>
    <hr class="border-gray-600">

    <!-- Follow suggestions -->
    <follow-suggestion v-for="(user, index) in usersToFollow" :key="index" :user="user"></follow-suggestion>
    
    <div class="flex">
      <div class="flex-1 p-4">
        <h2 class="px-4 ml-2 mt-3 w-48 text-sm text-blue-400">Show more</h2>
      </div>
    </div>
  </div>

  <!-- Footer links -->
  <div class="max-w-sm mt-1">
    <div class="flex flex-wrap">
      <div class="flex-1">
        <ul class="inline-flex">
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">Terms</a>
          </li>
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">Privacy</a>
          </li>
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">Policy</a>
          </li>
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">Cookies</a>
          </li>
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">Ads info</a>
          </li>
          <li class="m-2">
            <a class="text-sm leading-5 text-gray-400 hover:underline" href="#">More...</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex">
      <div class="flex-1">
        <h2 class="px-4 ml-2 mt-3 w-48 text-sm text-gray-400">© 2023 Tweetty </h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FollowSuggestion from './FollowSuggestion.vue';

export default {
  components: {
    FollowSuggestion
  },
  data() {
    return {
      trends: [
        { category: 'Trending', title: '#Microsoft363', tweets: '5,466' },
        { category: 'Business & finance', title: '#StockMarket', tweets: '8,461' },
        { category: 'Music', title: '#TopHits2023', tweets: '3,241' },
      ],
      usersToFollow: [
        { avatar: 'https://via.placeholder.com/50', name: 'User 1', handle: '@1User' },
        { avatar: 'https://via.placeholder.com/50', name: 'User 2', handle: '@2User' },
        { avatar: 'https://via.placeholder.com/50', name: 'User 3', handle: '@3User' },
      ]
    };
  }
};
</script>

