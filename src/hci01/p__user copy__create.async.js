(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{Tka5:function(e,t,a){"use strict";a.r(t);a("jCWc");var n,r,l,i,c,u=a("kPKH"),o=(a("+L6B"),a("2/Rp")),s=(a("14J3"),a("BMrR")),h=a("jehZ"),d=a.n(h),m=a("2Taf"),p=a.n(m),E=a("vZ4D"),b=a.n(E),f=a("l4Ni"),y=a.n(f),g=a("ujKo"),k=a.n(g),v=a("MhPg"),w=a.n(v),T=(a("y8nQ"),a("Vl3Y")),x=(a("5NDa"),a("5rEg")),C=(a("OaEy"),a("2fM7")),j=(a("/xke"),a("TeRw")),F=a("q1tI"),O=a.n(F),D=(a("17x9"),a("7Qib"),a("MuoO")),M=a("Kvkj"),S=(a("Qyje"),a("ZD0w")),q=(a("Lo71"),a("D1Df")),I=a.n(q),K=a("wY1l"),Q=a.n(K),R=a("MycI"),B=function(e){j["a"][e]({message:"Th\xeam m\u1edbi th\xe0nh c\xf4ng",description:""})},L=C["a"].Option,V=x["a"].TextArea,J=T["a"].Item,P={labelCol:{span:6},wrapperCol:{span:14}},Z=(n=Object(S["withI18n"])(),r=T["a"].create(),l=Object(D["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a}}),n(i=r(i=l((c=function(e){function t(e){var a;return p()(this,t),a=y()(this,k()(t).call(this,e)),a.compareExistType=function(e,t,n){a.props.form;t&&"KS123"==t?n("M\xe3 thu\u1ed1c \u0111\xe3 t\u1ed3n t\u1ea1i!"):n()},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.setState({hidden:!1,disabled:!1})})},a.renderOption=function(){var e=[];return R["e"].map(function(t){e.push(O.a.createElement(L,{value:t.value,key:t.value},t.name))}),e},a.state={hidden:!0,disabled:!0,nameBtn:"Xu\u1ea5t QR Code"},a}return w()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=(e.item,e.onOk,e.form),a=(e.i18n,t.getFieldDecorator);return O.a.createElement(M["f"],{inner:!0},O.a.createElement(T["a"],{layout:"horizontal",onSubmit:this.handleSubmit},O.a.createElement(J,d()({label:"T\xean thu\u1ed1c",hasFeedback:!0},P),a("name",{initialValue:"",rules:[{required:!0}]})(O.a.createElement(x["a"],null))),O.a.createElement(J,d()({label:"M\xe3 thu\u1ed1c",hasFeedback:!0},P),a("code",{rules:[{required:!0},{validator:this.compareExistType}]})(O.a.createElement(x["a"],{onChange:this.onChangeType,placeholder:"If input = KS123 => show error"}))),O.a.createElement(J,d()({label:"Lo\u1ea1i thu\u1ed1c",hasFeedback:!0},P),a("type",{rules:[{required:!0,type:"string"}]})(O.a.createElement(C["a"],{defaultValue:"khang_sinh"},this.renderOption()))),O.a.createElement(J,d()({label:"Tr\u1ea1ng th\xe1i",hasFeedback:!0},P),a("type",{rules:[{required:!0,type:"string"}]})(O.a.createElement(C["a"],{defaultValue:"done"},O.a.createElement(L,{value:"done"},"\u0110\xe3 ho\xe0n th\xe0nh"),O.a.createElement(L,{value:"testing"},"\u0110ang th\u1eed nghi\u1ec7m")))),O.a.createElement(J,d()({label:"Th\xe0nh ph\u1ea7n ch\xednh",hasFeedback:!0},P),a("description",{rules:[]})(O.a.createElement(V,{rows:4}))),O.a.createElement(J,d()({label:"C\xf4ng d\u1ee5ng",hasFeedback:!0},P),a("description",{rules:[]})(O.a.createElement(V,{rows:4}))),O.a.createElement(J,d()({label:"Ghi ch\xfa",hasFeedback:!0},P),a("description",{rules:[]})(O.a.createElement(V,{rows:4}))),O.a.createElement(s["a"],{style:{marginBottom:"16px"},type:"flex",justify:"center",hidden:this.state.hidden},O.a.createElement(I.a,{value:"http://facebook.github.io/react/",style:{height:"160px",width:"160px"}})),O.a.createElement(J,null,O.a.createElement(s["a"],{type:"flex",justify:"center",gutter:[16,16]},O.a.createElement(u["a"],null,O.a.createElement(Q.a,{to:"/user"},O.a.createElement(o["a"],null,"H\u1ee7y"))),O.a.createElement(u["a"],null,O.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"Xu\u1ea5t QR Code")),O.a.createElement(u["a"],null,O.a.createElement(Q.a,{to:"/user"},O.a.createElement(o["a"],{type:"primary",disabled:this.state.disabled,onClick:function(){return B("success")}},"L\u01b0u")))))))}}]),t}(F["PureComponent"]),i=c))||i)||i)||i);t["default"]=Z}}]);