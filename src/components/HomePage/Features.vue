<template>
  <section class="feature-section">
    <div class="w-contain">
      <div class="feature-grid">
        <FeatureCard
          title="Invest your money in dollars"
          description="By holding your investments in a stable currency, your money grows more over time and retains its value better."
          image="/file1.png"
          imagePosition="left"
        />
        <FeatureCard
          title="Choose what's best for you"
          description="Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place."
          image="/file2.png"
          imagePosition="right"
        />
        <FeatureCard
          title="Set goals and reach them"
          description="You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them."
          image="/file3.png"
          imagePosition="left"
        />
        <FeatureCard
          title="We remember so you don’t have to"
          description="Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule."
          image="/file4.png"
          imagePosition="right"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '../UI/FeatureCard.vue';
</script>

<style scoped>
/* Feature Section */
.feature-section {
  background-color: #ffffff;
  width: 100%;
  padding-top: 1rem;
}



/* Feature Grid */
.feature-grid {
  display: grid;
  /* gap: 1rem; */
}

</style>
