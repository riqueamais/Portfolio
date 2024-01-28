<template>
    <footer class="transition_on">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-around mt-4">
                    <a target="_blank" href="https://github.com/riqueamais">
                        <i class="pi pi-github"></i>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/henrique-quintino">
                        <i class="pi pi-linkedin"></i>
                    </a>

                    <a
                        href="mailto:henrique.quintino99@gmail.com?subject=Oi Henrique quero transformar minhas ideias em realidade">
                        <i class="pi pi-envelope"></i>
                    </a>

                    <a href="https://web.whatsapp.com/send?phone=5513991580651">
                        <i class="pi pi-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>

footer {
    padding-top: 55px;
    background-color: var(--cor-preto);
}

footer .container {
    border: 1px solid #2a2929;
    border-radius: 6px;
    height: 80px;
}

footer a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: 32px;
    height: 32px;
    transition: all 0.5s ease-in-out;
}

footer i {
    font-size: 2rem;
    color: var(--cor-branco);
}

footer a:hover i {
    transform: scale(1.1);
}
</style>