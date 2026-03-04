import { reactive, computed } from 'vue'

export const siteData = reactive({
    config: {
        theme: 'pop-art', // 'pop-art', 'minimal', 'fresh', 'luxury', 'cyberpunk', 'yellow'
        siteName: 'Block Studio'
    },
    navigation: {
        template: 'MainNavbar',
        logo: {
            primary: 'BLOCK',
            secondary: 'STUDIO'
        },
        ctaText: '开始尝试',
        tagline: 'Creative Studio',
        directoryTitle: 'Main Directory',
        extraLinks: [
            { label: 'Work with us', link: '#' },
            { label: 'Photography', link: '#' },
            { label: 'Contact', link: '#' }
        ]
    },
    footer: {
        template: 'MainFooter',
        siteDescription: '致力于用设计与技术重新定义数字世界的边界。每一个像素，都承载着我们的梦想。',
        newsletterTitle: '周刊订阅',
        newsletterSubtitle: '获取最新的设计趋势与技术分享。',
        newsletterPlaceholder: 'your@email.com',
        newsletterButton: '订阅',
        socialLinks: [
            { label: 'TW', link: '#' },
            { label: 'IG', link: '#' },
            { label: 'FB', link: '#' },
            { label: 'GH', link: '#' }
        ],
        bottomLinks: [
            { label: '隐私政策', link: '#' },
            { label: '服务协议', link: '#' },
            { label: 'Cookie 设置', link: '#' }
        ],
        ctaTitle: 'Ready to elevate your digital presence?',
        primaryCtaText: 'Start a Project',
        secondaryCtaText: 'View Showcase',
        contactTitle: 'Contact Us',
        email: 'hello@blockstudio.io',
        phone: '+1 (555) 000-1234',
        studioTitle: 'Studio',
        locationsTitle: 'Locations',
        locations: ['Tokyo / Shibuya', 'London / Soho', 'New York / BK'],
        bottomLogo: 'BLOCK.STUDIO',
        bottomTagline: 'Designed with Passion & Code',
        copyrightText: '所有权利保留。'
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
        title: '核心特性',
        subtitle: '我们提供最前沿的技术支持与设计方案',
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
        subtitle: '顶尖的工程师与设计师，为您的项目保驾护航。',
        members: [
            { name: 'Alex Rivera', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: '有着 10 年数字设计经验，致力于打造未来的互联网美学。' },
            { name: 'Sarah Chen', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', bio: '像素级强迫症患者，在她的世界里，美就是正义。' },
            { name: 'Marcus Wood', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', bio: '全栈架构师，任何复杂的需求在他手中都能化繁为简。' },
            { name: 'Elena Petrova', role: 'Strategy Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: '擅长市场趋势分析，为客户品牌提供最深度的洞察。' }
        ]
    },
    FaqSection: {
        title: '常见建议',
        subtitle: '帮助您快速上手',
        items: [
            { question: '你们能根据我的特定风格定制主题吗？', answer: '当然！我们的引擎天生支持各种视觉风格。无论是极简、复古还是超前，我们都能通过精确的 CSS 注入为您打造个性化体验。' },
            { question: '项目通常需要多长时间交付？', answer: '根据复杂程度，绝大多数企业官网项目都能在 2-4 周内完成从设计到上线的全过程。' },
            { question: '你们提供后续的维护服务吗？', answer: '我们提供 7*24 小时的技术支持和持续的内容更新服务。确保您的网站始终处于最佳性能状态。' },
            { question: '系统是否支持多语言切换？', answer: '是的，我们的架构完全支持多语言。您可以根据全球业务需求，轻松添加无限种语言选项。' }
        ]
    },
    CtaSection: {
        title: '准备好加入我们了吗？',
        subtitle: '现在就开启您的品牌升级计划。',
        ctaText: '立即预约'
    },
    StatsSection: {
        title: '数据证明实力',
        subtitle: '我们用结果说话，以下是我们在过去一年中取得的里程碑。',
        items: [
            { value: '250+', label: '完成项目', desc: '覆盖 20 多个国家及地区的精品案例。' },
            { value: '98%', label: '客户满意度', desc: '每一个项目都是我们极致匠心的体现。' },
            { value: '15+', label: '设计奖项', desc: '获得国际权威机构的高度认可与肯定。' },
            { value: '50ms', label: '渲染速度', desc: '极速流畅的数字交互体验，拒绝等待。' }
        ]
    },
    LogoCloud: {
        title: '值得信赖的合作伙伴',
        subtitle: '与全球顶尖品牌共同创造数字未来。',
        items: [
            { name: 'Apple' }, { name: 'SpaceX' }, { name: 'Google' }, { name: 'Adobe' }, { name: 'Tesla' }, { name: 'Microsoft' }
        ]
    },
    PricingSection: {
        title: '透明的定价方案',
        subtitle: '无论您是初创工作室还是跨国企业，我们都有最适合您的计划。',
        items: [
            {
                name: '创意人',
                priceMonthly: 0,
                priceYearly: 0,
                desc: '探索数字艺术的无限可能，免费起步。',
                features: ['3 个活跃区块', '标准主题库', '社区支持', 'AG.Cloud 托管'],
                featured: false,
                cta: '立即免费尝试'
            },
            {
                name: '工作室',
                priceMonthly: 299,
                priceYearly: 239,
                desc: '为专业团队设计的进阶协作工具。',
                features: ['无限区块数量', '自定义主题注入', '优先技术支持', '私有云部署', '团队权限管理'],
                featured: true,
                cta: '开启 14 天试用'
            },
            {
                name: '企业版',
                priceMonthly: 999,
                priceYearly: 799,
                desc: '满足对安全、稳定与性能的极致追求。',
                features: ['SLA 全时报障', '安全审计支持', '1对1专属顾问', '全栈 API 接入'],
                featured: false,
                cta: '联系大客户经理'
            }
        ]
    },
    TestimonialsSection: {
        title: '用户真实反馈',
        subtitle: '听听那些已经通过 Block Studio 重新定义了品牌高度的创作者们怎么说。',
        items: [
            {
                name: '张小龙',
                role: '高级产品经理',
                content: '这是我用过的最直观的区块化开发系统。设计感极强，且主题适配得严丝合缝。'
            },
            {
                name: '陈安妮',
                role: '独立设计师',
                content: 'Block Studio 完美平衡了灵活性与设计约束。它让我的创意能够在短时间内以最高水准呈现。'
            },
            {
                name: '王兴',
                role: '全栈开发者',
                content: '作为开发者，我非常欣赏它数据与样式分离的设计理念。二次开发和主题定制都非常顺畅。'
            }
        ]
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
