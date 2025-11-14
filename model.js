class ProductModel {
    constructor() {
        this.products = [];
        this.loadFromLocalStorage();
    }

    addProduct(productData) {
        const product = {
            id: Date.now() + Math.random(),
            name: productData.name.trim(),
            price: parseFloat(productData.price),
            category: productData.category,
            description: productData.description.trim(),
            createdAt: new Date().toLocaleString('pt-BR')
        };

        if (this.validateProduct(product)) {
            this.products.push(product);
            this.saveToLocalStorage();
            return { success: true, product };
        }
        
        return { success: false, error: 'Dados do produto inválidos' };
    }

    clearAllProducts() {
        const hadProducts = this.products.length > 0;
        this.products = [];
        this.saveToLocalStorage();
        return { success: true, hadProducts };
    }

    validateProduct(product) {
        if (!product.name || product.name.length < 2) {
            return false;
        }
        
        if (!product.price || product.price <= 0) {
            return false;
        }
        
        if (!product.category) {
            return false;
        }
        
        return true;
    }

    getAllProducts() {
        return this.products.slice().reverse();
    }

    getProductsByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    getProductCount() {
        return this.products.length;
    }

    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }

    saveToLocalStorage() {
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('products');
        if (saved) {
            this.products = JSON.parse(saved);
        }
    }
}