<template>
  <div class="flex flex-col items-center justify-center">
    <h1
      v-if="!is108Japa"
      class="text-lg md:text-3xl italic font-bold text-red-500 mb-6 h-8 text-center"
    >
      <span></span>
    </h1>
    <div
      v-if="is108Japa"
      class="text-lg md:text-3xl italic font-bold text-red-500 mb-6 space-y-2 text-center"
    >
      <h1>
        śrī-kṛṣṇa-caitanya prabhu-nityānanda śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
      </h1>
      <h1>श्री-कृष्ण-चैतन्य प्रभु-नित्यानंद श्री-अद्वैत गदाधर श्रीवासादि-गौरा-भक्त-वृंदा</h1>
    </div>
    <div class="flex items-center justify-evenly gap-4 w-full">
      <div class="flex flex-col gap-2">
        <p class="appearance-none bg-orange-800 text-white px-5 py-3 rounded-lg text-center">
          {{ getDate }}
        </p>
        <p class="appearance-none bg-orange-800 text-white px-5 py-3 rounded-lg text-center">
          Total No of Japa Today - {{ getRoundsTotal }}
        </p>
        <p class="appearance-none bg-orange-800 text-white px-5 py-3 rounded-lg">
          Total No of Japa Till Date - {{ getTotalJapa }}
        </p>
        <button
          class="appearance-none bg-orange-800 text-white px-5 py-3 rounded-lg"
          @click="handleResetJapaCounter"
        >
          Reset Count
        </button>
      </div>
      <div class="flex flex-col items-center justify-center my-auto h-full">
        <div
          v-for="(_, index) in Array(5)"
          :key="index"
          :class="['flex flex-col items-center circle-container']"
        >
          <button
            :class="[
              'appearance-none big-circle',
              { 'cursor-pointer flex items-center justify-center': index === 2 }
            ]"
            @click="handleJapaCounter(index)"
          >
            <p v-if="index === 2" class="text-white text-2xl font-medium">{{ counter }}</p>
          </button>
          <div v-if="index !== 4" class="flex flex-col items-center">
            <div class="w-3 h-3 bg-amber-600 rounded-full"></div>
            <div class="w-5 h-5 bg-amber-900 rounded-full"></div>
            <div class="w-3 h-3 bg-amber-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const counter = ref(0)
const totalJapa = ref(Number(localStorage.getItem('totalCount')) || 0)

const getRoundsTotal = computed(() => {
  return Math.floor(counter.value / 108)
})

const getTotalJapa = computed(() => {
  return Math.floor(Number(totalJapa.value) / 108)
})

const handleJapaCounter = (index: number) => {
  if (index === 2) {
    counter.value += 1
    localStorage.setItem('count', counter.value.toString())
    totalJapa.value += 1
    localStorage.setItem('totalCount', totalJapa.value.toString())
  }
}

const is108Japa = computed(() => {
  return counter.value % 108 === 0
})

const handleResetJapaCounter = () => {
  counter.value = 0
  localStorage.setItem('count', '0')
}

const getDate = computed(() => {
  const date = new Date()
  return `Date - ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
    date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
  }/${date.getFullYear()}`
})

onMounted(() => {
  const japaCount = localStorage.getItem('count')

  if (japaCount) {
    counter.value = Number(japaCount)
  }

  var bigCircles = document.querySelectorAll('.big-circle') as NodeListOf<HTMLElement>

  bigCircles.forEach((bigCircle, index) => {
    if (index !== 2) {
      var width = bigCircle.offsetWidth
      var height = bigCircle.offsetHeight
      var radius = width / 2
      var diameter = radius * 2
      var smallCircleSize = 18
      var smallCircleCountX = Math.ceil(diameter / smallCircleSize)
      var smallCircleCountY = Math.ceil(height / smallCircleSize)

      for (var y = 0; y < smallCircleCountY; y++) {
        for (var x = 0; x < smallCircleCountX; x++) {
          var smallCircle = document.createElement('div')
          smallCircle.className = 'small-circle'
          smallCircle.style.width = smallCircleSize + 'px'
          smallCircle.style.height = smallCircleSize + 'px'
          smallCircle.style.backgroundColor = 'rgb(146 64 14)'
          smallCircle.style.position = 'absolute'
          smallCircle.style.borderRadius = '100%'
          smallCircle.style.left = x * smallCircleSize + 'px'
          smallCircle.style.top = y * smallCircleSize + 'px'
          bigCircle.appendChild(smallCircle)
        }
      }
    }
  })
})
</script>

<style scoped>
.circle-container {
  transition: transform 0.5s;
}

.big-circle {
  @apply w-24 h-24 bg-amber-600 rounded-full relative overflow-hidden;
}

span::before {
  content: '';
  animation: animate infinite 10s;
  padding-left: 10px;
}

@keyframes animate {
  0% {
    content: 'हरे कृष्ण';
  }
  25% {
    content: 'हरे कृष्ण हरे कृष्ण, कृष्ण';
  }
  50% {
    content: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे,';
  }
  70% {
    content: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम';
  }
  95% {
    content: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम हरे राम,';
  }
  100% {
    content: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम हरे राम, राम राम हरे हरे।।';
  }
}

/* .circle-container.active {
  animation: mala 2s infinite;
}

@keyframes mala {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  } 
  to {
    transform: translateY(0px);
  }
} */
</style>
