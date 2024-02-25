import{r as p,c as M,a as b,o as a,b as t,d as e,t as f,e as n,f as T,F as h,g as k,w as r}from"./index-IJX6S6Tw.js";const A=e("section",{"data-aos":"fade-right",class:"projetos-search"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-12 d-flex flex-column mb-5"},[e("h2",null,"Projetos"),e("p",null,"Aqui estão meus principais projetos.")])])])],-1),E={class:"projetos"},N={class:"container"},z={class:"row"},I={class:"col-xl-10 col-md-11 col-sm-10 col-11 mt-0 mb-4"},O={class:"type"},B={class:"col-xl-2 col-md-1 col-sm-2 col-1 d-flex justify-content-end mb-4"},F={key:0,class:"dropdown-content"},V={key:0,class:"container"},D={class:"row"},$={key:1,class:"container"},G={class:"row"},K={class:"background"},R=["href"],W=["src","alt"],q={class:"d-flex"},U=["src","alt"],H={class:"m-0"},X={__name:"ProjetosView",setup(J){const l=p(!1),m=p("pi pi-angle-down"),x=p(""),u=p("All"),y=()=>{window.innerWidth<=991&&(l.value=!l.value,m.value=l.value?"pi pi-angle-down rotated":"pi pi-angle-down back-rotated")},P=()=>{window.innerWidth>991&&(l.value=!0,m.value="pi pi-angle-down rotated")},C=()=>{window.innerWidth>991&&(l.value=!1,m.value="pi pi-angle-down back-rotated")},L=p([{photo:"guadalupe-img.webp",name:"Restaurante Guadalupe",type:"Landing Pages",link:"https://guadalupecocina.com.br",icons:"html.png, css.png, javaScript.png, bootstrap.png, wordPress.png",description:"Faça sua reserva agora e venha conhecer o restaurante mexicano mais tradicional da cidade de Santos."},{photo:"10km-img.webp",name:"10KM TribunaFM",type:"Landing Pages",link:"https://10kmtribunafm.com.br",icons:"html.png, css.png, javaScript.png, bootstrap.png, wordPress.png",description:"No dia 19 de maio de 2024, a cidade de Santos se tornará palco da 38ª edição da prova de pedestrianismo 10 KM TRIBUNA FM."},{photo:"leadmkt-img.webp",name:"Lead MKT",type:"Landing Pages",link:"https://www.leadmktlocal.com.br",icons:"html.png, css.png, javaScript.png, bootstrap.png, wordPress.png",description:"ESPECIALISTAS EM COLOCAR SEU NEGÓCIO NO TOPO!, Somos a Lead Local, especialistas em Google Meu Negócio, atuando há mais de 5 anos no crescimento da presença digital de mais de 300 empresas de todo o país. Através de nossas técnicas avançadas de SEO, geramos resultados reais na sua ficha no Google."},{photo:"imperium-img.webp",name:"Impérium Móveis",type:"Sites",link:"https://sejaimperium.com.br",icons:"html.png, css.png, javaScript.png, bootstrap.png, wordPress.png",description:"A Impérium Móveis é o resultado do sonho compartilhado pelos irmãos Mohamad e Samir em abril de 2017. Superando adversidades para conquistar vitórias notáveis, Na Impérium Móveis, a maestria está em toda operação, do atendimento à entrega. Oferecemos desde decoração até móveis planejados, do closet à cozinha."},{photo:"facilita-img.webp",name:"Facilità Eventos",type:"Sites",link:"https://facilitaeventos.com.br",icons:"html.png, css.png, javaScript.png, bootstrap.png, wordPress.png",description:"Empresa especializada em coffee breaks e eventos corporativos na Baixada Santista desde 2010, com foco em trazer profissionalismo ao segmento de catering. Prioriza uma experiência gastronômica excepcional, utilizando ingredientes frescos e selecionados, preparados por talentosas chefs, para garantir uma explosão de sabor e prazer em cada mordida."}]),w=c=>{u.value=c,l.value=!1,m.value="pi pi-angle-down back-rotated"},S=M(()=>{const c=x.value.toLowerCase().trim();return L.value.filter(d=>{const i=d.name.toLowerCase().includes(c),g=u.value==="All"||d.type===u.value;return i&&g})}),_=p(!0);setTimeout(()=>{_.value=!1},1700);const j=c=>c?c.split(",").map(d=>d.trim().toLowerCase()):[];return(c,s)=>{const d=b("PrimeVueButton"),i=b("Skeleton"),g=b("Card");return a(),t(h,null,[A,e("section",E,[e("div",N,[e("div",z,[e("div",I,[e("h2",O,f(u.value),1)]),e("div",B,[e("div",{class:"dropdown-container",onMouseover:P,onMouseleave:C},[n(d,{label:"Filtrar",class:"filter",icon:m.value,iconPos:"right",onClick:y},null,8,["icon"]),l.value?(a(),t("div",F,[e("ul",null,[e("li",{onClick:s[0]||(s[0]=o=>w("All"))},"All"),e("li",{onClick:s[1]||(s[1]=o=>w("Sites"))},"Sites"),e("li",{onClick:s[2]||(s[2]=o=>w("Landing Pages"))},"LP's")])])):T("",!0)],32)]),_.value?(a(),t("div",V,[e("div",D,[(a(!0),t(h,null,k(S.value,o=>(a(),t("div",{key:o.name,class:"col-xl-6 col-lg-6 col-12 mb-5"},[n(g,{class:"mb-3 card"},{header:r(()=>[n(i,{class:"background",height:"320px"})]),title:r(()=>[n(i,{width:"210px"})]),subtitle:r(()=>[n(i,{width:"120px"})]),content:r(()=>[n(i,{width:"100%",class:"mb-3"}),n(i,{width:"90%",class:"mb-3"}),n(i,{width:"75%",class:"mb-3"}),n(i,{width:"170px",class:"mb-3"})]),_:1})]))),128))])])):(a(),t("div",$,[e("div",G,[(a(!0),t(h,null,k(S.value,o=>(a(),t("div",{key:o.name,class:"col-xl-6 col-lg-6 col-12 mb-5","data-aos":"zoom-in"},[n(g,{class:"mb-3 card"},{header:r(()=>[e("div",K,[e("a",{href:o.link,target:"_blank"},[e("img",{src:o.photo,alt:o.name,onLoad:s[3]||(s[3]=v=>_.value=!1),loading:"lazy"},null,40,W)],8,R)])]),title:r(()=>[e("h3",null,f(o.name),1)]),subtitle:r(()=>[e("div",q,[(a(!0),t(h,null,k(j(o.icons),v=>(a(),t("img",{class:"icons",key:v,src:`${v}`,alt:v},null,8,U))),128))])]),content:r(()=>[e("p",H,f(o.description),1)]),_:2},1024)]))),128))])]))])])])],64)}}};export{X as default};