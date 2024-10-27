// @ts-nocheck

import locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_en_json from "../locales/en.json" assert { type: "json" };
import locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_tw_json from "../locales/tw.json" assert { type: "json" };
import locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_es_json from "../locales/es.json" assert { type: "json" };

export const localeCodes = [
  "en",
  "tw",
  "es"
]

export const localeMessages = { 
  "en": [
      { key: "../locales/en.json", load: () => Promise.resolve(locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_en_json), cache: true },
  ],
  "tw": [
      { key: "../locales/tw.json", load: () => Promise.resolve(locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_tw_json), cache: true },
  ],
  "es": [
      { key: "../locales/es.json", load: () => Promise.resolve(locale_D_58_D_58_Desktop__23567_21487_24859_23416_26550_32178_31449_node_test_jeby_website_my_nuxt_project_locales_es_json), cache: true },
  ],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "tw",
      "files": [
        "locales/tw.json"
      ]
    },
    {
      "code": "es",
      "files": [
        "locales/es.json"
      ]
    }
  ],
  "defaultLocale": "tw",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales/",
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}
  
  const vueI18nConfigLoader = async loader => {
    const config = await loader().then(r => r.default || r)
    if (typeof config === 'object') return config
    if (typeof config === 'function') return await config()
    return {}
  }

  const deepCopy = (src, des, predicate) => {
    for (const key in src) {
      if (typeof src[key] === 'object') {
        if (!(typeof des[key] === 'object')) des[key] = {}
        deepCopy(src[key], des[key], predicate)
      } else {
        if (predicate) {
          if (predicate(src[key], des[key])) {
            des[key] = src[key]
          }
        } else {
          des[key] = src[key]
        }
      }
    }
  }
  
  const mergeVueI18nConfigs = async (loader) => {
    const layerConfig = await vueI18nConfigLoader(loader)
    const cfg = layerConfig || {}
    
    for (const [k, v] of Object.entries(cfg)) {
      if(nuxtI18nOptions.vueI18n?.[k] === undefined || typeof nuxtI18nOptions.vueI18n?.[k] !== 'object') {
        nuxtI18nOptions.vueI18n[k] = v
      } else {
        deepCopy(v, nuxtI18nOptions.vueI18n[k])
      }
    }
  }

  nuxtI18nOptions.vueI18n = { messages: {} }
  
    
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const nuxtI18nInternalOptions = {
  "__normalizedLocales": [
    {
      "code": "en",
      "files": [
        {
          "path": "locales/en.json"
        }
      ]
    },
    {
      "code": "tw",
      "files": [
        {
          "path": "locales/tw.json"
        }
      ]
    },
    {
      "code": "es",
      "files": [
        {
          "path": "locales/es.json"
        }
      ]
    }
  ]
}
 
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
