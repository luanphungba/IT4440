(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{O47E:function(e,t,a){"use strict";a.r(t);a("2qtc");var n,i,l,r,c,s=a("kLXV"),o=(a("Pwec"),a("CtXQ")),u=(a("jCWc"),a("kPKH")),h=(a("+L6B"),a("2/Rp")),m=(a("14J3"),a("BMrR")),d=a("jehZ"),p=a.n(d),E=(a("MXD1"),a("CFYs")),f=a("2Taf"),b=a.n(f),y=a("vZ4D"),v=a.n(y),g=a("l4Ni"),k=a.n(g),w=a("ujKo"),x=a.n(w),C=a("MhPg"),O=a.n(C),V=(a("/xke"),a("TeRw")),D=(a("5NDa"),a("5rEg")),M=(a("OaEy"),a("2fM7")),T=(a("y8nQ"),a("Vl3Y")),F=a("q1tI"),L=a.n(F),j=(a("17x9"),a("MuoO")),R=a("Kvkj"),S=a("R2xo"),_=a.n(S),Q=a("ZD0w"),q=(a("7Qib"),a("D1Df")),I=a.n(q),B=a("wY1l"),K=a.n(B),P=a("MycI"),X=T["a"].Item,J=M["a"].Option,N=D["a"].TextArea,Y={labelCol:{span:6},wrapperCol:{span:14}},Z=function(e){V["a"][e]({message:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",description:""})},A=(n=T["a"].create(),i=Object(Q["withI18n"])(),l=Object(j["connect"])(function(e){var t=e.userDetail;return{userDetail:t}}),n(r=i(r=l((c=function(e){function t(e){var a;return b()(this,t),a=k()(this,x()(t).call(this,e)),a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.setState({ModalText:"\u0110ang in ...",confirmLoading:!0}),setTimeout(function(){a.setState({visible:!1,confirmLoading:!1})},2e3)},a.renderOption=function(){var e=[];return P["e"].map(function(t){e.push(L.a.createElement(J,{value:t.value,key:t.value},t.name))}),e},a.state={hidden:!1,disabled:!0,nameBtn:"Xu\u1ea5t QR Code",visible:!1,confirmLoading:!1},a}return O()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,t=(e.item,e.onOk,e.form),a=(e.i18n,t.getFieldDecorator),n=this.props.userDetail,i=n.data,l=[];for(var r in i)({}).hasOwnProperty.call(i,r)&&l.push(L.a.createElement("div",{key:r,className:_.a.item},L.a.createElement("div",null,r),L.a.createElement("div",null,String(i[r]))));return L.a.createElement(R["f"],{inner:!0},L.a.createElement(T["a"],{layout:"horizontal",onSubmit:this.handleSubmit},L.a.createElement(X,p()({label:"Tr\u1ea1ng th\xe1i",hasFeedback:!0},Y),a("status",{initialValue:"",rules:[]})(L.a.createElement(E["a"],{percent:30}))),L.a.createElement(X,p()({label:"T\xean thu\u1ed1c",hasFeedback:!0},Y),a("name",{initialValue:"Oxyvet-L.A",rules:[{required:!0}]})(L.a.createElement(D["a"],null))),L.a.createElement(X,p()({label:"M\xe3 thu\u1ed1c",hasFeedback:!0},Y),a("code",{initialValue:"KS001",rules:[{required:!0},{validator:this.compareExistType}]})(L.a.createElement(D["a"],{onChange:this.onChangeType,placeholder:"If input = KS123 => show error"}))),L.a.createElement(X,p()({label:"Lo\u1ea1i thu\u1ed1c",hasFeedback:!0},Y),a("type",{initialValue:"ks-tiem",rules:[{required:!0,type:"string"}]})(L.a.createElement(M["a"],{defaultValue:"khang_sinh"},this.renderOption()))),L.a.createElement(X,p()({label:"Th\xe0nh ph\u1ea7n ch\xednh",hasFeedback:!0},Y),a("description",{initialValue:"Oxytetraxyclin 20%",rules:[{required:!0,type:"string"}]})(L.a.createElement(N,{rows:4}))),L.a.createElement(X,p()({label:"C\xf4ng d\u1ee5ng",hasFeedback:!0},Y),a("description",{initialValue:"Vi\xeam t\u1eed cung, vi\xeam v\xfa, s\u1ed1t s\u1eefa, vi\xeam ph\u1ed5i, t\u1ee5 c\u1ea7u",rules:[]})(L.a.createElement(N,{rows:4}))),L.a.createElement(X,p()({label:"Ghi ch\xfa",hasFeedback:!0},Y),a("description",{initialValue:"test",rules:[]})(L.a.createElement(N,{rows:4}))),L.a.createElement(m["a"],{style:{marginBottom:"16px"},type:"flex",justify:"center",hidden:this.state.hidden},L.a.createElement(I.a,{value:"http://facebook.github.io/react/",style:{height:"160px",width:"160px"}})),L.a.createElement(X,null,L.a.createElement(m["a"],{type:"flex",justify:"center",gutter:[16,16]},L.a.createElement(u["a"],null,L.a.createElement(K.a,{to:"/user"},L.a.createElement(h["a"],null,"Quay l\u1ea1i"))),L.a.createElement(u["a"],null,L.a.createElement(K.a,{to:"/user"},L.a.createElement(h["a"],{type:"primary",onClick:function(){return Z("success")}},"C\u1eadp nh\u1eadt"))))),L.a.createElement("div",null,L.a.createElement(h["a"],{type:"primary",onClick:this.showModal},L.a.createElement(o["a"],{type:"printer"}),"In QR code"),L.a.createElement(s["a"],{title:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n in QR Code?",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,confirmLoading:this.state.confirmLoading},L.a.createElement(I.a,{value:"http://facebook.github.io/react/",style:{height:"160px",width:"160px"}})))))}}]),t}(F["PureComponent"]),r=c))||r)||r)||r);t["default"]=A},R2xo:function(e,t,a){e.exports={content:"content___3Erpp",item:"item___3wn_7"}}}]);