import{u as c}from"./Cx6wMil0.js";import{d as i,_ as u,c as s,a as e,t as n,F as d,r as p,o}from"./HhEM1d3z.js";const{posts:_}=c(),l=i({props:["post"],computed:{currentId(){return Number(this.$route.params.id)},currentPost(){return _.value.find(t=>t.id===this.currentId)},currentTitle(){var t;return String((t=this.currentPost)==null?void 0:t.title)},currentImage(){var t;return String((t=this.currentPost)==null?void 0:t.image)}}}),m={class:"wrapper card"},h={class:"title"},f=["src"],g={class:"text"};function v(t,I,$,P,S,k){return o(),s("div",m,[e("div",h,n(t.currentTitle),1),e("img",{height:"200px",src:t.currentImage,alt:""},null,8,f),e("div",g,[(o(),s(d,null,p(5,a=>{var r;return e("p",{key:a},n((r=t.currentPost)==null?void 0:r.content),1)}),64))])])}const y=u(l,[["render",v],["__scopeId","data-v-472491e5"]]);export{y as default};