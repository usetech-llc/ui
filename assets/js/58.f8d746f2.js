(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{257:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"account-derivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-derivation","aria-hidden":"true"}},[t._v("#")]),t._v(" Account derivation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/paritytech/substrate/wiki/Secret-URI-Test-Vectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secret URIs"),e("OutboundLink")],1),t._v(" are a way of describing the phrase/seed along with derivation paths. This explains the naming of the default add as "),e("code",[t._v("addUri(...)")]),t._v(", it can handle mnemonics, seeds and apply suri derivations on these.")]),t._v(" "),e("h2",{attrs:{id:"diving-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diving-in","aria-hidden":"true"}},[t._v("#")]),t._v(" Diving in")]),t._v(" "),e("p",[t._v("As a follow-up on what we have done in the preceding section, we take a dive into expanding our account addition with derivation, in this case we are applying two hard paths, "),e("code",[t._v("hard")]),t._v(" followed by "),e("code",[t._v("derivation")]),t._v(" -")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the account with hard derivation paths")]),t._v("\nkeyring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addUri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mnemonic"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("//hard//derivation")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'donotcare'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testing derive'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("This format is standard across the "),e("code",[t._v("@polkadot/keyring")]),t._v(", "),e("code",[t._v("@polkadot/ui-keyring")]),t._v(" as well as "),e("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/subkey",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate subkey"),e("OutboundLink")],1),t._v(", so it is a Polkadot/Substrate specific way of defining derivation paths.")]),t._v(" "),e("h2",{attrs:{id:"understanding-paths"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-paths","aria-hidden":"true"}},[t._v("#")]),t._v(" Understanding paths")]),t._v(" "),e("p",[t._v("To build a suri, you paths, the format is always "),e("code",[t._v("<mnemonic or seed>[//hard][/soft][///password]")]),t._v(" and it is  passed as-is to the "),e("code",[t._v("addUri(...)")]),t._v(" function. the derivation types are -")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Soft derivation, i.e "),e("code",[t._v("/<soft path>")]),t._v(" - Here a single slash, "),e("code",[t._v("/")]),t._v(", denotes a soft derivation. Please note that any pair with an "),e("code",[t._v("ed25519")]),t._v(" type does not support soft derivations, these are only applicable to "),e("code",[t._v("sr25519")]),t._v(" types.")])]),t._v(" "),e("li",[e("p",[t._v("Hard derivation, i.e. "),e("code",[t._v("//<hard path>")]),t._v(" - Here two slashes, "),e("code",[t._v("//")]),t._v(", denoted a hard derivation. This  is available to both "),e("code",[t._v("sr25519")]),t._v(" and "),e("code",[t._v("ed25519")]),t._v(" pairs. Underlying it will apply a hashing function on the secret, generating a new secret for the remainder of the derivations.")])]),t._v(" "),e("li",[e("p",[t._v("Password, i.e. "),e("code",[t._v("///<password>")]),t._v(" - Here three slashed, "),e("code",[t._v("///")]),t._v(", denoted the (optional) password. Unlike hard and soft derivations that can be mixed, only a single password should be specified. The password here applies to the actual uri, not be be confused by the JSON encryption password. It is an additional security layer - if your full mnemonic and all paths do leak without the password, a bad actor would still not be able to generate a compatible secret to access funds without the password.")])])]),t._v(" "),e("h2",{attrs:{id:"retrieving-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-accounts","aria-hidden":"true"}},[t._v("#")]),t._v(" Retrieving accounts")]),t._v(" "),e("p",[t._v("With a fim grasp on adding accounts, next we will take a look at "),e("router-link",{attrs:{to:"/start/keyring.retrieve.html"}},[t._v("retrieving account and account subscriptions")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);