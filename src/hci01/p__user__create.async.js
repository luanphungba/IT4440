(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{bbLu:function(e,t,a){"use strict";a.r(t);a("2qtc");var n,i,r,l,c,o=a("kLXV"),s=(a("Pwec"),a("CtXQ")),u=(a("jCWc"),a("kPKH")),h=(a("+L6B"),a("2/Rp")),d=(a("14J3"),a("BMrR")),m=a("jehZ"),p=a.n(m),E=a("2Taf"),b=a.n(E),f=a("vZ4D"),g=a.n(f),y=a("l4Ni"),k=a.n(y),v=a("ujKo"),w=a.n(v),C=a("MhPg"),x=a.n(C),T=(a("y8nQ"),a("Vl3Y")),L=(a("5NDa"),a("5rEg")),O=(a("OaEy"),a("2fM7")),M=(a("/xke"),a("TeRw")),S=a("q1tI"),j=a.n(S),F=(a("17x9"),a("7Qib"),a("MuoO")),Q=a("Kvkj"),q=(a("Qyje"),a("ZD0w")),D=(a("Lo71"),a("D1Df")),R=a.n(D),I=a("wY1l"),V=a.n(I),B=a("MycI"),K=function(e){M["a"][e]({message:"Th\xeam m\u1edbi th\xe0nh c\xf4ng",description:""})},P=O["a"].Option,X=L["a"].TextArea,J=T["a"].Item,Z={labelCol:{span:6},wrapperCol:{span:14}},A=(n=Object(q["withI18n"])(),i=T["a"].create(),r=Object(F["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a}}),n(l=i(l=r((c=function(e){function t(e){var a;return b()(this,t),a=k()(this,w()(t).call(this,e)),a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.setState({ModalText:"\u0110ang in ...",confirmLoading:!0}),setTimeout(function(){a.setState({visible:!1,confirmLoading:!1})},2e3)},a.compareExistType=function(e,t,n){a.props.form;t&&"KS123"==t?n("M\xe3 thu\u1ed1c \u0111\xe3 t\u1ed3n t\u1ea1i!"):n()},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.setState({hidden:!1,disabled:!1})})},a.renderOption=function(){var e=[];return B["e"].map(function(t){e.push(j.a.createElement(P,{value:t.value,key:t.value},t.name))}),e},a.state={hidden:!0,disabled:!0,nameBtn:"Xu\u1ea5t QR Code",visible:!1,confirmLoading:!1},a}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=(e.item,e.onOk,e.form),a=(e.i18n,t.getFieldDecorator);return j.a.createElement(Q["f"],{inner:!0},j.a.createElement(T["a"],{layout:"horizontal",onSubmit:this.handleSubmit},j.a.createElement(J,p()({label:"T\xean thu\u1ed1c",hasFeedback:!0},Z),a("name",{initialValue:"",rules:[{required:!0}]})(j.a.createElement(L["a"],null))),j.a.createElement(J,p()({label:"M\xe3 thu\u1ed1c",hasFeedback:!0},Z),a("code",{rules:[{required:!0},{validator:this.compareExistType}]})(j.a.createElement(L["a"],{onChange:this.onChangeType,placeholder:"If input = KS123 => show error"}))),j.a.createElement(J,p()({label:"Lo\u1ea1i thu\u1ed1c",hasFeedback:!0},Z),a("type",{rules:[{required:!0,type:"string"}]})(j.a.createElement(O["a"],{defaultValue:"khang_sinh"},this.renderOption()))),j.a.createElement(J,p()({label:"Tr\u1ea1ng th\xe1i",hasFeedback:!0},Z),a("type",{initialValue:"testing",rules:[{required:!0,type:"string"}]})(j.a.createElement(O["a"],{defaultValue:"done"},j.a.createElement(P,{value:"done"},"\u0110\xe3 ho\xe0n th\xe0nh"),j.a.createElement(P,{value:"testing"},"\u0110ang th\u1eed nghi\u1ec7m")))),j.a.createElement(J,p()({label:"Th\xe0nh ph\u1ea7n ch\xednh",hasFeedback:!0},Z),a("description",{rules:[{required:!0,type:"string"}]})(j.a.createElement(X,{rows:4}))),j.a.createElement(J,p()({label:"C\xf4ng d\u1ee5ng",hasFeedback:!0},Z),a("description",{rules:[]})(j.a.createElement(X,{rows:4}))),j.a.createElement(J,p()({label:"Ghi ch\xfa",hasFeedback:!0},Z),a("description",{rules:[]})(j.a.createElement(X,{rows:4}))),j.a.createElement(d["a"],{style:{marginBottom:"16px"},type:"flex",justify:"center",hidden:this.state.hidden},j.a.createElement(R.a,{value:"http://facebook.github.io/react/",style:{height:"160px",width:"160px"}})),j.a.createElement(J,null,j.a.createElement(d["a"],{type:"flex",justify:"center",gutter:[16,16]},j.a.createElement(u["a"],null,j.a.createElement(V.a,{to:"/user"},j.a.createElement(h["a"],null,"H\u1ee7y"))),j.a.createElement(u["a"],null,j.a.createElement(h["a"],{type:"primary",htmlType:"submit"},"Xu\u1ea5t QR Code")),j.a.createElement(u["a"],null,j.a.createElement(V.a,{to:"/user"},j.a.createElement(h["a"],{type:"primary",disabled:this.state.disabled,onClick:function(){return K("success")}},"L\u01b0u")))))),j.a.createElement("div",{hidden:this.state.hidden},j.a.createElement(h["a"],{type:"primary",onClick:this.showModal},j.a.createElement(s["a"],{type:"printer"}),"In QR code"),j.a.createElement(o["a"],{title:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n in QR Code?",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,confirmLoading:this.state.confirmLoading},j.a.createElement(R.a,{value:"http://facebook.github.io/react/",style:{height:"160px",width:"160px"}}))))}}]),t}(S["PureComponent"]),l=c))||l)||l)||l);t["default"]=A}}]);