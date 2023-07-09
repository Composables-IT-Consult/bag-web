<template>
  <el-row :gutter="10">
    <el-col
      v-for="(product, index) in products"
      :key="index"
      :xs="12"
      :sm="12"
      :md="6"
      :lg="6"
      :xl="6"
      class="mb-10"
    >
      <div
        class="products_div d-flex-col-center"
        @click="showProductDeatils(product.name, product.id)"
      >
        <img :src="product.media.source" width="100%" />
        <div class="mt-10 px-0">
          <p class="product_name">{{ product.name }}</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-10">
              ¢{{ product.price.formatted }}
            </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ProductsListNew',
  props: {
    products: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
