<template>
    <footer class="transition_on">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="footer-card">
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

                        <a href="https://wa.me/5513991580651">
                            <i class="pi pi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    padding-bottom: 28px;
    background-color: var(--cor-preto);
}

footer .footer-card {
    border: 1px solid #F8FAFC;
    border-radius: 6px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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