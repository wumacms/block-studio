import { reactive, computed } from 'vue'

export const siteData = reactive({
    config: {
        theme: 'pop-art', // 'pop-art', 'minimal', 'fresh', 'luxury', 'cyberpunk', 'yellow'
        siteName: 'Block Studio'
    },
    navigation: {
        template: 'MainNavbar',
        logo: {
            primary: 'ANTI',
            secondary: 'GRAVITY'
        }
    },
    footer: {
        template: 'MainFooter'
    },
    currentPageId: 'home',
    pages: [
        {
            id: 'home',
            title: '首页',
            slug: '/',
            blocks: [
                {
                    id: 'hero-1',
                    template: 'HeroSection',
                    content: {
                        title: '创造不凡的数字体验',
                        subtitle: '我们通过艺术与技术的结合，为您打造独一无二的品牌视觉。',
                        ctaText: '立即开始',
                        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
                    }
                },
                {
                    id: 'features-1',
                    template: 'FeatureGrid',
                    content: {
                        items: [
                            { title: '极致设计', desc: '每一个像素都经过精心雕琢。', icon: '🎨' },
                            { title: '前沿技术', desc: '采用最先进的框架与工具。', icon: '🚀' },
                            { title: '用户至上', desc: '以人为本的交互设计理念。', icon: '❤️' }
                        ]
                    }
                },
                {
                    id: 'bento-1',
                    template: 'BentoGrid',
                    content: {
                        title: '为什么选择我们',
                        subtitle: '探索我们如何通过技术赋能业务',
                        mainItem: {
                            title: '创新引擎',
                            desc: '自研的高性能原子化渲染引擎，让创意不再受限。',
                            icon: '🔋',
                            bgText: 'TECH'
                        },
                        item2: {
                            title: '全球部署',
                            desc: '秒级同步，全球加速访问。',
                            icon: '🌍'
                        },
                        item3: {
                            title: '隐私保障',
                            icon: '🛡️'
                        },
                        item4: {
                            title: '智能助手',
                            icon: '🤖'
                        }
                    }
                },
                {
                    id: 'features-2',
                    template: 'FeatureGrid',
                    content: {
                        items: [
                            { title: '多语言支持', desc: '轻松触达全球用户。', icon: '🌐' },
                            { title: '数据看板', desc: '实时监控业务增长状况。', icon: '📊' },
                            { title: '云端协作', desc: '团队协同从未如此简单。', icon: '☁️' }
                        ]
                    }
                },
                {
                    id: 'split-1',
                    template: 'SplitSection',
                    content: {
                        title: '艺术与技术的交汇点',
                        subtitle: '我们相信，伟大的产品诞生于感性的创意与理性的逻辑之间。',
                        content: '在 AntiGravity，我们不只是在编写代码或绘制图形。我们是在构建桥梁，连接品牌与用户之间的情感纽带。通过深入的行业洞察和前沿的技术栈，我们确保您的每一个数字足迹都令人难忘。',
                        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
                        imageLeft: false,
                        ctaText: '了解我们的方法论'
                    }
                },
                {
                    id: 'cta-home',
                    template: 'CtaSection',
                    content: {
                        title: '准备好改变现状了吗？',
                        subtitle: '加入数十家已经通过 AntiGravity 重新定义品牌高度的企业。',
                        ctaText: '开启免费咨询'
                    }
                }
            ]
        },
        {
            id: 'about',
            title: '关于我们',
            slug: '/about',
            blocks: [
                {
                    id: 'hero-2',
                    template: 'HeroSection',
                    content: {
                        title: '关于 AntiGravity',
                        subtitle: '成立于 2024 年，我们致力于重新定义网页美学。',
                        ctaText: '了解历程',
                        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                    }
                },
                {
                    id: 'team-about',
                    template: 'TeamSection',
                    content: {
                        title: '幕后英雄',
                        subtitle: '一群热爱技术且有着极致追求的创作者。'
                    }
                },
                {
                    id: 'features-about',
                    template: 'FeatureGrid',
                    content: {
                        items: [
                            { title: '愿景', desc: '让美学在数字世界流淌。', icon: '👁️' },
                            { title: '使命', desc: '为客户创造持续的价值。', icon: '🎯' },
                            { title: '价值观', desc: '诚实、创新、卓越。', icon: '💎' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'services',
            title: '我们的服务',
            slug: '/services',
            blocks: [
                {
                    id: 'hero-services',
                    template: 'HeroSection',
                    content: {
                        title: '赋能业务增长',
                        subtitle: '专业的解决方案，助力您的品牌腾飞。',
                        ctaText: '预约咨询',
                        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                    }
                },
                {
                    id: 'split-services-1',
                    template: 'SplitSection',
                    content: {
                        title: '全栈式技术支持',
                        subtitle: '从底层架构到顶层视觉，我们面面俱到。',
                        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
                        imageLeft: true,
                        ctaText: '查看技术栈'
                    }
                },
                {
                    id: 'bento-services',
                    template: 'BentoGrid',
                    content: {
                        title: '我们的专长',
                        subtitle: '精通多个领域的技术实施',
                        mainItem: {
                            title: 'UI/UX 设计',
                            desc: '以用户为中心，打造极具艺术感的交互体验。',
                            icon: '✨',
                            bgText: 'DESIGN'
                        },
                        item2: {
                            title: '全栈开发',
                            desc: '从后端架构到前端细节的极致打磨。',
                            icon: '💻'
                        },
                        item3: {
                            title: 'SEO 优化',
                            icon: '📈'
                        },
                        item4: {
                            title: '全天候支持',
                            icon: '📞'
                        }
                    }
                },
                {
                    id: 'faq-services',
                    template: 'FaqSection',
                    content: {
                        title: '服务答疑',
                        subtitle: '解答您在合作前可能存在的顾虑。'
                    }
                }
            ]
        }
    ]
})

// 默认逻辑配置
export const blockDefaults = {
    BentoGrid: {
        title: '核心优势',
        subtitle: '全方位的技术保障',
        mainItem: {
            title: '核心竞争力',
            desc: '我们的底层引擎采用了最先进的原子化区块技术，确保每一个页面都能在毫秒级内完成渲染并适配全局主题。',
            icon: '💎',
            bgText: 'CORE'
        },
        item2: { title: '多端适配', desc: '完美支持各种屏幕尺寸。', icon: '📱' },
        item3: { title: '安全稳定', icon: '🔒' },
        item4: { title: '急速性能', icon: '⚡' }
    },
    FeatureGrid: {
        items: [
            { title: '极速响应', desc: '原生级渲染速度。', icon: '⚡' },
            { title: '主题感应', desc: '自适应视觉风格。', icon: '🎨' },
            { title: '模块化', desc: '自由组合区块。', icon: '🧩' }
        ]
    },
    HeroSection: {
        title: '开启你的数字旅程',
        subtitle: '这是通过快捷面板动态添加的区块，它完美适配当前主题。',
        ctaText: '了解更多',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    SplitSection: {
        title: '不仅是设计，更是品牌灵魂',
        subtitle: '通过深度访谈调研，我们将您的商业理念转化为具体的视觉符号，确保每一个细节都能引起共鸣。',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        imageLeft: true,
        ctaText: '开始合作'
    },
    TeamSection: {
        title: '精英团队',
        subtitle: '顶尖的工程师与设计师，为您的项目保驾护航。'
    },
    FaqSection: {
        title: '常见建议',
        subtitle: '帮助您快速上手'
    },
    CtaSection: {
        title: '准备好加入我们了吗？',
        subtitle: '现在就开启您的品牌升级计划。',
        ctaText: '立即预约'
    }
}



export const currentPage = computed(() => {
    return siteData.pages.find(p => p.id === siteData.currentPageId) || siteData.pages[0]
})

export const changePage = (pageId) => {
    siteData.currentPageId = pageId
}

export const toggleBlock = (template) => {
    const page = siteData.pages.find(p => p.id === siteData.currentPageId)
    const index = page.blocks.findIndex(b => b.template === template)

    if (index > -1) {
        if (page.blocks.length > 1) {
            page.blocks.splice(index, 1)
        }
    } else {
        page.blocks.push({
            id: Date.now().toString(),
            template: template,
            content: { ...blockDefaults[template] }
        })
    }
}
