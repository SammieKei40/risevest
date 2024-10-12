<template>

    <section class="asset-section">
        <div class="asset-container w-contain">
            <h2 class="asset-title">Asset Classes</h2>
            <p class="asset-subtitle">It’s your money, choose where you invest it</p>
            <div class="asset-grid">
                <Animated :delay="0.6">
                    <AssetCard title="Stocks"
                        description="We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks."
                        image="/stocks.png" backgroundClass="#FFF4F0" linkText="Learn how Stocks work" />
                </Animated>
                <Animated :delay="0.6">
                    <AssetCard title="Real Estate"
                        description="Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US."
                        image="/estate.png" backgroundClass="#F6F2FF" linkText="Learn how Real Estate work" />
                </Animated>
                <Animated :delay="0.6">
                    <AssetCard title="Fixed Income"
                        description="A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns."
                        image="/income.png" backgroundClass="#ECFEFE" linkText="Learn how Fixed Income work" />
                    </Animated>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
import Animated from '../animated.vue'
import AssetCard from './../UI/AssetsCard.vue';
</script>

<style scoped>
/* Section Styling */
.asset-section {
    background-color: #ffffff;
    padding: 2rem 1rem;
}


@media (min-width: 768px) {
    .asset-section {
        padding: 2.5rem 2rem;
    }
}

@media (min-width: 1024px) {
    .asset-section {
        padding: 5rem 0;
    }
}

/* Container Styling */
.asset-container {
    text-align: center;
}

@media (min-width: 768px) {
    .asset-container {
        padding: 0 2rem;
    }
}

/* Title Styling */
.asset-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
    .asset-title {
        font-size: 2.25rem;
    }
}

/* Subtitle Styling */
.asset-subtitle {
    font-size: 0.875rem;
    color: #000000;
    margin-bottom: 3rem;
}

@media (min-width: 768px) {
    .asset-subtitle {
        font-size: 1rem;
    }
}

/* Grid Layout */
.asset-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .asset-grid {
        grid-template-columns: repeat(1, 1fr);

    }
}

@media (min-width: 1024px) {
    .asset-grid {
        grid-template-columns: repeat(3, 1fr);

    }
}

/* Background Class Colors */
.bg-orange {
    background-color: #FFF4F0;
}

.bg-purple {
    background-color: #F6F2FF;
}

.bg-blue {
    background-color: #ECFEFE;
}
</style>
