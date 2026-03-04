import { useSiteStore } from '../store/siteStore'

// 使用 Proxy 来保持向后兼容性，同时将状态管理委托给 Pinia
export const siteData = new Proxy({}, {
    get(target, prop) {
        const store = useSiteStore()
        return store.siteData[prop]
    },
    set(target, prop, value) {
        const store = useSiteStore()
        store.siteData[prop] = value
        return true
    }
})

export const blockDefaults = new Proxy({}, {
    get(target, prop) {
        const store = useSiteStore()
        return store.blockDefaults[prop]
    }
})

export const currentPage = {
    get value() {
        return useSiteStore().activePage
    }
}

export const changePage = (pageId) => {
    useSiteStore().changePage(pageId)
}

export const toggleBlock = (template) => {
    useSiteStore().toggleBlock(template)
}
