<template>
  <div class="about">
    <h1>Who we are</h1>
    <p class="text-3xl">
      CMA was started by churches together in Fareham<br />
      We're a group of Christians who believe, even in the most difficult of
      times, there is hope for the future. We want to share that hope with
      anyone struggling with debt in the Fareham and Gosport area.
    </p>
    <h2>Acts 435 Partner - Emergency Fund for Urgent Needs</h2>
    <p class="text-3xl">
      We are also <a href="https://www.acts435.org.uk/partners/1512/">partners with Acts 435</a>, a crowdfunding charity that provides financial help (up to £200) for urgent needs.<br/>
      This enables us to support our client as well as other people in our community who need our support.
      <br/>
      <a class="flex justify-center" href="https://www.acts435.org.uk/partners/1512/">
        <img 
          alt="Support us"
          src="@/assets/acts_435.svg"  
          class="w-44 m-10"
        /> 
      </a>    
    </p>
    <div class="py-14 border-b flex justify-center">
      <RouterLink class="text-3xl block no-underline" to="/support-us">
        Support us 
        <img 
          alt="Support us"
          src="@/assets/arrow.svg"  
        class="inline"
        />
    </RouterLink>
  </div>    
  </div>
</template>
