class ProductController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.bindAddProduct(this.handleAddProduct.bind(this));
        this.view.bindClearAllProducts(this.handleClearAllProducts.bind(this));
    }

    init() {
        this.displayProducts();
        this.updateProductsCount();
    }

    handleAddProduct(productData) {
        const result = this.model.addProduct(productData);
        
        if (result.success) {
            this.view.showMessage('Produto cadastrado com sucesso!', 'success');
            this.view.clearForm();
            this.displayProducts();
            this.updateProductsCount();
        } else {
            this.view.showMessage(result.error, 'error');
        }
    }

    handleClearAllProducts() {
        const result = this.model.clearAllProducts();
        
        if (result.success && result.hadProducts) {
            this.view.showMessage('Todos os produtos foram excluídos!', 'success');
            this.displayProducts();
            this.updateProductsCount();
        }
    }

    displayProducts() {
        const products = this.model.getAllProducts();
        this.view.renderProducts(products);
    }

    updateProductsCount() {
        const count = this.model.getProductCount();
        this.view.updateProductsCount(count);
    }

    getProductsByCategory(category) {
        return this.model.getProductsByCategory(category);
    }
}