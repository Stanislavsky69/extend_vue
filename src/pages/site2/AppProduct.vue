<script>
import Product from "@/pages/default/AppProduct";
export default {
  name: 'AppProduct',
  extends: Product,
  beforeMount() {
    this.$store.dispatch('Product/productProperty/updateProductProp',{
      h1: 'Аккумуляторная коса-кусторез DEWALT FLEXVOLT DCM571X1, 18/54 В',
      price: 38990,
      image: 'https://shop.dewalt.ru/media/catalog/product/cache/27/thumbnail/600x600/a4e40ebdc3e371adff845072e1c73f37/d/c/dcm571x1-qw-1.jpg',
      description: 'Профессиональная (может работать в режиме повышенной нагрузки и без остановки продолжительное время) аккумуляторная коса имеет два режущих органа: катушку с леской и стальной нож и предназначена для расчистки зарослей и кошения травы любого вида. По мощности соответствует бензокосе объемом двигателя 38 см. куб. Диаметр применяемой лески - 2-2,5 мм. Посадочный диаметр ножа: 2,54 см. Посадочные размеры катушки с леской: M10x1,25 левая резьба.',
      sku: 'DCM571X1-QW'
    })
  }
}
</script>
