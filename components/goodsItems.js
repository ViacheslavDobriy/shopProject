const goods = {
    data() {
        return {
            products: [
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 52.00,
                    image: "img/goods1.svg"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 50.00,
                    image: "img/catalog_gallery_image2.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 62.00,
                    image: "img/goods3.svg"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 56.00,
                    image: "img/catalog_gallery_image4.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 49.00,
                    image: "img/catalog_gallery_image5.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 90.00,
                    image: "img/catalog_gallery_image6.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 71.00,
                    image: "img/catalog_gallery_image7.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 69.00,
                    image: "img/catalog_gallery_image8.png"
                },
                {
                    brand: "ELLERY X M'O CAPSULE",
                    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    currency: '$',
                    price: 51.00,
                    image: "img/catalog_gallery_image9.png"
                }
            ]
        };
    },
    methods: {
        sortUp() {
            this.products.sort((a,b) => a.price - b.price);
        },
        sortDown() {
            this.products.sort((a,b) => b.price - a.price);
        }
    },

    template: `
        <div class="goods__item" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="goods 1" class="goods__look">
            <div class="goods__label">
                <img src="img/trolley.svg" alt="trolley">
                <p class="text-add">Add to Cart</p>
            </div>
            <div class="goods__description">
                <h3 class="name__good">{{product.brand}}</h3>
                <p class="about__good">{{product.description}}</p>
                <p class="price">{{product.currency}}{{product.price}}</p>
            </div>
        </div>
        <div class="buttons">
            <button @click="sortUp" class="button">Сортировать по возрастанию</button>
            <button @click="sortDown" class="button">Сортировать по убыванию</button>
        </div>
    `
}