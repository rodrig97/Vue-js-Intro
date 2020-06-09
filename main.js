var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/greenSocks.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantId: 2234,
                variantColor: 'Green',
                variantImage: './img/greenSocks.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'Blue',
                variantImage: './img/blueSocks.jpg'
            }
        ],
        cart: 0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})