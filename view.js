class ProductView {
    constructor() {
        this.form = document.getElementById('productForm');
        this.messageDiv = document.getElementById('message');
        this.productsContainer = document.getElementById('productsContainer');
        this.productsCount = document.getElementById('productsCount');
        this.clearAllBtn = document.getElementById('clearAllBtn');
    }

    getFormData() {
        const formData = new FormData(this.form);
        return {
            name: formData.get('productName'),
            price: formData.get('productPrice'),
            category: formData.get('productCategory'),
            description: formData.get('productDescription')
        };
    }

    clearForm() {
        this.form.reset();
    }

    showMessage(message, type = 'success') {
        this.messageDiv.textContent = message;
        this.messageDiv.className = `message ${type}`;
        
        setTimeout(() => {
            this.messageDiv.textContent = '';
            this.messageDiv.className = 'message';
        }, 5000);
    }

    renderProducts(products) {
        this.productsContainer.innerHTML = '';

        if (products.length === 0) {
            this.productsContainer.innerHTML = `
                <div class="empty-message">
                    Nenhum produto cadastrado ainda.
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const productCard = this.createProductCard(product);
            this.productsContainer.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-name">${this.escapeHtml(product.name)}</div>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <div class="product-category">${this.escapeHtml(product.category)}</div>
            ${product.description ? `<div class="product-description">${this.escapeHtml(product.description)}</div>` : ''}
            <div class="product-date">Cadastrado em: ${product.createdAt}</div>
        `;
        
        return card;
    }

    updateProductsCount(count) {
        this.productsCount.textContent = `${count} produto${count !== 1 ? 's' : ''}`;
    }

    bindAddProduct(handler) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            handler(this.getFormData());
        });
    }

    bindClearAllProducts(handler) {
        this.clearAllBtn.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja excluir todos os produtos?')) {
                handler();
            }
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}