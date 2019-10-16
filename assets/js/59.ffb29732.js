(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{258:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"keyring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyring","aria-hidden":"true"}},[t._v("#")]),t._v(" Keyring")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.npmjs.com/package/@polkadot/ui-keyring",target:"_blank",rel:"noopener noreferrer"}},[t._v("@polkadot/ui-keyring"),s("OutboundLink")],1),t._v(" package provides a wrapper around the "),s("a",{attrs:{href:"https://www.npmjs.com/package/@polkadot/keyring",target:"_blank",rel:"noopener noreferrer"}},[t._v("@polkadot/keyring"),s("OutboundLink")],1),t._v(" package, specifically for use in browser environments. The "),s("code",[t._v("ui-keyring")]),t._v(" only extends the "),s("code",[t._v("keyring")]),t._v(", but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage.")]),t._v(" "),s("p",[t._v("Additionally where the base keyring is focussed on accounts, the "),s("code",[t._v("ui-keyring")]),t._v(" extends this to cater for an address-book, contracts and allows for accounts to be tied to a specific chain. Since UIs are typically split into different parts, it also allows for subscriptions on accounts, so notifications are available when accounts are added or removed.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("If you already use the "),s("a",{attrs:{href:"https://www.npmjs.com/package/@polkadot/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("@polkadot/api"),s("OutboundLink")],1),t._v(" in your project (which is true in most cases), you don't need anything more than "),s("code",[t._v("yarn add @polkadot/ui-keyring")]),t._v(".")]),t._v(" "),s("p",[t._v("If however you use the "),s("code",[t._v("ui-keyring")]),t._v(" independently (i.e. in an address generator, like the examples) you would need the "),s("code",[t._v("keyring")]),t._v(" dependency as well, "),s("code",[t._v("yarn add @polkadot/keyring @polkadot/ui-keyring")]),t._v(". (In the first case the "),s("code",[t._v("@polkadot/api")]),t._v(" already comes bundled with the base keyring, so no additional dependencies are needed).")]),t._v(" "),s("h2",{attrs:{id:"initialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialization","aria-hidden":"true"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),s("p",[t._v("To understand the initialization process, some background on the underlying libraries are required. For the "),s("a",{attrs:{href:"https://github.com/w3f/schnorrkel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schnorrkel sr25519"),s("OutboundLink")],1),t._v(" a WASM library is used. This means that before "),s("code",[t._v("sr25519")]),t._v(" can be used, the WASM libraries needs to be loaded and initialized. This is not an issue when the keyring only uses "),s("code",[t._v("ed25519")]),t._v(".")]),t._v(" "),s("p",[t._v("With this in mind, we take care of the  initialization as before we load our keyring, yielding -")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" keyring "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/ui-keyring'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cryptoWaitReady "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util-crypto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cryptoWaitReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load all available addresses and accounts")]),t._v("\n  keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ss58Format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sr25519'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional initialization here, including rendering")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("The "),s("code",[t._v("cryptoWaitReady()")]),t._v(" promise resolves as soon as the underlying WASM libraries have been made available. This is followed by "),s("code",[t._v("keyring.loadAll(...)")]),t._v(" which is the main initialization for the keyring, which")]),t._v(" "),s("ul",[s("li",[t._v("initializes the underlying "),s("code",[t._v("@polkadot/keyring")])]),t._v(" "),s("li",[t._v("loads all available accounts, addresses band contracts previously stored")]),t._v(" "),s("li",[t._v("sets up the default address format with "),s("code",[t._v("42")]),t._v(" (This is the substrate development default. When not specified, this defaults to "),s("code",[t._v("42")]),t._v(")")]),t._v(" "),s("li",[t._v("defaults to "),s("code",[t._v("sr25519")]),t._v(" accounts (We can still add "),s("code",[t._v("ed25519")]),t._v(" accounts, more on this later. When not specified this defaults to "),s("code",[t._v("ed25519")]),t._v(")")])]),t._v(" "),s("p",[t._v("Since you would generally want the keyring available before rendering the UI (although it can be done elsewhere, showing some info while loading), the following pattern is used in our examples, both React and Vue shown here -")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cryptoWaitReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount React and render")]),t._v("\n  ReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cryptoWaitReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount Vue and render")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("When using the keyring together with the Polkadot-js API, the above would be adapted since the API itself already has a check for the WASM availability. In this case, we can adapt the interface to follow the following pattern -")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" keyring "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/ui-keyring'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nApiPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional initialization here, including rendering")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("The above pattern is how initialization is done in some applications such as the "),s("a",{attrs:{href:"https://polkadot.js.org/apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("polkadot-js apps UI"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"additional-create-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-create-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional create options")]),t._v(" "),s("p",[t._v("In addition to the "),s("code",[t._v("ss58Format")]),t._v(" and "),s("code",[t._v("type")]),t._v(" options (both optional), the following additional configuration options are available to the "),s("code",[t._v("loadAll(...)")]),t._v(" call -")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("filter?: (json: KeyringJson) => boolean")]),t._v(" - An optional filter that is executed on account loading. This allows us to check the loaded account and apply rules on it before including it in the keyring. Generally this would be used for advanced cases, any account that is filtered with "),s("code",[t._v("false")]),t._v(" won't appear.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("genesisHash?: Hash")]),t._v(" - The "),s("code",[t._v("genesisHash")]),t._v(" of accounts to should be loaded. The meta property of the account "),s("em",[t._v("may")]),t._v(" contain a "),s("code",[t._v("genesisHash")]),t._v(", when both are available and non-matching, the account will not be included. To populate this option, the easiest way is to pass the "),s("code",[t._v("api.genesisHash")]),t._v(" property.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("isDevelopment?: boolean")]),t._v(" - This flag, when set to "),s("code",[t._v("true")]),t._v(' loads the keyring in development mode. This means that the default development accounts such as "Alice", "Bob", ..., "Ferdie" are included in the keyring. Generally you would only specify this when  actually connected to a development chain.')])]),t._v(" "),s("li",[s("p",[s("code",[t._v("store?: KeyringStore")]),t._v(" - An optional store to be used. By default the "),s("code",[t._v("ui-keyring")]),t._v(" will user browser localStorage, but with a specific store this behavior can be adjusted. For instance, for an extension we would default to the extension store (although localStorage is available) and for Electron apps, we may want to default to file storage.")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ExtensionStore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/ui-keyring/stores'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For file storage where available, e.g. in Electron environments.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This takes an path in the constructor, new FileStore('~./keyring-data')")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import { FileStore } from '@polkadot/ui-keyring/stores';")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When the store is not specified, it defaults to new BrowserStore()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import { BrowserStore } from '@polkadot/ui-keyring/stores';")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nkeyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtensionStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"managing-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-accounts","aria-hidden":"true"}},[t._v("#")]),t._v(" Managing accounts")]),t._v(" "),s("p",[t._v("With the keyring installed and ready for use, "),s("router-link",{attrs:{to:"/start/keyring.accounts.html"}},[t._v("next we will dive into adding and managing accounts")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);