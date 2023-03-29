<template>
  <div class="package-table-skeleton">
    <span v-for="order in 10" :key="order" class="package-table-skeleton__cell"></span>
  </div>
</template>

<style lang="scss">
  .package-table-skeleton {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__cell {
      position: relative;
      height: 30px;
      border-radius: 4px;
      background-color: rgba($primary, 0.1);
      overflow: hidden;
      &::after {
        content: "";
        animation: loading 1.5s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, transparent, rgba($primary, 0.3), transparent);
      }
    }
  }

  @keyframes loading {
    to {
      transform: translateX(100%);
    }
  }
</style>
