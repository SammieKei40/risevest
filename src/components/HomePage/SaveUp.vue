<template>
    <section class="save-section">
        <div class="save-content ">
            <div class="phone-mockup">
                <div class="card">
                    <img src="/phone.png" alt="Coin stack" class="card-image" />
                    <div class="card-content">
                        <h4 class="card-title">Build Wealth</h4>
                        <p class="card-description">
                            Invest for long-term goals like retirement with this plan. It’s your financial freedom
                            partner.
                        </p>
                        <a href="#" class="card-link">Start investing &rarr;</a>
                    </div>
                </div>
            </div>
            <div class="text-content">
                <p class="sub-title">The Rise App</p>
                <h2 class="main-title">Save for your <span class="highlight">future</span></h2>
                <p class="description">
                    With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your
                    children's future and more.
                </p>
                <a href="#" class="cta-button">Start Saving</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed for this template
</script>

<style scoped>
/* Main Section */
.save-section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
}

.save-content {
    display: flex;
    gap: 10rem;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 768px) {
    .save-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}

/* Phone Mockup */
.phone-mockup {
    background: #e6e6e6;
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    /* Constrains phone size */
    position: relative;
}

.card {
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.card-image {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-description {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    color: #555555;
}

.card-link {
    color: #07969E;
    text-decoration: none;
    font-weight: 500;
}

.card-link:hover {
    text-decoration: underline;
}

/* Text Content */
.text-content {
    max-width: 500px;
}

.sub-title {
    color: #888888;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

.main-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.highlight {
    color: #6a5acd;
    /* Customize this based on your brand */
}

.description {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    color: #555555;
}

.cta-button {
    background: #07969E;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: inline-block;
}

.cta-button:hover {
    background: #066a7d;
}
</style>
