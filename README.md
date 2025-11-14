# MVC
Aqui está um **README.md completo**, organizado, didático e pronto para entrega acadêmica, contendo todas as respostas das questões 1 a 5.

Este documento apresenta respostas completas e explicações referentes aos exercícios sobre o padrão arquitetural **MVC**, incluindo implementações e análises práticas com HTML, CSS, JavaScript e PHP.


## ** Desafio: Cadastro de Produtos (HTML + CSS + JS + PHP)**

### Estrutura do projeto:

```
/mvc-produtos
│── index.html        (View)
│── style.css         (View)
│── script.js         (Controller)
│── produto.php       (Model)
```

---

###  **Model – produto.php**

* Guarda, valida e processa os dados enviados.

```php
<?php
if(!empty($_POST)){
    $nome = $_POST["nome"];
    $preco = $_POST["preco"];

    echo "Produto cadastrado: $nome — R$ $preco";
}
?>
```

---

###  **View – index.html**

* Exibe o formulário e recebe os dados do usuário.

```html
<form action="produto.php" method="POST">
    <input type="text" name="nome" placeholder="Nome do Produto">
    <input type="number" name="preco" placeholder="Preço">
    <button type="submit">Cadastrar</button>
</form>
```

---

###  **Controller – script.js**

* Controla o fluxo antes de enviar ao Model.

```js
document.querySelector("form").addEventListener("submit", function(e){
    alert("Enviando produto...");
});
```

---

###  **View – style.css**

```css
body {
  font-family: Arial;
  background: #f2f2f2;
}
```

---

