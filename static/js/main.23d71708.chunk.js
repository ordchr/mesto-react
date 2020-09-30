(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/del-icon.4220563a.svg"},15:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),c=(a(20),a(13)),l=a(1),s=a(9),u=a.n(s);var p=function(){return o.a.createElement("header",{className:"page__section header"},o.a.createElement("img",{src:u.a,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}))},m=a(2),_=a(3),d=new(function(){function e(t){var a=t.baseUrl,n=t.headersAuthorization;Object(m.a)(this,e),this._baseUrl=a,this._headersAuthorization=n,this._call=this._call.bind(this)}return Object(_.a)(e,[{key:"_call",value:function(e,t,a){var n={method:e,headers:{authorization:this._headersAuthorization,"Content-Type":"application/json"}};return a&&(n.body=JSON.stringify(a)),fetch("".concat(this._baseUrl,"/").concat(t),n).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._call("GET","users/me")}},{key:"updateUserInfo",value:function(e){return this._call("PATCH","users/me",e)}},{key:"getInitialCards",value:function(){return this._call("GET","cards")}},{key:"addCard",value:function(e){return this._call("POST","cards",e)}},{key:"deleteCard",value:function(e){return this._call("DELETE","cards/".concat(e))}},{key:"likeCard",value:function(e){return this._call("PUT","cards/likes/".concat(e))}},{key:"dislikeCard",value:function(e){return this._call("DELETE","cards/likes/".concat(e))}},{key:"updateAvatar",value:function(e){return this._call("PATCH","users/me/avatar",e)}},{key:"changeLikeStatus",value:function(e,t){return t?this.likeCard(e):this.dislikeCard(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headersAuthorization:"e334a560-7923-4c10-ad97-03986e985b68"}),h=a(10),f=a.n(h),v=o.a.createContext();var E=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,i=e.onCardDelete,r=o.a.useContext(v),c=t.name,l=t.link,s=t.likes,u=t.owner._id===r._id,p="place__image-del ".concat(u?"":"place__image-del_hidden"),m=t.likes.some((function(e){return e._id===r._id})),_="place__title-like ".concat(m?"place__title-like_selected":"");return o.a.createElement("div",{className:"place"},o.a.createElement("img",{src:l,className:"place__image",alt:"",onClick:function(){a(t)}}),o.a.createElement("button",{type:"button",className:p,style:{backgroundImage:"url(".concat(f.a,")")},onClick:function(){i(t)}}),o.a.createElement("div",{className:"place__title"},o.a.createElement("h3",{className:"place__title-text"},c),o.a.createElement("div",{className:"place__title-like-block"},o.a.createElement("button",{type:"button",className:_,onClick:function(){n(t)}}),o.a.createElement("h5",{className:"place__title-like-count"},s.length))))};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,i=e.onCardClick,r=e.onCardLike,c=e.onCardDelete,l=e.cards,s=o.a.useContext(v);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile page__section"},o.a.createElement("button",{className:"profile__photo",onClick:n,style:{backgroundImage:"url(".concat(s.avatar,")")}}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__title"},o.a.createElement("h1",{className:"profile__full-name"},s.name),o.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:t})),o.a.createElement("p",{className:"profile__profession"},s.about)),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),o.a.createElement("section",{className:"places page__section"},l.map((function(e){return o.a.createElement(E,{card:e,onCardClick:i,onCardLike:r,onCardDelete:c,key:e._id})}))))};var C=function(){return o.a.createElement("footer",{className:"footer page__section"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var k=function(e){var t=e.card,a=e.onClose,i=Object(n.useRef)();return o.a.createElement("div",{className:"popup-preview ".concat(0===Object.keys(t).length?"popup_closed":"popup_opened")},o.a.createElement("div",{className:"popup-container popup-preview__container",ref:i},o.a.createElement("img",{src:t.link,className:"popup-preview__image",alt:"",onLoad:function(e){i.current.style.width="".concat(e.target.offsetWidth,"px"),i.current.style.height="".concat(e.target.offsetHeight,"px")}}),o.a.createElement("button",{type:"button",className:"popup__button-close",onClick:a}),o.a.createElement("p",{className:"popup-preview__description"},t.name)))},g=a(11),y=a(5),N=a(14),S=a(12),O=function(){function e(t,a){Object(m.a)(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._validatedForm=a,this._inputList=Array.from(a.querySelectorAll(this._inputSelector)),this._buttonElement=a.querySelector(this._submitButtonSelector),this._formInputs=a.querySelectorAll(".popup__input"),this._formButtonSave=a.querySelector(".popup__button-save")}return Object(_.a)(e,[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e.isValid(t),e._toggleButtonState()}))}))}},{key:"isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._buttonElement.classList.add(this._inactiveButtonClass):this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t){var a=this._validatedForm.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),a.classList.add(this._errorClass),a.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._validatedForm.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_validateForm",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e.isValid(t)}))}},{key:"validateForm",value:function(){this._validateForm()}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"prepareClearForm",value:function(){this._formInputs.forEach((function(e){e.value=""})),this._formButtonSave.classList.add(this._inactiveButtonClass)}}]),e}();var L=function(e){var t=e.title,a=e.name,i=e.isOpen,r=e.onClose,c=e.onSubmit,l=e.children;return Object(n.useEffect)((function(){var e=document.querySelector(".popup_".concat(a));new O({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},e).enableValidation()}),[]),o.a.createElement("div",{className:"popup ".concat(i?"popup_opened":"popup_closed","  popup_").concat(a)},o.a.createElement("div",{className:"popup-container popup__container"},o.a.createElement("form",{className:"popup__form popup__form-edit_".concat(a),name:a,action:"#",method:"GET",onSubmit:c},o.a.createElement("h4",{className:"popup__header"},t),l,o.a.createElement("button",{className:"popup__button-save",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),o.a.createElement("button",{type:"button",className:"popup__button-close",onClick:r})))},j=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).props=e,n.handleInputChange=n.handleInputChange.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.prevContext=null,n.state={name:"",about:""},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){this.prevContext=this.context}},{key:"componentDidUpdate",value:function(){this.prevContext._id!==this.context._id&&(this.setState({name:this.context.name,description:this.context.about}),this.prevContext=this.context)}},{key:"handleInputChange",value:function(e){var t=e.target.name;this.setState(Object(g.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onUpdateUser({name:this.state.name,about:this.state.description}),this.props.onClose()}},{key:"render",value:function(){return o.a.createElement(L,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:this.props.isOpen,onClose:this.props.onClose,onSubmit:this.handleSubmit},o.a.createElement("input",{id:"popup-input-full-name",className:"popup__input popup__input_full-name",name:"name",type:"text",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",required:!0,value:this.state.name||"",onChange:this.handleInputChange}),o.a.createElement("span",{id:"popup-input-full-name-error",className:"popup__input-error"}),o.a.createElement("input",{id:"popup-input-profession",className:"popup__input popup__input_profession",name:"description",type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"200",required:!0,value:this.state.description||"",onChange:this.handleInputChange}),o.a.createElement("span",{id:"popup-input-profession-error",className:"popup__input-error"}))}}]),a}(o.a.Component);j.contextType=v;var x=j;var I=function(e){var t=e.isOpen,a=e.onClose,i=e.onUpdateAvatar,r=Object(n.useRef)();return o.a.createElement(L,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update-avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),i({avatarLink:r.current.value}),a()}},o.a.createElement("input",{id:"popup-input-avatar-image-link",className:"popup__input popup__input_update-avatar-link",name:"popup__input_update-avatar-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:r}),o.a.createElement("span",{id:"popup-input-avatar-image-link-error",className:"popup__input-error"}))};var A=function(e){var t=e.isOpen,a=e.onClose,i=e.onAddPlace,r=Object(n.useRef)(),c=Object(n.useRef)();return o.a.createElement(L,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),i({name:r.current.value,link:c.current.value}),a(),r.current.value="",c.current.value=""}},o.a.createElement("input",{id:"popup-input-place-name",className:"popup__input popup__input_place-name",name:"popup__input_place-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,ref:r}),o.a.createElement("span",{id:"popup-input-place-name-error",className:"popup__input-error"}),o.a.createElement("input",{id:"popup-input-place-image-link",className:"popup__input popup__input_place-image-link",name:"popup__input_place-image-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:c}),o.a.createElement("span",{id:"popup-input-place-image-link-error",className:"popup__input-error"}))};var B=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=o.a.useState(!1),r=Object(l.a)(i,2),s=r[0],u=r[1],m=o.a.useState(!1),_=Object(l.a)(m,2),h=_[0],f=_[1],E=o.a.useState({}),g=Object(l.a)(E,2),y=g[0],N=g[1],S=o.a.useState({}),O=Object(l.a)(S,2),L=O[0],j=O[1];o.a.useEffect((function(){d.getUserInfo().then((function(e){j(e),console.log("get user info")}))}),[]);var B=o.a.useState([]),U=Object(l.a)(B,2),P=U[0],q=U[1];function w(){f(!1),n(!1),u(!1),N({})}return o.a.useEffect((function(){Promise.all([d.getInitialCards()]).then((function(e){var t=Object(l.a)(e,1)[0];q(t)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(v.Provider,{value:L},o.a.createElement(p,null),o.a.createElement(b,{onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){f(!0)},onCardClick:function(e){N(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));d.changeLikeStatus(e._id,!t).then((function(t){var a=P.map((function(a){return a._id===e._id?t:a}));q(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){d.deleteCard(e._id).then((function(t){var a=P.filter((function(t){return t._id!==e._id}));q(a)})).catch((function(e){console.log(e)}))},cards:P}),o.a.createElement(C,null),o.a.createElement(x,{isOpen:a,onClose:w,onUpdateUser:function(e){console.log(e),d.updateUserInfo(e).then((function(e){j(e)})).catch((function(e){console.log(e)}))}}),o.a.createElement(A,{isOpen:s,onClose:w,onAddPlace:function(e){d.addCard(e).then((function(e){console.log(e),q([].concat(Object(c.a)(P),[e]))})).catch((function(e){console.log(e)}))}}),o.a.createElement(I,{isOpen:h,onClose:w,onUpdateAvatar:function(e){var t=e.avatarLink;d.updateAvatar({avatar:t}).then((function(e){j(e)})).catch((function(e){console.log(e)}))}}),o.a.createElement(k,{card:y,onClose:w}),o.a.createElement("div",{className:"popup popup_closed popup_confirm"},o.a.createElement("div",{className:"popup-container popup__container"},o.a.createElement("form",{className:"popup__form popup__form-confirm",name:"confirm",action:"#",method:"POST"},o.a.createElement("h4",{className:"popup__header popup__header_confirm"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{className:"popup__button-yes",type:"submit"},"\u0414\u0430")),o.a.createElement("button",{type:"button",className:"popup__button-close"})))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.23d71708.chunk.js.map