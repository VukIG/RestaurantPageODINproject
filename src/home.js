/*
<main>
            <div class="mainHeading">
                <h1>Shoes and sneakers</h1>
            </div>
            <div class="slobodailismrt">    
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
                <article>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png" alt="">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>
                    <button>Add to cart</button>
                </article>
            </div>
            
            
        </main>
*/


function homeModule() {
    let main=document.createElement('main');
    let slobodailismrt=document.createElement('div');
    let naslov=document.createElement('h1');
    let mainHeading=document.createElement('div');
    slobodailismrt.classList.add('slobodailismrt');
    mainHeading.classList.add('mainHeading');
    mainHeading.appendChild(naslov);
    
    
    naslov.innerHTML='Shoes and sneakers';
    for (let i = 0; i < 6; i++) {
        slobodailismrt.appendChild(createArticle());     
    }
    main.appendChild(mainHeading);
    main.appendChild(slobodailismrt);
    
    return main;
}

function createArticle() {
    let article=document.createElement('article');
    let image=document.createElement('img');
    let heading=document.createElement('h1');
    let paragraph=document.createElement('p');
    let btn=document.createElement('button');
    heading.innerHTML='Lorem ipsum';
    paragraph.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!';
    btn.innerHTML='Add to cart';
    image.src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78e78695-74ab-4162-b052-67f004aad13b/air-max-270-g-golf-shoe-GVHWZK.png';
    article.appendChild(image);
    article.appendChild(heading);
    article.appendChild(paragraph);
    article.appendChild(btn);
    return article;
}


export default homeModule;