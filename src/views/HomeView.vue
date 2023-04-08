<template>
  <main>
    <h1>In Debt? <span class="block md:inline">Need Help ?</span></h1>
    <p class="text-3xl bottom-line pb-5">We're here to help anyone worried about money or debt to access free, confidential debt advice.</p>
  </main>
  <div class="text-3xl py-5 bottom-line">
    <p class="">Book a time to meet with our volunteer money mentors:
      <ul class="mt-10">
        <li class="pb-2">
          <img 
            alt="Call us"
            src="@/assets/phone.svg"  
            class="inline-block w-7 mr-2"
          />
          <a href="tel:01329 284837" class="no-underline" title="Call Us">01329 284837</a> 
        </li>
        <li class="pb-2">
          <img 
            alt="Email us"
            src="@/assets/envelope.svg"  
            class="inline-block w-7 mr-2"
          />
          <a href="mailto:cmafareham@gmail.com" class="no-underline" title="Email us">cmafareham@gmail.com</a>
        </li>
      </ul>
    </p>
  </div>
  <div class="py-14 border-b flex justify-center">
    <RouterLink class="text-3xl block no-underline" to="/how-we-can-help">
      How we can help you 
      <img 
        alt="how we can help you"
        src="@/assets/arrow.svg"  
        class="inline"
      />
    </RouterLink>
  </div>
</template>
