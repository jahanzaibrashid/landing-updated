(this.webpackJsonpminty=this.webpackJsonpminty||[]).push([[0],{69:function(e,t,i){},70:function(e,t,i){},76:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(0),o=i.n(n),r=i(10),c=i.n(r),l=(i(69),i(70),i(13)),d=i(58),s=i(107),f=i(109),h=i(110),m=i(111),b=i(119),x=i(112),p=i(121),j=i(113),g=i(114),u=i(53),A=i.n(u),O=i(54),w=i.n(O),M=[{label:"HOME",href:"#"},{label:"REQUEST INVITATION",href:"/#form"}],v=Object(s.a)((function(){return{header:{backgroundColor:"#00000080",padding:"0px 0","@media (max-width: 960px)":{paddingLeft:0,paddingRight:0},"@media (max-width: 600px)":{padding:"10px 0 0"}},logo:{fontWeight:600,color:"#FFFEFE",textAlign:"left",maxWidth:"70%","@media (min-width: 960px)":{margin:"18px 0"}},menuButton:{fontFamily:"Montserrat, sans-serif",fontWeight:700,fontSize:"12px",marginLeft:"25px",letterSpacing:"4px",position:"relative","&:last-of-type":{"&::after":{display:"none"}},"&::after":{content:'""',width:"3px",height:"3px",backgroundColor:"#fff",borderRadius:"50%",position:"absolute",right:"-11px"},"@media (min-width: 960px)":{borderBottom:"3px solid transparent",borderRadius:0,minHeight:"92px","&:first-of-type":{color:"#257ce1",borderColor:"#257ce1"}}},toolbar:{display:"flex",justifyContent:"space-between",paddingLeft:0,paddingRight:0,"@media (min-width: 960px)":{minHeight:"auto"}},drawerContainer:{padding:"20px 30px","& li":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:700,fontSize:"12px",letterSpacing:"4px"}},slefcontac:{"& .MuiContainer-root":{display:"flex",justifyContent:"space-between"}},closeMenuButton:{marginRight:"auto",marginLeft:0}}}));var C=function(){var e=v(),t=e.header,i=e.logo,o=e.menuButton,r=e.toolbar,c=e.drawerContainer,s=e.slefcontac,u=e.closeMenuButton,O=Object(n.useState)({mobileView:!1,drawerOpen:!1}),C=Object(d.a)(O,2),I=C[0],B=C[1],N=I.mobileView,R=I.drawerOpen;Object(n.useEffect)((function(){var e=function(){return window.innerWidth<960?B((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!0})})):B((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var y=function(){return M.map((function(e){var t=e.label,i=e.href;return Object(a.jsx)(x.a,Object(l.a)(Object(l.a)({href:i},{color:"inherit",style:{textDecoration:"none"},key:t}),{},{children:Object(a.jsx)(p.a,{children:t})}))}))},z=Object(a.jsxs)(x.a,{href:"#",children:[" ",Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAABLCAYAAAB3GuxWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwQ0I2NjY2NEY4MjExRUI5NkJERkZGNUNCNkUzN0I2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwQ0I2NjY3NEY4MjExRUI5NkJERkZGNUNCNkUzN0I2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDBDQjY2NjQ0RjgyMTFFQjk2QkRGRkY1Q0I2RTM3QjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDBDQjY2NjU0RjgyMTFFQjk2QkRGRkY1Q0I2RTM3QjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55gj36AAAdJklEQVR42uxdCXhV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",alt:"logo",className:i})," "]}),F=function(){return M.map((function(e){var t=e.label,i=e.href;return Object(a.jsx)(j.a,Object(l.a)(Object(l.a)({href:i},{key:t,color:"inherit",className:o}),{},{children:t}))}))};return Object(a.jsx)("header",{children:Object(a.jsx)(g.a,{className:t,children:Object(a.jsx)(h.a,{maxWidth:"lg",className:s,children:N?function(){var e=function(){return B((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!1})}))};return Object(a.jsx)(f.a,{disableGutters:!0,children:Object(a.jsxs)(h.a,{maxWidth:"lg",children:[Object(a.jsx)("div",{children:z}),Object(a.jsx)(m.a,Object(l.a)(Object(l.a)({},{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return B((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!0})}))}}),{},{children:Object(a.jsx)(A.a,{})})),Object(a.jsxs)(b.a,Object(l.a)(Object(l.a)({},{anchor:"right",open:R,onClose:e}),{},{children:[Object(a.jsx)(m.a,{onClick:e,className:u,children:Object(a.jsx)(w.a,{})}),Object(a.jsx)("div",{className:c,children:y()})]}))]})})}():Object(a.jsxs)(f.a,{className:r,children:[z,Object(a.jsx)("div",{children:F()})]})})})})},I=i(80),B=i(115),N=i(120),R=i.p+"static/media/banner.f20450e6.jpg",y=Object(s.a)({bannermain:{background:"url("+R+") no-repeat bottom",height:"100vh",width:"100%",backgroundSize:"cover"},heading:{fontFamily:"Montserrat, sans-serif",fontWeight:700},themeColor:{color:"#257ce1"},bannerContent:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh",width:"100%","& h1":{color:"#fff",fontSize:"22px",fontWeight:900,letterSpacing:"3px",marginTop:"20px",textTransform:"uppercase",lineHeight:"1.3","@media (max-width: 600px)":{fontSize:"14px"},"& span":{fontSize:"34px","@media (max-width: 600px)":{fontSize:"17px"}}},"& p":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:300,maxWidth:"50%","@media (max-width: 960px)":{maxWidth:"75%"},"@media (max-width: 600px)":{maxWidth:"100%",fontSize:"14px"},"& span":{fontWeight:700}},"& img":{"@media (max-width: 600px)":{maxWidth:"20%"}}},smalldivider:{backgroundColor:"#fff",width:"50px",height:"2.5px",margin:"30px 0 30px","@media (max-width: 600px)":{margin:"30px"}},mousen:{marginTop:"40px"}});function z(){var e=y();return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:e.bannermain,children:Object(a.jsx)(h.a,{maxWidth:"lg",children:Object(a.jsxs)("div",{className:e.bannerContent,children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABOCAYAAADW1bMEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzOTAzMzVBNEY4MjExRUI5RkQ0RjdBRjFENDZBMkU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzOTAzMzVCNEY4MjExRUI5RkQ0RjdBRjFENDZBMkU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTM5MDMzNTg0RjgyMTFFQjlGRDRGN0FGMUQ0NkEyRTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTM5MDMzNTk0RjgyMTFFQjlGRDRGN0FGMUQ0NkEyRTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/qqITAAALt0lEQVR42uxdCXRV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",alt:"envolpe"}),Object(a.jsxs)(I.a,{variant:"h1",align:"center",className:e.heading,children:["Powered creativity ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:e.themeColor,children:"Patronage Recoined."})]}),Object(a.jsx)(B.a,{light:"false",variant:"middle",className:e.smalldivider}),Object(a.jsxs)(I.a,{variant:"body1",variantMapping:"p",align:"center",children:["Minty is for culture shapers, connoisseurs and art owners. ",Object(a.jsx)("span",{fontWeight:700,children:" We fuel the creation and appreciation of art that will define a generation. Art is powerful. "})," We harness technology to empower the people that power it."]}),Object(a.jsx)(N.a,{mdDown:!0,children:Object(a.jsx)(x.a,{href:"#",className:e.mousen,children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAABHCAYAAACanm7cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MDA3QTZGNEY5RjExRUI4ODU1Q0JGQjRCNTJERDA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MDA3QTcwNEY5RjExRUI4ODU1Q0JGQjRCNTJERDA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgwMDdBNkQ0RjlGMTFFQjg4NTVDQkZCNEI1MkREMDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgwMDdBNkU0RjlGMTFFQjg4NTVDQkZCNEI1MkREMDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lVrxlAAAC0klEQVR42uyazUuUQRzHdx+NMKw0yzxpQdkbGhFkEGVR1y5BCLULBp1CT1306MFDf4EeBD0UUZcOXbxE5qHUg0IvuFoiGhSm+LJW0sv69P3VLDz+mGd3n9lnd54n5gefZWee55n57Ow88wzzTNS27UjQozSPaw+BK+AcOA4OgApggd9gFXwAk2AYPAMflWqilvRAGbgDxmy1GAJxUOql3lxPLAFt4LPtT8yCGIj6JXkCjNuFCWrZ2mwO0Sw3Thz0gh0ux5PgOXgJEmARbIjza8AxcB5cAGUuZayAG2BQpU92ZmiBEXAdbM+xu5SDVvDWpbwUuOX1776boS9d9XizOYmKvrjgUn4sV8kWlwIeiBaJ+EA1GJTU8RM0Z5M8DNYlF3f5JMdHjD5JXZ/Ej5BK0l8xLLmouwCCzjoHJHU+dJOMSU5+kutYlgfbwCtJ3Ze4pAXes5No4K4ssGCaOvBNMoZukbwm+SXxIgmm6ZA4NDkln7KDCdG6XivaBy6DCoVraeRYYh49aUk6+IsdbFeo5DRIiusXwUGFMu4xDyrHomnVRTZl2wSPFCZUt8FO8X2veKR6jfssTeU0kmQTOzABvihUwJ/NexTKeAMWWN5ZS0wCnDGmeSI+ytJHSbKOZU5plpxm6VqSLJdMnXTGMkvvtiR9KalZcoOlS6xICMJIGknF+MHS60GUfAxS4vt3kda+zMKDllFOisfsCzATREmKdwJz4xhJI2kkjaSRNJJG0kgaSSNpJI1kBkm+QLRLsxNfQEuR5FeWWalZkq8Qr5HkHMs8olmynqXnSXKSZZ7RLMnX8BMkydeoT4FqTYINYD/LGyHJoci/3SfOm6lFk2SMpZfAa7/fiOWD6xux9DjZL7l5bha5FdtAFcsb+PsZpre0oXjfHZqdA6HYgxGa3Syh2RcUuB1Wod+rFphdf//N/kntO1Gz9clMUbQ9vflIFi3+CDAAVOEVN1Mlae4AAAAASUVORK5CYII=",alt:"mouse"})})})]})})})})}var F=i.p+"static/media/secondbanner.ac32e3dc.png",G=Object(s.a)({middlecontentm:{position:"relative",paddingLeft:"38px",margin:"50px 0",marginLeft:"80px","&::before":{content:'""',backgroundColor:"#257ce1",width:"3.5px",height:"83px",position:"absolute",left:"0"},"@media (max-width:960px)":{marginLeft:"0px",paddingLeft:"0px",textAlign:"center","&::before":{display:"none"}},"& h3":{fontFamily:"Montserrat, sans-serif",fontWeight:900,color:"#257ce1",fontSize:"20px",textTransform:"uppercase",letterSpacing:"3px",position:"relative","@media (max-width: 960px)":{"&::before":{content:'""',backgroundColor:"#257ce1",height:"3.5px",width:"60px",position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:"-12px"}}},"& h6":{fontFamily:"Montserrat, sans-serif",fontWeight:700,color:"#fff",fontSize:"16px",maxWidth:"48%",margin:"20px 0 15px","@media (max-width:960px)":{maxWidth:"100%"},"@media (max-width: 600px)":{maxWidth:"100%",fontSize:"14px"}},"& p":{fontFamily:"Montserrat, sans-serif",fontWeight:400,color:"#fff",fontSize:"16px",maxWidth:"48%","@media (max-width:960px)":{maxWidth:"100%"},"@media (max-width: 600px)":{maxWidth:"100%",fontSize:"14px"}}},transheading:{fontFamily:"Montserrat, sans-serif",fontWeight:900,color:"#257ce12b",fontSize:"32px",textTransform:"uppercase",letterSpacing:"3px",position:"absolute",top:"5px","@media (max-width:960px)":{left:"50%",top:"-16px",transform:"translateX(-50%)",width:"100%"},"@media (max-width:600px)":{fontSize:"23px"}}});function S(e){var t=G();return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)(h.a,{maxWidth:"lg",children:Object(a.jsxs)("div",{className:t.middlecontentm,children:[Object(a.jsx)(I.a,{variant:"h3",children:e.heading}),Object(a.jsx)(I.a,{variant:"h4",className:t.transheading,children:e.heading}),Object(a.jsx)(I.a,{variant:"h6",children:e.subheading}),Object(a.jsx)(I.a,{variant:"body1",children:e.content})]})})})}var L=Object(s.a)({middlebg:{background:"url("+F+") no-repeat center",height:"100%",width:"100%",backgroundSize:"cover",padding:"230px 0",position:"relative",zIndex:99}}),X=[{title:"Patronage and marketplace",subtitle:"Artists find patrons to fund and bring to life new ideas, connect with passionate collectors and sell your finished works.",paragrapth:"Patrons, artists you love to create something new and wonderful, access exclusive perks and follow progress of your favourite artists."},{title:"Visualise best in-class art",subtitle:"Browse and discover",paragrapth:"curated creations and artists that move the four corners of the world. "},{title:"Trade art digitally",subtitle:"Benefit from the rising value of the art you create by receiving royalties every time one of your artworks is sold. ",paragrapth:"Access our worldwide network of patrons and collectors to grow and extend your audience.  "}];function W(){var e=L();return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:e.middlebg,children:[Object(a.jsx)(S,{heading:X[0].title,subheading:X[0].subtitle,content:X[0].paragrapth}),Object(a.jsx)(S,{heading:X[1].title,subheading:X[1].subtitle,content:X[1].paragrapth}),Object(a.jsx)(S,{heading:X[2].title,subheading:X[2].subtitle,content:X[2].paragrapth})]})})}var Y=i.p+"static/media/thirdbanner.371aa4c2.png",V=i(14),k=i(116),E=i(118),D=i(117),J=i(122),T=i(123),Z=Object(s.a)({formMain:{border:"3px solid #fff",position:"relative",padding:"50px",borderBottom:0,"@media (max-width: 600px)":{borderBottom:"3px solid #fff"},"&::before":{content:'""',width:"100%",height:"100%",background:"#00000080",position:"absolute",top:"15px",left:"15px",right:"0",bottom:"0"},"@media (max-width: 960px)":{margin:"50px 0"},"& h3":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:900,fontSize:"28px",textTransform:"uppercase",letterSpacing:"3px",position:"relative","@media (max-width: 1280px)":{fontSize:"26px"},"@media (max-width: 600px)":{fontSize:"18px"}},"& p":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"16px",position:"relative"},"& label":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"14px"},"& input":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"14px"},"& label.Mui-focused":{color:"#fff"},"& .MuiInput-underline:after":{borderBottomColor:"#fff"},"& .MuiInput-underline:before":{borderBottomColor:"#fff"},"& .MuiInput-underline:hover:before":{borderBottomColor:"#fff"},"& .MuiOutlinedInput-root":{color:"#fff"},"& .MuiInputBase-root":{color:"#fff"},"& form":{margin:"0 60px",padding:"60px 0 85px","@media (max-width: 600px)":{margin:"0 0px"}},"& .MuiFormControl-root":{marginBottom:"7px"}},smalldivider:{backgroundColor:"#fff",width:"65px",height:"3.5px",margin:"50px auto 40px",position:"relative","@media (max-width: 600px)":{margin:"30px"}},submitbtn:{borderColor:"#2274d3",color:"#2274d3",borderRadius:0,position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",padding:"4px 25px 58px",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"16px",letterSpacing:"3px","@media (max-width: 600px)":{backgroundColor:"#2274d3",color:"#fff"},"& :before":{content:'""',width:"50%",height:"3px",backgroundColor:"#2274d3"},"&.MuiButton-outlinedSecondary:hover":{color:"#2274d3",borderColor:"#2274d3","@media (max-width: 600px)":{backgroundColor:"#2274d3",color:"#fff"}}},borderControlb:{"&::after":{content:'""',backgroundColor:"#fff",position:"absolute",width:"38.3%",left:0,bottom:0,height:"2.5px","@media (max-width: 600px)":{display:"none"}},"&::before":{content:'""',backgroundColor:"#fff",position:"absolute",width:"38.2%",right:0,bottom:0,height:"2.5px","@media (max-width: 600px)":{display:"none"}}}});function Q(){var e=Z();return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:e.formMain,children:[Object(a.jsxs)(I.a,{variant:"h3",align:"center",style:{whiteSpace:"pre-line"},children:["Are you ",Object(a.jsx)("br",{})," an art collector?"]}),Object(a.jsx)(B.a,{light:"false",variant:"middle",className:e.smalldivider}),Object(a.jsx)(I.a,{variant:"body1",align:"center",children:"Power Art\u2019s Next Big Thing"}),Object(a.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsxs)(D.a,{fullWidth:!0,children:[Object(a.jsx)(J.a,{htmlFor:"collector-name",children:"Name"}),Object(a.jsx)(T.a,{id:"collector-name",type:"text"})]}),Object(a.jsxs)(D.a,{fullWidth:!0,children:[Object(a.jsx)(J.a,{htmlFor:"collector-email",children:"E-mail"}),Object(a.jsx)(T.a,{id:"collector-email",type:"email"})]}),Object(a.jsx)(j.a,{variant:"outlined",color:"secondary",className:e.submitbtn,children:"Submit"})]}),Object(a.jsx)("div",{className:e.borderControlb})]})})}var H=Object(s.a)({formMain:{border:"3px solid #fff",position:"relative",padding:"50px",borderBottom:0,"@media (max-width: 600px)":{borderBottom:"3px solid #fff"},"&::before":{content:'""',width:"100%",height:"100%",background:"#00000080",position:"absolute",top:"15px",left:"15px",right:"0",bottom:"0"},"& h3":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:900,fontSize:"28px",textTransform:"uppercase",letterSpacing:"3px",position:"relative","@media (max-width: 1280px)":{fontSize:"26px"},"@media (max-width: 600px)":{fontSize:"18px"}},"& p":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"16px",position:"relative"},"& label":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"14px"},"& input":{color:"#fff",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"14px"},"& label.Mui-focused":{color:"#fff"},"& .MuiInput-underline:after":{borderBottomColor:"#fff"},"& .MuiInput-underline:before":{borderBottomColor:"#fff"},"& .MuiInput-underline:hover:before":{borderBottomColor:"#fff"},"& .MuiOutlinedInput-root":{color:"#fff"},"& .MuiInputBase-root":{color:"#fff"},"& form":{margin:"0 60px",padding:"60px 0 85px","@media (max-width: 600px)":{margin:"0 0px"}},"& .MuiFormControl-root":{marginBottom:"7px"}},smalldivider:{backgroundColor:"#fff",width:"65px",height:"3.5px",position:"relative",margin:"50px auto 40px","@media (max-width: 600px)":{margin:"30px"}},submitbtn:{borderColor:"#2274d3",color:"#2274d3",borderRadius:0,position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",padding:"4px 25px 58px",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:"16px",letterSpacing:"3px","@media (max-width: 600px)":{backgroundColor:"#2274d3",color:"#fff"},"& :before":{content:'""',width:"50%",height:"3px",backgroundColor:"#2274d3"},"&.MuiButton-outlinedSecondary:hover":{color:"#2274d3",borderColor:"#2274d3","@media (max-width: 600px)":{backgroundColor:"#2274d3",color:"#fff"}}},borderControlb:{"&::after":{content:'""',backgroundColor:"#fff",position:"absolute",width:"38.3%",left:0,bottom:0,height:"2.5px","@media (max-width: 600px)":{display:"none"}},"&::before":{content:'""',backgroundColor:"#fff",position:"absolute",width:"38.2%",right:0,bottom:0,height:"2.5px","@media (max-width: 600px)":{display:"none"}}}});function P(){var e=H();return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:e.formMain,children:[Object(a.jsxs)(I.a,{variant:"h3",align:"center",style:{whiteSpace:"pre-line"},children:["Are you ",Object(a.jsx)("br",{})," an Artist?"]}),Object(a.jsx)(B.a,{light:"false",variant:"middle",className:e.smalldivider}),Object(a.jsx)(I.a,{variant:"body1",align:"center",children:"Let us power your creativity"}),Object(a.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsxs)(D.a,{fullWidth:!0,children:[Object(a.jsx)(J.a,{htmlFor:"collector-name",children:"Name"}),Object(a.jsx)(T.a,{id:"collector-name",type:"text"})]}),Object(a.jsxs)(D.a,{fullWidth:!0,children:[Object(a.jsx)(J.a,{htmlFor:"collector-email",children:"E-mail"}),Object(a.jsx)(T.a,{id:"collector-email",type:"email"})]}),Object(a.jsx)(j.a,{variant:"outlined",color:"secondary",className:e.submitbtn,children:"Submit"})]}),Object(a.jsx)("div",{className:e.borderControlb})]})})}var U=Object(s.a)({formsbg:{background:"url("+Y+") no-repeat center",height:"100%",width:"100%",backgroundSize:"cover",marginTop:"-108px",padding:"160px 0 100px"}});function q(){var e=U(),t=Object(V.a)(),i=Object(k.a)(t.breakpoints.down("xs"),{defaultMatches:!0});return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:e.formsbg,id:"form",children:Object(a.jsx)(h.a,{maxWidth:"lg",children:Object(a.jsxs)(E.a,{container:!0,spacing:i?0:7,direction:"row",justify:"center",children:[Object(a.jsx)(E.a,{item:!0,md:6,children:Object(a.jsx)(Q,{})}),Object(a.jsx)(E.a,{item:!0,md:6,children:Object(a.jsx)(P,{})})]})})})})}var K=i.p+"static/media/footerlogo.814cdac0.png",_=i(55),$=i.n(_),ee=i(56),te=i.n(ee),ie=i(57),ae=i.n(ie),ne=Object(s.a)({footerbg:{background:"#257ce1",padding:"40px 0","& h5":{fontFamily:"Montserrat, sans-serif",fontWeight:700,color:"#fff",fontSize:"13px",textTransform:"uppercase",letterSpacing:"5px",marginBottom:"12px"},"& a":{fontFamily:"Montserrat, sans-serif",fontWeight:400,color:"#fff",fontSize:"14px","@media (max-width: 960px)":{textAlign:"right",display:"block"}}},footerlogo:{textAlign:"center","@media (max-width: 960px)":{textAlign:"left","& a":{textAlign:"left"}},"& img":{maxWidth:"60%","@media (max-width: 600px)":{maxWidth:"90%"}}},socialu:{"& a":{margin:"0 5px"}},footsmallc:{marginBottom:"25px"}});function oe(){var e=ne(),t=Object(V.a)(),i=Object(k.a)(t.breakpoints.down("xs"),{defaultMatches:!0});return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:e.footerbg,children:Object(a.jsx)(h.a,{maxWidth:"lg",children:Object(a.jsxs)(E.a,{container:!0,spacing:i?0:5,alignItems:"center",direction:"row",children:[Object(a.jsx)(N.a,{smDown:!0,children:Object(a.jsxs)(E.a,{item:!0,md:4,children:[Object(a.jsx)(I.a,{variant:"h5",children:"Contact Us"}),Object(a.jsx)(x.a,{href:"mailto:hello@minty.art",children:"hello@minty.art"})]})}),Object(a.jsx)(E.a,{item:!0,md:4,xs:6,children:Object(a.jsx)("div",{className:e.footerlogo,children:Object(a.jsx)(x.a,{href:"#",children:Object(a.jsx)("img",{src:K,alt:"footer logo"})})})}),Object(a.jsxs)(E.a,{item:!0,md:4,xs:6,children:[Object(a.jsxs)(N.a,{mdUp:!0,children:[Object(a.jsx)(I.a,{variant:"h5",align:"right",children:"Contact Us"}),Object(a.jsx)(x.a,{href:"mailto:hello@minty.art",className:e.footsmallc,children:"hello@minty.art"})]}),Object(a.jsx)(I.a,{variant:"h5",align:"right",children:"Community"}),Object(a.jsxs)(E.a,{container:!0,direction:"row",alignItems:"center",justify:"flex-end",className:e.socialu,children:[Object(a.jsxs)(x.a,{href:"https://www.youtube.com/channel/UCBS5ZY7WbUBJXepQ8ReXyFw",style:{marginLeft:0},children:[Object(a.jsx)($.a,{})," "]}),Object(a.jsxs)(x.a,{href:"https://twitter.com/minty_nft",children:[Object(a.jsx)(te.a,{})," "]}),Object(a.jsxs)(x.a,{href:"https://www.instagram.com/minty_nft/",children:[Object(a.jsx)(ae.a,{})," "]})]})]})]})})})})}var re=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(C,{}),Object(a.jsx)(z,{}),Object(a.jsx)(W,{}),Object(a.jsx)(q,{}),Object(a.jsx)(oe,{})]})},ce=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,124)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),o(e),r(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(re,{})}),document.getElementById("root")),ce()}},[[76,1,2]]]);
//# sourceMappingURL=main.5cb8fddc.chunk.js.map